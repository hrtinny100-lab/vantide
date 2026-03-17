const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("🚀 Deploying all main contracts with:", deployer);

  // Core contracts
  const coreContracts = [
    "AddressesProvider",
    "ConfigurationProvider",
    "Backtracker",
    "Executor",
    "FeeCollector",
    "FundingRate",
    "OrderManager",
    "PositionManager",
    "RiskReserve",
    "Router"
  ];

  // Earn contracts
  const earnContracts = [
    "Convertor",
    "FeeDistributor",
    "LPStakingPool",
    "RewardDistributor",
    "StakingPool",
    "Vester"
  ];

  // Pool contracts
  const poolContracts = [
    "Pool",
    "PoolToken",
    "PoolTokenFactory",
    "PoolView"
  ];

  // Oracle contracts
  const oracleContracts = [
    "ChainlinkPriceFeed",
    "IndexPriceFeed",
    "PythOraclePriceFeed",
    "PythOraclePriceFeedV2"
  ];

  // Tools & utility contracts
  const toolContracts = [
    "AddressesProvider",
    "RoleManager",
    "PositionCaller",
    "SpotSwap",
    "Timelock"
  ];

  // Token contracts
  const tokenContracts = [
    "BaseToken",
    "RaVantide",
    "StVantide",
    "Vantide"
  ];

  // Combine all into one list (avoid duplicates)
  const allContracts = [
    ...new Set([
      ...coreContracts,
      ...earnContracts,
      ...poolContracts,
      ...oracleContracts,
      ...toolContracts,
      ...tokenContracts
    ])
  ];

  for (const name of allContracts) {
    console.log(`\n📦 Deploying ${name}...`);
    try {
      const deployment = await deploy(name, {
        from: deployer,
        log: true,
      });
      console.log(`✅ ${name} deployed at: ${deployment.address}`);
    } catch (err) {
      console.warn(`⚠️ Skipping ${name}: ${err.message}`);
    }
  }

  console.log("\n🎉 Deployment complete!");
};

module.exports.tags = ["All"];
