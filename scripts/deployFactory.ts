import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const VTVLVestingFactory = await ethers.getContractFactory(
    "VTVLVestingFactory"
  );
  const vestingFactoryContract = await VTVLVestingFactory.deploy();
  console.log(
    `vestingFactoryContract initialized on ${vestingFactoryContract.address}, waiting to be deployed...`
  );
  const tx = await vestingFactoryContract.deployed();
  console.log(
    "Deployed a vesting contract to:",
    vestingFactoryContract.address
  );

  await tx.deployTransaction.wait();

  await hre.run("verify:verify", {
    address: vestingFactoryContract.address,
    contract: "contracts/VTVLVestingFactory.sol:VTVLVestingFactory",
    constructorArguments: [],
  });

  // await hre.run("verify:verify", {
  //   address: "0xE1e90b318f6FB50a852DF381D450C4b4B2Ab0A5b",
  //   contract: "contracts/VTVLVesting.sol:VTVLVesting",
  //   constructorArguments: [
  //     "0xFe1c5FE9B0e1441D8857d0576eA48CA077AbD098",
  //     "0xe456f9A32E5f11035ffBEa0e97D1aAFDA6e60F03",
  //     "0xe456f9A32E5f11035ffBEa0e97D1aAFDA6e60F03",
  //     [
  //       1682233200,
  //       1682665200,
  //       3600 * 24 * 30,
  //       10,
  //       parseEther("100"),
  //       parseEther("1"),
  //     ],
  //   ],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
