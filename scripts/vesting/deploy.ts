import { ethers } from "hardhat";

import { readContract, writeContract } from "../utils/io";
import { CONTRACT_NAMES } from "../utils/constants";

const main = async () => {
  const tokenContract = readContract(CONTRACT_NAMES.VTVLToken);

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

  writeContract(CONTRACT_NAMES.VTVLVesting, vestingContract.address, [
    tokenContract.address,
  ]);
};

main();
