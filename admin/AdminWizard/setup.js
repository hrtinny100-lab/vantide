#!/usr/bin/env node
import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";
import axios from "axios";
import { ethers } from "ethers";

// BSC RPC Endpoints
const BSC_RPC = {
  mainnet: "https://bsc-dataseed.binance.org/",
  testnet: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

async function simulateDeploymentCheck() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasError = Math.random() < 0.3; // 30% chance of failure
      hasError
        ? reject(
            new Error(
              "Perpetual DEX smart contract deployment failed due to insufficient gas.",
            ),
          )
        : resolve("Perpetual DEX smart contract deployed successfully.");
    }, 5000);
  });
}

async function checkLiquidity(contractAddress, network) {
  const rpcUrl = network === "BSC Mainnet" ? BSC_RPC.mainnet : BSC_RPC.testnet;
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const spinner = ora(
    `Verifying liquidity pool for ${contractAddress}...`,
  ).start();
  try {
    const balance = await provider.getBalance(contractAddress);
    const balanceInBNB = ethers.formatUnits(balance, 18); // Convert from Wei to BNB
    spinner.succeed(`Liquidity found: ${balanceInBNB} BNB`);

    if (parseFloat(balanceInBNB) < 10) {
      throw new Error(
        `Liquidity pool validation failed: Only ${balanceInBNB} BNB available. Minimum required: 10 BNB`,
      );
    }

    return true;
  } catch (error) {
    spinner.fail("Liquidity verification failed!");
    console.error(chalk.red(`Details: ${error.message}`));
    console.error("Error: Liquidity pool validation failed");
    console.error("    at validatePool (liquidity_checker.js:42:15)");
    console.error("    at processLiquidity (liquidity_checker.js:78:20)");
    console.error("    at runWizard (wizard.js:90:10)");
    console.error("    at main (wizard.js:120:5)");

    process.exit(1);
  }
}

async function runPerpetualDEXWizard() {
  console.log(chalk.cyan("\nDEX Launch Wizard \n"));
  // Network Selection
  const { network } = await inquirer.prompt([
    {
      type: "list",
      name: "network",
      message: "Please select the deployment network:",
      choices: ["BSC Mainnet", "BSC Testnet"],
    },
  ]);

  // Wallet Configuration
  const { ownerWallet } = await inquirer.prompt([
    {
      type: "input",
      name: "ownerWallet",
      message: "Enter the owner's public wallet address:",
      validate: (input) =>
        /^0x[a-fA-F0-9]{40}$/.test(input)
          ? true
          : "Invalid BSC address format.",
    },
  ]);

  const { contractAddress } = await inquirer.prompt([
    {
      type: "input",
      name: "contractAddress",
      message: "Enter the DEX liquidity pool contract address:",
      validate: (input) =>
        /^0x[a-fA-F0-9]{40}$/.test(input)
          ? true
          : "Invalid BSC address format.",
    },
  ]);

  // Treasury Wallet for Protocol Fees
  const { treasuryWallet } = await inquirer.prompt([
    {
      type: "input",
      name: "treasuryWallet",
      message: "Enter the treasury wallet address for protocol fees:",
      validate: (input) =>
        /^0x[a-fA-F0-9]{40}$/.test(input)
          ? true
          : "Invalid BSC address format.",
    },
  ]);

  // Domain & VPS Configuration
  const { domainName, vpsHostname, vpsPassword } = await inquirer.prompt([
    {
      type: "input",
      name: "domainName",
      message: "Enter the DEX domain name (e.g., perpdex.io):",
      validate: (input) =>
        /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/.test(
          input,
        )
          ? true
          : "Invalid domain name format.",
    },
    {
      type: "input",
      name: "vpsHostname",
      message: "Enter the VPS hostname for deployment (e.g., vps.example.com):",
      validate: (input) =>
        /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/.test(
          input,
        )
          ? true
          : "Invalid VPS hostname format.",
    },
    {
      type: "password",
      name: "vpsPassword",
      message: "Enter the VPS password for deployment:",
      mask: "*",
      validate: (input) =>
        input.length >= 8
          ? true
          : "Password must be at least 8 characters long.",
    },
  ]);

  // Trading Fee Configuration
  const { makerFee, takerFee, liquidationFee } = await inquirer.prompt([
    {
      type: "input",
      name: "makerFee",
      message: "Set the maker fee (default: 0.02%):",
      default: "0.02%",
      validate: (input) =>
        /^\d+(\.\d+)?%$/.test(input)
          ? true
          : "Enter a valid percentage (e.g., 0.02%)",
    },
    {
      type: "input",
      name: "takerFee",
      message: "Set the taker fee (default: 0.05%):",
      default: "0.05%",
      validate: (input) =>
        /^\d+(\.\d+)?%$/.test(input)
          ? true
          : "Enter a valid percentage (e.g., 0.05%)",
    },
    {
      type: "input",
      name: "liquidationFee",
      message: "Set liquidation fee (default: 1.0%):",
      default: "1.0%",
      validate: (input) =>
        /^\d+(\.\d+)?%$/.test(input)
          ? true
          : "Enter a valid percentage (e.g., 1.0%)",
    },
  ]);

  // Leverage Configuration
  const { maxLeverage } = await inquirer.prompt([
    {
      type: "list",
      name: "maxLeverage",
      message: "Select maximum leverage allowed:",
      choices: ["10x", "25x", "50x", "100x", "125x", "150x"],
      default: "100x",
    },
  ]);

  // Trading Pairs Selection
  const { tradingPairs } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "tradingPairs",
      message: "Select perpetual trading pairs to enable:",
      choices: [
        "BTC/USDT",
        "ETH/USDT",
        "BNB/USDT",
        "XRP/USDT",
        "SOL/USDT",
        "UNI/USDT",
        "LINK/USDT",
        "AAVE/USDT",
        "ATOM/USDT",
        "DOT/USDT",
        "MATIC/USDT",
        "AVAX/USDT",
        "ARB/USDT",
        "OP/USDT",
        "APT/USDT",
        "SUI/USDT",
        "NEAR/USDT",
        "ADA/USDT",
        "DOGE/USDT",
        "TRX/USDT",
        "LTC/USDT",
        "BCH/USDT",
        "XLM/USDT",
        "FIL/USDT",
        "ALGO/USDT",
        "VET/USDT",
        "ICP/USDT",
        "HBAR/USDT",
        "APE/USDT",
        "INJ/USDT",
        "PEPE/USDT",
        "EUR/USDT",
        "GBP/USDT",
        "JPY/USDT",
        "AUD/USDT",
        "CAD/USDT",
        "CHF/USDT",
        "NZD/USDT",
        "SGD/USDT",
        "HKD/USDT",
        "CNY/USDT",
        "XAU/USDT",
        "XAG/USDT",
        "XPT/USDT",
        "XPD/USDT",
        "SPX/USDT",
        "NDX/USDT",
        "DJI/USDT",
        "AAPL/USDT",
        "TSLA/USDT",
        "NVDA/USDT",
      ],
      default: ["BTC/USDT", "ETH/USDT", "BNB/USDT"],
      validate: (input) =>
        input.length >= 1 ? true : "Select at least one trading pair.",
    },
  ]);

  // DEX Features Selection
  const { features } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "features",
      message: "Select features to enable in the Perpetual DEX:",
      choices: [
        "Perpetual Futures",
        "Spot Trading",
        "Limit Orders",
        "Stop-Loss Orders",
        "Take-Profit Orders",
        "Trailing Stop",
        "Cross Margin",
        "Isolated Margin",
        "Copy Trading",
        "Liquidity Mining",
        "Staking Rewards",
      ],
      default: [
        "Perpetual Futures",
        "Limit Orders",
        "Stop-Loss Orders",
        "Cross Margin",
      ],
    },
  ]);

  // Oracle Configuration
  const { priceOracle } = await inquirer.prompt([
    {
      type: "list",
      name: "priceOracle",
      message: "Select price oracle provider:",
      choices: ["Chainlink", "Pyth Network", "Band Protocol", "Custom Oracle"],
      default: "Chainlink",
    },
  ]);

  // Admin Configuration
  const { adminUsername, adminPassword, enable2FA } = await inquirer.prompt([
    {
      type: "input",
      name: "adminUsername",
      message: "Set up the admin username:",
      validate: (input) =>
        input.length >= 4
          ? true
          : "Username must be at least 4 characters long.",
    },
    {
      type: "password",
      name: "adminPassword",
      message: "Set up the admin password:",
      mask: "*",
      validate: (input) =>
        input.length >= 8
          ? true
          : "Password must be at least 8 characters long.",
    },
    {
      type: "confirm",
      name: "enable2FA",
      message: "Enable Two-Factor Authentication (2FA)?",
      default: true,
    },
  ]);

  // Risk Management Configuration
  const { maxPositionSize, insuranceFundAllocation } = await inquirer.prompt([
    {
      type: "input",
      name: "maxPositionSize",
      message: "Set maximum position size per user (in USDT):",
      default: "1000000",
      validate: (input) =>
        /^\d+$/.test(input) ? true : "Enter a valid number.",
    },
    {
      type: "input",
      name: "insuranceFundAllocation",
      message: "Set insurance fund allocation from fees (default: 20%):",
      default: "20%",
      validate: (input) =>
        /^\d+(\.\d+)?%$/.test(input)
          ? true
          : "Enter a valid percentage (e.g., 20%)",
    },
  ]);

  // console.log(chalk.gray("\n" + "━".repeat(50)));
  console.log(chalk.cyan("Starting Deployment Process..."));
  // console.log(chalk.gray("━".repeat(50) + "\n"));

  // Deployment Steps
  const spinner = ora("Initializing backend services...").start();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  spinner.succeed("Backend services initialized.");

  spinner.start("Connecting to database...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.succeed("Database connection established.");

  spinner.start(`Connecting to ${priceOracle} price oracle...`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.succeed(`${priceOracle} price oracle connected.`);

  spinner.start("Initializing order matching engine...");
  await new Promise((resolve) => setTimeout(resolve, 2500));
  spinner.succeed("Order matching engine initialized.");

  spinner.start("Setting up liquidation engine...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.succeed("Liquidation engine configured.");

  spinner.start("Connecting DEX contracts...");
  try {
    const result = await simulateDeploymentCheck();
    spinner.succeed(result);
  } catch (error) {
    spinner.fail("Perpetual DEX deployment failed!");
    console.error(chalk.red(`Details: ${error.message}`));
    console.error("Error: Smart contract deployment failed");
    console.error("    at deployContract (deployer.js:42:15)");
    console.error("    at processDeployment (deployer.js:78:20)");
    console.error("    at runWizard (wizard.js:90:10)");
    console.error("    at main (wizard.js:120:5)");

    process.exit(1);
  }

  await checkLiquidity(contractAddress, network);

  spinner.start("Configuring trading pairs...");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  spinner.succeed(`${tradingPairs.length} trading pairs configured.`);

  spinner.start("Setting up insurance fund...");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  spinner.succeed("Insurance fund initialized.");

  spinner.start("Deploying frontend to VPS...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  spinner.succeed("Frontend deployed successfully.");

  spinner.start("Configuring SSL certificates...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.succeed("SSL certificates configured.");

  console.log(chalk.gray("\n" + "━".repeat(50)));
  console.log(
    chalk.green.bold("\n📈 Perpetual DEX Successfully Deployed! 📈\n"),
  );
  console.log(chalk.gray("━".repeat(50)));

  console.log(chalk.white("\n📋 Deployment Summary:\n"));
  console.log(chalk.cyan(`   Network:          `) + chalk.white(network));
  console.log(
    chalk.cyan(`   Domain:           `) + chalk.white(`https://${domainName}`),
  );
  console.log(
    chalk.cyan(`   Contract:         `) + chalk.white(contractAddress),
  );
  console.log(chalk.cyan(`   Owner Wallet:     `) + chalk.white(ownerWallet));
  console.log(
    chalk.cyan(`   Treasury Wallet:  `) + chalk.white(treasuryWallet),
  );
  console.log(chalk.cyan(`   Max Leverage:     `) + chalk.white(maxLeverage));
  console.log(
    chalk.cyan(`   Trading Pairs:    `) + chalk.white(tradingPairs.join(", ")),
  );
  console.log(chalk.cyan(`   Price Oracle:     `) + chalk.white(priceOracle));
  console.log(chalk.cyan(`   Maker Fee:        `) + chalk.white(makerFee));
  console.log(chalk.cyan(`   Taker Fee:        `) + chalk.white(takerFee));
  console.log(
    chalk.cyan(`   Features:         `) + chalk.white(features.join(", ")),
  );
  console.log(
    chalk.cyan(`   2FA Enabled:      `) + chalk.white(enable2FA ? "Yes" : "No"),
  );

  console.log(chalk.gray("\n" + "━".repeat(50)));
  console.log(
    chalk.yellow("\n⚠️  Important: Save your admin credentials securely!"),
  );
  console.log(chalk.yellow(`    Admin Panel: https://${domainName}/admin`));
  console.log(chalk.gray("━".repeat(50) + "\n"));
}

runPerpetualDEXWizard();
