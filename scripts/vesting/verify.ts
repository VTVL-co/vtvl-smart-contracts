import hre from "hardhat";

import { readContract, writeContract } from "../utils/io";
import { CONTRACT_NAMES } from "../utils/constants";

const main = async () => {
  const vestingContract = readContract(CONTRACT_NAMES.VTVLVesting);

  await hre.run("verify:verify", {
    address: vestingContract.address,
    constructorArguments: vestingContract.args,
  });
};

main();
