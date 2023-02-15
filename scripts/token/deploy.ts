import { ethers } from "hardhat";

import { writeContract } from "../utils/io";
import { CONTRACT_NAMES } from "../utils/constants";

const main = async () => {
  // We get the contract to deploy
  const TokenFactory = await ethers.getContractFactory("TestERC20Token");
  const tokenContract = await TokenFactory.deploy(
    "VTVL",
    "VTVL",
    "10000000000000000000000000000"
  );
  console.log(
    `Token Contract initialized on ${tokenContract.address}, waiting to be deployed...`
  );
  await tokenContract.deployed();
  console.log("Deployed a token contract to:", tokenContract.address);

  writeContract(CONTRACT_NAMES.VTVLToken, tokenContract.address, [
    "VTVL",
    "VTVL",
    "10000000000000000000000000000",
  ]);
};

main();
