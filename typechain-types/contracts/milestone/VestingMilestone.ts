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
} from "../../common";

export type InputMilestoneStruct = {
  percent: BigNumberish;
  period: BigNumberish;
  releaseIntervalSecs: BigNumberish;
};

export type InputMilestoneStructOutput = [number, BigNumber, BigNumber] & {
  percent: number;
  period: BigNumber;
  releaseIntervalSecs: BigNumber;
};

export type MilestoneStruct = {
  startTime: BigNumberish;
  withdrawnAmount: BigNumberish;
  period: BigNumberish;
  releaseIntervalSecs: BigNumberish;
  isWithdrawn: boolean;
  allocation: BigNumberish;
  percent: BigNumberish;
};

export type MilestoneStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean,
  BigNumber,
  number
] & {
  startTime: BigNumber;
  withdrawnAmount: BigNumber;
  period: BigNumber;
  releaseIntervalSecs: BigNumber;
  isWithdrawn: boolean;
  allocation: BigNumber;
  percent: number;
};

export interface VestingMilestoneInterface extends utils.Interface {
  functions: {
    "allocation()": FunctionFragment;
    "claimableAmount(address,uint256)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "finalVestedAmount(address,uint256)": FunctionFragment;
    "getAllRecipients()": FunctionFragment;
    "getMilestone(address,uint256)": FunctionFragment;
    "isCompleted(address,uint256)": FunctionFragment;
    "numTokensReservedForVesting()": FunctionFragment;
    "owner()": FunctionFragment;
    "recipients(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setComplete(address,uint256)": FunctionFragment;
    "tokenAddress()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vestedAmount(address,uint256,uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawAdmin()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allocation"
      | "claimableAmount"
      | "deposit"
      | "finalVestedAmount"
      | "getAllRecipients"
      | "getMilestone"
      | "isCompleted"
      | "numTokensReservedForVesting"
      | "owner"
      | "recipients"
      | "renounceOwnership"
      | "setComplete"
      | "tokenAddress"
      | "transferOwnership"
      | "vestedAmount"
      | "withdraw"
      | "withdrawAdmin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allocation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalVestedAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMilestone",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isCompleted",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numTokensReservedForVesting",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recipients",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setComplete",
    values: [string, BigNumberish]
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
    functionFragment: "vestedAmount",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAdmin",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allocation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalVestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMilestone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numTokensReservedForVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipients", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setComplete",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
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

  events: {
    "AdminWithdrawn(address,uint256)": EventFragment;
    "Claimed(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
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

export interface ClaimedEventObject {
  _recipient: string;
  _withdrawalAmount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[string, BigNumber], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

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

export interface VestingMilestone extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VestingMilestoneInterface;

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
    allocation(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimableAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    finalVestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAllRecipients(overrides?: CallOverrides): Promise<[string[]]>;

    getMilestone(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[MilestoneStructOutput]>;

    isCompleted(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numTokensReservedForVesting(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setComplete(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    vestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _milestoneIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawAdmin(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  allocation(overrides?: CallOverrides): Promise<BigNumber>;

  claimableAmount(
    _recipient: string,
    _milestoneIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  finalVestedAmount(
    _recipient: string,
    _milestoneIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllRecipients(overrides?: CallOverrides): Promise<string[]>;

  getMilestone(
    _recipient: string,
    _milestoneIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<MilestoneStructOutput>;

  isCompleted(
    _recipient: string,
    _milestoneIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numTokensReservedForVesting(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  recipients(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setComplete(
    _recipient: string,
    _milestoneIndex: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  tokenAddress(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  vestedAmount(
    _recipient: string,
    _milestoneIndex: BigNumberish,
    _referenceTs: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _milestoneIndex: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawAdmin(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    allocation(overrides?: CallOverrides): Promise<BigNumber>;

    claimableAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    finalVestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllRecipients(overrides?: CallOverrides): Promise<string[]>;

    getMilestone(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<MilestoneStructOutput>;

    isCompleted(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numTokensReservedForVesting(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    recipients(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setComplete(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenAddress(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAdmin(overrides?: CallOverrides): Promise<void>;
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

    "Claimed(address,uint256)"(
      _recipient?: string | null,
      _withdrawalAmount?: null
    ): ClaimedEventFilter;
    Claimed(
      _recipient?: string | null,
      _withdrawalAmount?: null
    ): ClaimedEventFilter;

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
    allocation(overrides?: CallOverrides): Promise<BigNumber>;

    claimableAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    finalVestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    getMilestone(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCompleted(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numTokensReservedForVesting(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setComplete(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    vestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _milestoneIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawAdmin(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimableAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    finalVestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllRecipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMilestone(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCompleted(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numTokensReservedForVesting(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipients(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setComplete(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    vestedAmount(
      _recipient: string,
      _milestoneIndex: BigNumberish,
      _referenceTs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _milestoneIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawAdmin(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
