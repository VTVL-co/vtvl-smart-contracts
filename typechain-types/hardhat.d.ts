/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolErrors__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "TickMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMath__factory>;
    getContractFactory(
      name: "AccessProtected",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessProtected__factory>;
    getContractFactory(
      name: "IVestingFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVestingFee__factory>;
    getContractFactory(
      name: "BaseMilestone",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseMilestone__factory>;
    getContractFactory(
      name: "SimpleMilestone",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleMilestone__factory>;
    getContractFactory(
      name: "VestingMilestone",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VestingMilestone__factory>;
    getContractFactory(
      name: "TestERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20Token__factory>;
    getContractFactory(
      name: "FullPremintERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FullPremintERC20Token__factory>;
    getContractFactory(
      name: "VariableSupplyERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VariableSupplyERC20Token__factory>;
    getContractFactory(
      name: "IERC20Extented",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Extented__factory>;
    getContractFactory(
      name: "UniswapOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapOracle__factory>;
    getContractFactory(
      name: "VTVLMilestoneFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTVLMilestoneFactory__factory>;
    getContractFactory(
      name: "VTVLVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTVLVesting__factory>;
    getContractFactory(
      name: "VTVLVestingFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTVLVestingFactory__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolErrors>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "TickMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickMath>;
    getContractAt(
      name: "AccessProtected",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessProtected>;
    getContractAt(
      name: "IVestingFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVestingFee>;
    getContractAt(
      name: "BaseMilestone",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseMilestone>;
    getContractAt(
      name: "SimpleMilestone",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleMilestone>;
    getContractAt(
      name: "VestingMilestone",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VestingMilestone>;
    getContractAt(
      name: "TestERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20Token>;
    getContractAt(
      name: "FullPremintERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FullPremintERC20Token>;
    getContractAt(
      name: "VariableSupplyERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VariableSupplyERC20Token>;
    getContractAt(
      name: "IERC20Extented",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Extented>;
    getContractAt(
      name: "UniswapOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapOracle>;
    getContractAt(
      name: "VTVLMilestoneFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTVLMilestoneFactory>;
    getContractAt(
      name: "VTVLVesting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTVLVesting>;
    getContractAt(
      name: "VTVLVestingFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTVLVestingFactory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
