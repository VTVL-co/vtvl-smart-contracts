/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMerkleVestingContract,
  IMerkleVestingContractInterface,
} from "../../../contracts/VTVLMerkleVestingFactory.sol/IMerkleVestingContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMerkleVestingContract__factory {
  static readonly abi = _abi;
  static createInterface(): IMerkleVestingContractInterface {
    return new utils.Interface(_abi) as IMerkleVestingContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMerkleVestingContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMerkleVestingContract;
  }
}
