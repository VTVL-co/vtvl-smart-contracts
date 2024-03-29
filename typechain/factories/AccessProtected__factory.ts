/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  AccessProtected,
  AccessProtectedInterface,
} from "../AccessProtected";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "AdminAccessSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressToCheck",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isEnabled",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class AccessProtected__factory {
  static readonly abi = _abi;
  static createInterface(): AccessProtectedInterface {
    return new utils.Interface(_abi) as AccessProtectedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessProtected {
    return new Contract(address, _abi, signerOrProvider) as AccessProtected;
  }
}
