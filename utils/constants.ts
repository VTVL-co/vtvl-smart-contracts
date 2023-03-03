import * as dotenv from "dotenv";
dotenv.config();

export const INFURA_PROJECT_ID: string = process.env.INFURA_PROJECT_ID || "";

export const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY || "";

export const SUPPORTED_CHAIN_NAMES = ["mainnet", "goerli", "base-goerli"];

export const SUPPORTED_RPC_ENDPOINTS = {
  mainnet: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
  goerli: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
  "base-goerli": "https://goerli.base.org",
} as const;

export const SUPPORTED_CHAIN_IDS = {
  mainnet: 1,
  goerli: 5,
  "base-goerli": 84531,
} as const;
