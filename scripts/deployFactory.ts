import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  // const VTVLVestingFactory = await ethers.getContractFactory(
  //   "VTVLVestingFactory"
  // );
  // const vestingFactoryContract = await VTVLVestingFactory.deploy();
  // console.log(
  //   `vestingFactoryContract initialized on ${vestingFactoryContract.address}, waiting to be deployed...`
  // );
  // const tx = await vestingFactoryContract.deployed();
  // console.log(
  //   "Deployed a vesting contract to:",
  //   vestingFactoryContract.address
  // );

  // await tx.deployTransaction.wait();

  await hre.run("verify:verify", {
    address: "0x35c8458Ca26C19B94E8F8807efc592628995E8Bf",
    contract: "contracts/VTVLVesting.sol:VTVLVesting",
    constructorArguments: ["0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C"],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
