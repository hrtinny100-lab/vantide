// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

import {CommitmentLib} from "./libraries/CommitmentLib.sol";
import {IOracleAdapter} from "./interfaces/IOracleAdapter.sol";
import {IVault} from "./interfaces/IVault.sol";

contract PrivatePositions {
    using CommitmentLib for bytes32;

    struct Commitment {
        uint16 pairId;
        bool isLong;
        uint96 sizeUsd;
        uint96 collateralUsd;
        bytes32 ownerPubkeyHash;
        bytes32 salt;
        bytes32 withdrawAuthHash;
        uint64  deadline;
        bool    revealed;
    }

    struct Position {
        uint16 pairId;
        bool isLong;
        uint96 sizeUsd;
        uint96 collateralUsd;
        int96  entryFunding;
        int96  entryPx;
        bytes32 withdrawAuthHash;
    }

    mapping(bytes32 => Commitment) public commitments;
    mapping(bytes32 => Position)   public positions;
    mapping(bytes32 => bytes32)    public commitmentToPosition;

    address public timelock;
    address public executor;
    address public feeSink;
    IOracleAdapter public oracle;
    IVault public vault;

    event Committed(bytes32 indexed posId, uint16 pairId, bool isLong, uint96 sizeUsd, uint96 collateralUsd, bytes32 withdrawAuthHash, uint64 deadline);
    event RevealedAndOpened(bytes32 indexed posId, int96 entryPx, int96 entryFunding);
    event Closed(bytes32 indexed posId, address payoutTo, int256 pnl);
    event Liquidated(bytes32 indexed posId, address liquidator);
    event ExecutorUpdated(address indexed executor);
    event OracleUpdated(address indexed oracle);
    event VaultUpdated(address indexed vault);
    event FeeSinkUpdated(address indexed feeSink);

    modifier onlyTimelock() { require(msg.sender == timelock, "ONLY_TIMELOCK"); _; }
    modifier onlyExecutor() { require(msg.sender == executor, "ONLY_EXECUTOR"); _; }

    constructor(address _timelock, address _executor, address _oracle, address _vault, address _feeSink) {
        timelock = _timelock;
        executor = _executor;
        oracle   = IOracleAdapter(_oracle);
        vault    = IVault(_vault);
        feeSink  = _feeSink;
    }

    function setExecutor(address _exec) external onlyTimelock { executor = _exec; emit ExecutorUpdated(_exec); }
    function setOracle(address _oracle) external onlyTimelock { oracle = IOracleAdapter(_oracle); emit OracleUpdated(_oracle); }
    function setVault(address _vault) external onlyTimelock { vault = IVault(_vault); emit VaultUpdated(_vault); }
    function setFeeSink(address _sink) external onlyTimelock { feeSink = _sink; emit FeeSinkUpdated(_sink); }

    function commitOpen(
        uint16 pairId,
        bool isLong,
        uint96 sizeUsd,
        uint96 collateralUsd,
        bytes32 ownerPubkeyHash,
        bytes32 salt,
        uint64  deadline
    ) external {
        require(deadline >= block.timestamp + 30, "DEADLINE_SOON");

        bytes32 posId = CommitmentLib.positionId(ownerPubkeyHash, pairId, isLong, salt);
        require(commitments[posId].ownerPubkeyHash == bytes32(0) && positions[posId].pairId == 0, "EXISTS");

        bytes32 withdrawHash = CommitmentLib.withdrawAuthHash(ownerPubkeyHash, salt);

        vault.depositCommit(posId, collateralUsd);

        commitments[posId] = Commitment({
            pairId: pairId,
            isLong: isLong,
            sizeUsd: sizeUsd,
            collateralUsd: collateralUsd,
            ownerPubkeyHash: ownerPubkeyHash,
            salt: salt,
            withdrawAuthHash: withdrawHash,
            deadline: deadline,
            revealed: false
        });

        emit Committed(posId, pairId, isLong, sizeUsd, collateralUsd, withdrawHash, deadline);
    }

    function revealAndOpen(
        bytes32 ownerPubkeyHash,
        uint16 pairId,
        bool isLong,
        bytes32 salt
    ) external onlyExecutor {
        bytes32 posId = CommitmentLib.positionId(ownerPubkeyHash, pairId, isLong, salt);
        Commitment storage c = commitments[posId];
        require(c.ownerPubkeyHash == ownerPubkeyHash, "NO_COMMIT");
        require(!c.revealed, "REVEALED");
        require(block.timestamp <= c.deadline, "EXPIRED");

        (int96 entryPx, int96 entryFunding) = oracle.entryData(pairId, isLong);

        positions[posId] = Position({
            pairId: pairId,
            isLong: isLong,
            sizeUsd: c.sizeUsd,
            collateralUsd: c.collateralUsd,
            entryFunding: entryFunding,
            entryPx: entryPx,
            withdrawAuthHash: c.withdrawAuthHash
        });

        c.revealed = true;
        commitmentToPosition[posId] = posId;

        emit RevealedAndOpened(posId, entryPx, entryFunding);
    }

    function closePosition(
        bytes32 ownerPubkey,
        bytes32 salt,
        uint16 pairId,
        bool isLong,
        bytes calldata sig,
        address payoutTo
    ) external {
        bytes32 ownerPubkeyHash = keccak256(abi.encode(ownerPubkey));
        bytes32 posId = CommitmentLib.positionId(ownerPubkeyHash, pairId, isLong, salt);
        Position storage p = positions[posId];
        require(p.pairId != 0, "NO_POSITION");

        require(CommitmentLib.withdrawAuthHash(ownerPubkeyHash, salt) == p.withdrawAuthHash, "BAD_AUTH");

        _verifyCloseSignature(ownerPubkey, posId, sig);

        (int96 exitPx, ) = oracle.exitData(p.pairId, p.isLong);
        int256 pnl = _calcPnl(p, exitPx);

        vault.settleAndWithdraw(posId, pnl, payoutTo);

        delete positions[posId];
        emit Closed(posId, payoutTo, pnl);
    }

    function liquidate(bytes32 posId) external {
        Position storage p = positions[posId];
        require(p.pairId != 0, "NO_POSITION");
        require(_belowMaintenance(p), "SAFE");

        vault.settleLiquidation(posId, feeSink, msg.sender);

        delete positions[posId];
        emit Liquidated(posId, msg.sender);
    }

    function _calcPnl(Position memory p, int96 exitPx) internal pure returns (int256 pnl) {
        int256 diff = int256(exitPx) - int256(p.entryPx);
        pnl = (diff * int256(uint256(p.sizeUsd))) / 1e12;
    }

    function _belowMaintenance(Position memory /*p*/) internal view returns (bool) {
        return false;
    }

    function _verifyCloseSignature(bytes32 /*ownerPubkey*/, bytes32 /*posId*/, bytes calldata /*sig*/) internal pure {}
}
