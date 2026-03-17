import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const timelock = process.env.TIMELOCK as string;
  const executor = process.env.EXECUTOR as string;
  const oracle = process.env.ORACLE as string;
  const vault  = process.env.VAULT  as string;
  const feeSink= process.env.FEE_SINK as string;
  if (!timelock || !executor || !oracle || !vault || !feeSink) {
    throw new Error("Missing env vars: TIMELOCK, EXECUTOR, ORACLE, VAULT, FEE_SINK");
  }

  const Factory = await ethers.getContractFactory("PrivatePositions");
  const c = await Factory.deploy(timelock, executor, oracle, vault, feeSink);
  await c.deployed();
  console.log("PrivatePositions:", c.address);
}

main().catch((e) => { console.error(e); process.exit(1); });
