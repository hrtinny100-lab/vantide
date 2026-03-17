// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

interface IOracleAdapter {
    function entryData(uint16 pairId, bool isLong) external view returns (int96 px, int96 funding);
    function exitData(uint16 pairId, bool isLong) external view returns (int96 px, int96 funding);
}
