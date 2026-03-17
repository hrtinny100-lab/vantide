// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

interface IVault {
    function depositCommit(bytes32 positionId, uint96 collateralUsd) external;
    function settleAndWithdraw(bytes32 positionId, int256 pnl, address to) external;
    function settleLiquidation(bytes32 positionId, address feeSink, address liquidator) external;
}
