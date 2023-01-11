// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const TestTokenFactory = await ethers.getContractFactory("TestERC20Token");
  const tokenContract = await TestTokenFactory.deploy();

  console.log("Deployed an ERC Token for testing.");
  console.log("Address:", tokenContract.address);
  console.log(
    `Name: ${await tokenContract.name()}, Symbol: ${await tokenContract.symbol()}. Supply: ${await tokenContract.totalSupply()}`
  );

  // We get the contract to deploy
  const VTVLVestingFactory = await ethers.getContractFactory("VTVLVesting");
  const vestingContract = await VTVLVestingFactory.deploy(
    tokenContract.address
  );
  console.log(
    `vestingContract initialized on ${vestingContract.address}, waiting to be deployed...`
  );
  await vestingContract.deployed();
  console.log("Deployed a vesting contract to:", vestingContract.address);

  const numTokensToInitializeContract = await tokenContract.balanceOf(
    await deployer.getAddress()
  );

  await tokenContract.transfer(
    vestingContract.address,
    numTokensToInitializeContract
  );
  console.log(
    `Transferring ${await tokenContract.symbol()} tokens to newly initialized contract (${numTokensToInitializeContract}).`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
