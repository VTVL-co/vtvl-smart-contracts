import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

import type { CONTRACT_NAME_TYPES } from "./constants";

dotenv.config();

export const getNetwork = () => {
  return process.env.DEPLOY_NETWORK || "hardhat";
};

export const writeContract = (
  contractName: CONTRACT_NAME_TYPES,
  address: string,
  args: any = []
) => {
  const NETWORK = getNetwork();

  fs.writeFileSync(
    path.join(
      __dirname,
      `../../publish/addresses/${NETWORK}/${contractName}.json`
    ),
    JSON.stringify(
      {
        address,
        args,
      },
      null,
      2
    )
  );
};

export const readContract = (contractName: CONTRACT_NAME_TYPES): any => {
  const NETWORK = getNetwork();

  try {
    const rawData = fs.readFileSync(
      path.join(
        __dirname,
        `../../publish/addresses/${NETWORK}/${contractName}.json`
      )
    );
    const info = JSON.parse(rawData.toString());
    return {
      address: info.address,
      args: info.args,
    };
  } catch (error) {
    return {
      address: null,
      args: [],
    };
  }
};

export const writeABI = (
  contractPath: string,
  contractName: CONTRACT_NAME_TYPES
): any => {
  try {
    const rawData = fs.readFileSync(
      path.join(__dirname, "../../artifacts/contracts", contractPath)
    );
    const info = JSON.parse(rawData.toString());

    fs.writeFileSync(
      path.join(__dirname, "../../publish/abis", `${contractName}.json`),
      JSON.stringify(info, null, 2)
    );
  } catch (error) {
    console.error("Writing ABI error: ", error);
  }
};
