// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/proxy/utils/Initializable.sol';

contract Vantide is ERC20, Initializable {
    constructor() ERC20('Vantide Token', 'Vantide') {}

    function initialize(address tokenLock, uint256 supply) external initializer {
        _mint(tokenLock, supply);
    }
}
