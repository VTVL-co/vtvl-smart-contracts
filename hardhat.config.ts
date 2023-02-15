import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-contract-sizer";
import "@primitivefi/hardhat-dodoc";
import "@openzeppelin/hardhat-upgrades";

import {
  ETHERSCAN_API_KEY,
  INFURA_PROJECT_ID,
  SUPPORTED_CHAIN_IDS,
  SUPPORTED_CHAIN_NAMES,
  SUPPORTED_RPC_ENDPOINTS,
} from "./utils/constants";
import { NetworkUserConfig } from "hardhat/types";

dotenv.config();

const DEPLOYER: string = process.env.DEPLOYER_PRIVATE_KEY || "";
if (!DEPLOYER) {
  throw new Error("Please set your DEPLOYER_PRIVATE_KEY in a .env file");
}

if (!INFURA_PROJECT_ID) {
  throw new Error("Please set your INFURA_PROJECT_ID in a .env file");
}

if (!ETHERSCAN_API_KEY) {
  throw new Error("Please set ETHERSCAN_API_KEY in a .env file");
}

const IS_GAS_REPORT_ENABLED = process.env.REPORT_GAS !== undefined;

function getChainConfig(
  chain: keyof typeof SUPPORTED_CHAIN_IDS
): NetworkUserConfig {
  return {
    accounts: [DEPLOYER],
    chainId: SUPPORTED_CHAIN_IDS[chain],
    url: SUPPORTED_RPC_ENDPOINTS[chain],
  };
}

function getNetworkConfig() {
  return SUPPORTED_CHAIN_NAMES.reduce((value, CHAIN_NAME) => {
    value[CHAIN_NAME] = getChainConfig(
      CHAIN_NAME as keyof typeof SUPPORTED_CHAIN_IDS
    );
    return value;
  }, {} as any);
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: getNetworkConfig(),
  gasReporter: {
    enabled: IS_GAS_REPORT_ENABLED,
    currency: "USD",
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
};

export default config;
