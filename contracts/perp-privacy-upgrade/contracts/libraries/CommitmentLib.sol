// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

library CommitmentLib {
    function positionId(
        bytes32 ownerPubkeyHash,
        uint16 pairId,
        bool isLong,
        bytes32 salt
    ) internal pure returns (bytes32) {
        return keccak256(abi.encode(ownerPubkeyHash, pairId, isLong, salt));
    }

    function withdrawAuthHash(bytes32 ownerPubkeyHash, bytes32 salt) internal pure returns (bytes32) {
        return keccak256(abi.encode(ownerPubkeyHash, salt));
    }
}
