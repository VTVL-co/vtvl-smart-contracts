/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export type ClaimInputStruct = {
  startTimestamp: BigNumberish;
  endTimestamp: BigNumberish;
  cliffReleaseTimestamp: BigNumberish;
  releaseIntervalSecs: BigNumberish;
  linearVestAmount: BigNumberish;
  cliffAmount: BigNumberish;
  recipient: string;
};

export type ClaimInputStructOutput = [
  number,
  number,
  number,
  number,
  BigNumber,
  BigNumber,
  string
] & {
  startTimestamp: number;
  endTimestamp: number;
  cliffReleaseTimestamp: number;
  releaseIntervalSecs: number;
  linearVestAmount: BigNumber;
  cliffAmount: BigNumber;
  recipient: string;
};

export declare namespace VTVLVesting {
  export type ClaimStruct = {
    startTimestamp: BigNumberish;
    endTimestamp: BigNumberish;
    cliffReleaseTimestamp: BigNumberish;
    releaseIntervalSecs: BigNumberish;
    linearVestAmount: BigNumberish;
    amountWithdrawn: BigNumberish;
    cliffAmount: BigNumberish;
    isActive: boolean;
    deactivationTimestamp: BigNumberish;
  };

  export type ClaimStructOutput = [
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    number
  ] & {
    startTimestamp: number;
    endTimestamp: number;
    cliffReleaseTimestamp: number;
    releaseIntervalSecs: number;
    linearVestAmount: BigNumber;
    amountWithdrawn: BigNumber;
    cliffAmount: BigNumber;
    isActive: boolean;
    deactivationTimestamp: number;
  };
}

export interface VTVLVestingInterface extends utils.Interface {
  functions: {
    "UNISWAP_V3_FACTORY_ADDRESS()": FunctionFragment;
    "USDC_ADDRESS()": FunctionFragment;
    "allVestingRecipients()": FunctionFragment;
    "amountAvailableToWithdrawByAdmin()": FunctionFragment;
    "claimableAmount(address,uint256)": FunctionFragment;
    "consult(uint32)": FunctionFragment;
    "conversionThreshold()": FunctionFragment;
    "createClaim((uint40,uint40,uint40,uint40,uint256,uint256,address))": FunctionFragment;
    "createClaimsBatch((uint40,uint40,uint40,uint40,uint256,uint256,address)[])": FunctionFragment;
    "feePercent()": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "finalClaimableAmount(address,uint256)": FunctionFragment;
    "finalVestedAmount(address,uint256)": FunctionFragment;
    "getClaim(address,uint256)": FunctionFragment;
    "getNumberOfVestings(address)": FunctionFragment;
    "getTokenPrice(uint128,uint32)": FunctionFragment;
    "numTokensReservedForVesting()": FunctionFragment;
    "numVestingRecipients()": FunctionFragment;
    "owner()": FunctionFragment;
    "pool()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revokeClaim(address,uint256)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "tokenAddress()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateFeeReceiver(address)": FunctionFragment;
    "updateconversionThreshold(uint256)": FunctionFragment;
    "vestedAmount(address,uint256,uint40)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawAdmin(uint256)": FunctionFragment;
    "withdrawOtherToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "UNISWAP_V3_FACTORY_ADDRESS"
      | "USDC_ADDRESS"
      | "allVestingRecipients"
      | "amountAvailableToWithdrawByAdmin"
      | "claimableAmount"
      | "consult"
      | "conversionThreshold"
      | "createClaim"
      | "createClaimsBatch"
      | "feePercent"
      | "feeReceiver"
      | "finalClaimableAmount"
      | "finalVestedAmount"
      | "getClaim"
      | "getNumberOfVestings"
      | "getTokenPrice"
      | "numTokensReservedForVesting"
      | "numVestingRecipients"
      | "owner"
      | "pool"
      | "renounceOwnership"
      | "revokeClaim"
      | "setFee"
      | "tokenAddress"
      | "transferOwnership"
      | "updateFeeReceiver"
      | "updateconversionThreshold"
      | "vestedAmount"
      | "withdraw"
      | "withdrawAdmin"
      | "withdrawOtherToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "UNISWAP_V3_FACTORY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USDC_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allVestingRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "amountAvailableToWithdrawByAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "consult",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "conversionThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createClaim",
    values: [ClaimInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createClaimsBatch",
    values: [ClaimInputStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "feePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalClaimableAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalVestedAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfVestings",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numTokensReservedForVesting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numVestingRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeClaim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateconversionThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vestedAmount",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAdmin",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawOtherToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "UNISWAP_V3_FACTORY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "USDC_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allVestingRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "amountAvailableToWithdrawByAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "conversionThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createClaimsBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feePercent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalClaimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalVestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfVestings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numTokensReservedForVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numVestingRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateconversionThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawOtherToken",
    data: BytesLike
  ): Result;

  events: {
    "AdminWithdrawn(address,uint256)": EventFragment;
    "ClaimCreated(address,tuple,uint256)": EventFragment;
    "ClaimRevoked(address,uint256,uint256,tuple,uint256)": EventFragment;
    "Claimed(address,uint256,uint256)": EventFragment;
    "FeeReceived(address,uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AdminWithdrawnEventObject {
  _recipient: string;
  _amountRequested: BigNumber;
}
export type AdminWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  AdminWithdrawnEventObject
>;

export type AdminWithdrawnEventFilter = TypedEventFilter<AdminWithdrawnEvent>;

export interface ClaimCreatedEventObject {
  _recipient: string;
  _claim: VTVLVesting.ClaimStructOutput;
  _scheduleIndex: BigNumber;
}
export type ClaimCreatedEvent = TypedEvent<
  [string, VTVLVesting.ClaimStructOutput, BigNumber],
  ClaimCreatedEventObject
>;

export type ClaimCreatedEventFilter = TypedEventFilter<ClaimCreatedEvent>;

export interface ClaimRevokedEventObject {
  _recipient: string;
  _numTokensWithheld: BigNumber;
  revocationTimestamp: BigNumber;
  _claim: VTVLVesting.ClaimStructOutput;
  _scheduleIndex: BigNumber;
}
export type ClaimRevokedEvent = TypedEvent<
  [string, BigNumber, BigNumber, VTVLVesting.ClaimStructOutput, BigNumber],
  ClaimRevokedEventObject
>;

export type ClaimRevokedEventFilter = TypedEventFilter<ClaimRevokedEvent>;

export interface ClaimedEventObject {
  _recipient: string;
  _withdrawalAmount: BigNumber;
  _scheduleIndex: BigNumber;
}
export type ClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface FeeReceivedEventObject {
  _recipient: string;
  _feeAmount: BigNumber;
  _scheduleIndex: BigNumber;
  _tokenAddress: string;
}
export type FeeReceivedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  FeeReceivedEventObject
>;

export type FeeReceivedEventFilter = TypedEventFilter<FeeReceivedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface VTVLVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VTVLVestingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    USDC_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    allVestingRecipients(overrides?: CallOverrides): Promise<[string[]]>;

    amountAvailableToWithdrawByAdmin(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    consult(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber] & {
        arithmeticMeanTick: number;
        harmonicMeanLiquidity: BigNumber;
      }
    >;

    conversionThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    createClaim(
      claimInput: ClaimInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createClaimsBatch(
      claimInputs: ClaimInputStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    feePercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeReceiver(overrides?: CallOverrides): Promise<[string]>;

    finalClaimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    finalVestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VTVLVesting.ClaimStructOutput]>;

    getNumberOfVestings(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenPrice(
      amount: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    numTokensReservedForVesting(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    numVestingRecipients(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setFee(
      _feePercent: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateFeeReceiver(
      _newReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateconversionThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    vestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _scheduleIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawAdmin(
      _amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawOtherToken(
      _otherTokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<string>;

  USDC_ADDRESS(overrides?: CallOverrides): Promise<string>;

  allVestingRecipients(overrides?: CallOverrides): Promise<string[]>;

  amountAvailableToWithdrawByAdmin(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimableAmount(
    _recipient: string,
    _scheduleIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  consult(
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber] & {
      arithmeticMeanTick: number;
      harmonicMeanLiquidity: BigNumber;
    }
  >;

  conversionThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  createClaim(
    claimInput: ClaimInputStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createClaimsBatch(
    claimInputs: ClaimInputStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  feePercent(overrides?: CallOverrides): Promise<BigNumber>;

  feeReceiver(overrides?: CallOverrides): Promise<string>;

  finalClaimableAmount(
    _recipient: string,
    _scheduleIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  finalVestedAmount(
    _recipient: string,
    _scheduleIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getClaim(
    _recipient: string,
    _scheduleIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VTVLVesting.ClaimStructOutput>;

  getNumberOfVestings(
    _recipient: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenPrice(
    amount: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  numTokensReservedForVesting(overrides?: CallOverrides): Promise<BigNumber>;

  numVestingRecipients(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeClaim(
    _recipient: string,
    _scheduleIndex: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setFee(
    _feePercent: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  tokenAddress(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateFeeReceiver(
    _newReceiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateconversionThreshold(
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  vestedAmount(
    _recipient: string,
    _scheduleIndex: BigNumberish,
    _referenceTs: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _scheduleIndex: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawAdmin(
    _amountRequested: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawOtherToken(
    _otherTokenAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<string>;

    USDC_ADDRESS(overrides?: CallOverrides): Promise<string>;

    allVestingRecipients(overrides?: CallOverrides): Promise<string[]>;

    amountAvailableToWithdrawByAdmin(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    consult(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber] & {
        arithmeticMeanTick: number;
        harmonicMeanLiquidity: BigNumber;
      }
    >;

    conversionThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    createClaim(
      claimInput: ClaimInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    createClaimsBatch(
      claimInputs: ClaimInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    feePercent(overrides?: CallOverrides): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    finalClaimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalVestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VTVLVesting.ClaimStructOutput>;

    getNumberOfVestings(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(
      amount: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numTokensReservedForVesting(overrides?: CallOverrides): Promise<BigNumber>;

    numVestingRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revokeClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFee(_feePercent: BigNumberish, overrides?: CallOverrides): Promise<void>;

    tokenAddress(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFeeReceiver(
      _newReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateconversionThreshold(
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAdmin(
      _amountRequested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawOtherToken(
      _otherTokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminWithdrawn(address,uint256)"(
      _recipient?: string | null,
      _amountRequested?: null
    ): AdminWithdrawnEventFilter;
    AdminWithdrawn(
      _recipient?: string | null,
      _amountRequested?: null
    ): AdminWithdrawnEventFilter;

    "ClaimCreated(address,tuple,uint256)"(
      _recipient?: string | null,
      _claim?: null,
      _scheduleIndex?: null
    ): ClaimCreatedEventFilter;
    ClaimCreated(
      _recipient?: string | null,
      _claim?: null,
      _scheduleIndex?: null
    ): ClaimCreatedEventFilter;

    "ClaimRevoked(address,uint256,uint256,tuple,uint256)"(
      _recipient?: string | null,
      _numTokensWithheld?: null,
      revocationTimestamp?: null,
      _claim?: null,
      _scheduleIndex?: null
    ): ClaimRevokedEventFilter;
    ClaimRevoked(
      _recipient?: string | null,
      _numTokensWithheld?: null,
      revocationTimestamp?: null,
      _claim?: null,
      _scheduleIndex?: null
    ): ClaimRevokedEventFilter;

    "Claimed(address,uint256,uint256)"(
      _recipient?: string | null,
      _withdrawalAmount?: null,
      _scheduleIndex?: null
    ): ClaimedEventFilter;
    Claimed(
      _recipient?: string | null,
      _withdrawalAmount?: null,
      _scheduleIndex?: null
    ): ClaimedEventFilter;

    "FeeReceived(address,uint256,uint256,address)"(
      _recipient?: string | null,
      _feeAmount?: null,
      _scheduleIndex?: null,
      _tokenAddress?: null
    ): FeeReceivedEventFilter;
    FeeReceived(
      _recipient?: string | null,
      _feeAmount?: null,
      _scheduleIndex?: null,
      _tokenAddress?: null
    ): FeeReceivedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    USDC_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    allVestingRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    amountAvailableToWithdrawByAdmin(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    consult(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    conversionThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    createClaim(
      claimInput: ClaimInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createClaimsBatch(
      claimInputs: ClaimInputStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    feePercent(overrides?: CallOverrides): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    finalClaimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalVestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfVestings(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(
      amount: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numTokensReservedForVesting(overrides?: CallOverrides): Promise<BigNumber>;

    numVestingRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setFee(
      _feePercent: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateFeeReceiver(
      _newReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateconversionThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    vestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _scheduleIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawAdmin(
      _amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawOtherToken(
      _otherTokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    UNISWAP_V3_FACTORY_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    USDC_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allVestingRecipients(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountAvailableToWithdrawByAdmin(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    consult(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    conversionThreshold(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createClaim(
      claimInput: ClaimInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createClaimsBatch(
      claimInputs: ClaimInputStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    feePercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalClaimableAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalVestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfVestings(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenPrice(
      amount: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numTokensReservedForVesting(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numVestingRecipients(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeClaim(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setFee(
      _feePercent: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateFeeReceiver(
      _newReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateconversionThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    vestedAmount(
      _recipient: string,
      _scheduleIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _scheduleIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawAdmin(
      _amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawOtherToken(
      _otherTokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
