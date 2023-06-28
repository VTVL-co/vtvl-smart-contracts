/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VTVLVesting,
  VTVLVestingInterface,
} from "../../contracts/VTVLVesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountRequested",
        type: "uint256",
      },
    ],
    name: "AdminWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint40",
            name: "startTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cliffReleaseTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "releaseIntervalSecs",
            type: "uint40",
          },
          {
            internalType: "uint256",
            name: "linearVestAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountWithdrawn",
            type: "uint256",
          },
          {
            internalType: "uint112",
            name: "cliffAmount",
            type: "uint112",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint40",
            name: "deactivationTimestamp",
            type: "uint40",
          },
        ],
        indexed: false,
        internalType: "struct VTVLVesting.Claim",
        name: "_claim",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "ClaimCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numTokensWithheld",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "revocationTimestamp",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint40",
            name: "startTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cliffReleaseTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "releaseIntervalSecs",
            type: "uint40",
          },
          {
            internalType: "uint256",
            name: "linearVestAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountWithdrawn",
            type: "uint256",
          },
          {
            internalType: "uint112",
            name: "cliffAmount",
            type: "uint112",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint40",
            name: "deactivationTimestamp",
            type: "uint40",
          },
        ],
        indexed: false,
        internalType: "struct VTVLVesting.Claim",
        name: "_claim",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "ClaimRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_withdrawalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "FeeReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "allVestingRecipients",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "amountAvailableToWithdrawByAdmin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "claimableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint40",
            name: "startTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cliffReleaseTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "releaseIntervalSecs",
            type: "uint40",
          },
          {
            internalType: "uint256",
            name: "linearVestAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cliffAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ClaimInput",
        name: "claimInput",
        type: "tuple",
      },
    ],
    name: "createClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint40",
            name: "startTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cliffReleaseTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "releaseIntervalSecs",
            type: "uint40",
          },
          {
            internalType: "uint256",
            name: "linearVestAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cliffAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ClaimInput[]",
        name: "claimInputs",
        type: "tuple[]",
      },
    ],
    name: "createClaimsBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "finalClaimableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "finalVestedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "getClaim",
    outputs: [
      {
        components: [
          {
            internalType: "uint40",
            name: "startTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cliffReleaseTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "releaseIntervalSecs",
            type: "uint40",
          },
          {
            internalType: "uint256",
            name: "linearVestAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountWithdrawn",
            type: "uint256",
          },
          {
            internalType: "uint112",
            name: "cliffAmount",
            type: "uint112",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint40",
            name: "deactivationTimestamp",
            type: "uint40",
          },
        ],
        internalType: "struct VTVLVesting.Claim",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "getNumberOfVestings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numTokensReservedForVesting",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numVestingRecipients",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "revokeClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newReceiver",
        type: "address",
      },
    ],
    name: "updateFeeReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "_referenceTs",
        type: "uint40",
      },
    ],
    name: "vestedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_scheduleIndex",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountRequested",
        type: "uint256",
      },
    ],
    name: "withdrawAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_otherTokenAddress",
        type: "address",
      },
    ],
    name: "withdrawOtherToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405260006002553480156200001657600080fd5b50604051620027c2380380620027c2833981016040819052620000399162000138565b6200004433620000cf565b600180556001600160a01b038316620000955760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015260640160405180910390fd5b620000a081620000cf565b503360a0819052600680546001600160a01b03191690911790556005556001600160a01b031660805262000180565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200013557600080fd5b50565b6000806000606084860312156200014e57600080fd5b83516200015b816200011f565b60208501516040860151919450925062000175816200011f565b809150509250925092565b60805160a0516125d6620001ec600039600081816104ab0152818161098c01528181610e5d0152610f110152600081816102cb01528181610fd901528181611051015281816111fd0152818161185a01528181611a2901528181611a610152611aa501526125d66000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806379b8d938116100c3578063b3f006741161007c578063b3f00674146102ed578063c69bebe414610300578063d77836ce14610313578063e50373f914610326578063e865fbc714610339578063f2fde38b1461034157600080fd5b806379b8d9381461025f5780637e39c799146102725780637fd6f15c146102855780638da5cb5b1461028e5780639ca33f3e146102b35780639d76ea58146102c657600080fd5b80634f8acca3116101155780634f8acca3146101e057806361bac7921461020957806369fe0e2d1461021c578063715018a61461022f5780637197dec31461023757806373e78ca31461024c57600080fd5b80630f79ab391461015d578063137c68fa1461018657806316226e901461019d578063241c5b1f146101b25780632e1a7d4d146101ba5780634433444b146101cd575b600080fd5b61017061016b366004611fc0565b610354565b60405161017d9190612085565b60405180910390f35b61018f60025481565b60405190815260200161017d565b6101b06101ab3660046120a9565b61048c565b005b60045461018f565b6101b06101c8366004612159565b61051c565b61018f6101db366004611fc0565b610760565b61018f6101ee366004612172565b6001600160a01b031660009081526003602052604090205490565b61018f61021736600461218f565b61088a565b6101b061022a366004612159565b610981565b6101b06109ec565b61023f610a00565b60405161017d91906121cd565b61018f61025a366004611fc0565b610a62565b61018f61026d366004611fc0565b610b40565b6101b0610280366004611fc0565b610c28565b61018f60055481565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161017d565b6101b06102c136600461221a565b610e3e565b61029b7f000000000000000000000000000000000000000000000000000000000000000081565b60065461029b906001600160a01b031681565b6101b061030e366004612172565b610f06565b6101b0610321366004612159565b610f8e565b6101b0610334366004612172565b61103f565b61018f6111d9565b6101b061034f366004612172565b611277565b61035c611f4f565b6001600160a01b03831660009081526003602052604090205482106103bc5760405162461bcd60e51b81526020600482015260116024820152701393d7d4d0d2115115531157d1561254d5607a1b60448201526064015b60405180910390fd5b6001600160a01b03831660009081526003602052604090208054839081106103e6576103e661228f565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b8204811695850195909552600160501b8104851692840192909252600160781b918290048416606084015260018101546080840152600281015460a0840152600301546001600160701b03811660c084015260ff600160701b820416151560e08401520490911661010082015290505b92915050565b6000546001600160a01b03163314806104cd5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b6105105760405162461bcd60e51b81526020600482015260146024820152734e6f74204f776e6572206f7220466163746f727960601b60448201526064016103b3565b610519816112ed565b50565b336000818152600360205260409020548290811061054c5760405162461bcd60e51b81526004016103b3906122a5565b6001600160a01b03821660009081526003602052604081208054839081106105765761057661228f565b60009182526020909120600490910201805490915064ffffffffff166105ae5760405162461bcd60e51b81526004016103b3906122a5565b6003810154600160701b900460ff166105d95760405162461bcd60e51b81526004016103b3906122a5565b6105e16119a3565b3360009081526003602052604081208054869081106106025761060261228f565b90600052602060002090600402019050600061062561061e3390565b874261088a565b905081600201548111801561063a5750600081115b61067c5760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016103b3565b600082600201548261068e91906122e4565b9050600081116106d65760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016103b3565b808360020160008282546106ea91906122fb565b92505081905550806002600082825461070391906122e4565b90915550610713905081886119fc565b604080518281526020810189905233917f987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a910160405180910390a250505061075a60018055565b50505050565b6001600160a01b038216600090815260036020526040812080548291908490811061078d5761078d61228f565b90600052602060002090600402019050600081600301600e9054906101000a900460ff166107cd576003820154600160781b900464ffffffffff166107de565b8154600160281b900464ffffffffff165b60028301546040805161012081018252855464ffffffffff8082168352600160281b820481166020840152600160501b8204811693830193909352600160781b90819004831660608301526001870154608083015260a0820184905260038701546001600160701b03811660c084015260ff600160701b820416151560e084015204909116610100820152919250906108779083611b0f565b61088191906122e4565b95945050505050565b6001600160a01b03831660009081526003602052604081208054829190859081106108b7576108b761228f565b6000918252602080832060408051610120810182526004909402909101805464ffffffffff8082168652600160281b8204811694860194909452600160501b8104841692850192909252600160781b918290048316606085015260018101546080850152600281015460a0850152600301546001600160701b03811660c085015260ff600160701b820416151560e085018190529190049091166101008301529092506109695781610100015161096b565b835b90506109778282611b0f565b9695505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109e75760405162461bcd60e51b815260206004820152600b60248201526a4e6f7420466163746f727960a81b60448201526064016103b3565b600555565b6109f4611c39565b6109fe6000611c93565b565b60606004805480602002602001604051908101604052809291908181526020018280548015610a5857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610a3a575b5050505050905090565b6001600160a01b0382166000908152600360205260408120805482919084908110610a8f57610a8f61228f565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b82048116958501869052600160501b8204811693850193909352600160781b908190048316606085015260018201546080850152600282015460a08501526003909101546001600160701b03811660c085015260ff600160701b820416151560e085015204166101008201529150610b38908290611b0f565b949350505050565b6001600160a01b0382166000908152600360205260408120805482919084908110610b6d57610b6d61228f565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b8204811695850195909552600160501b8104851692840192909252600160781b918290048416606084015260018101546080840152600281015460a084018190526003909101546001600160701b03811660c085015260ff600160701b820416151560e0850152919091049092166101008201529150610c1e85854261088a565b610b3891906122e4565b610c30611c39565b6001600160a01b038216600090815260036020526040902054829082908110610c6b5760405162461bcd60e51b81526004016103b3906122a5565b6001600160a01b0382166000908152600360205260408120805483908110610c9557610c9561228f565b60009182526020909120600490910201805490915064ffffffffff16610ccd5760405162461bcd60e51b81526004016103b3906122a5565b6003810154600160701b900460ff16610cf85760405162461bcd60e51b81526004016103b3906122a5565b6001600160a01b0385166000908152600360205260408120805486908110610d2257610d2261228f565b906000526020600020906004020190506000610d3e8787610a62565b905080826002015410610d885760405162461bcd60e51b81526020600482015260126024820152711393d7d553959154d5115117d05353d5539560721b60448201526064016103b3565b60038201805464ffffffffff42908116600160781b0265ffffffffffff60701b1990921691909117909155600090610dc3908990899061088a565b90506000610dd182846122e4565b90508060026000828254610de591906122e4565b92505081905550886001600160a01b03167fed9a46e9df4b25f99c63227fd4e73032724c681b95d0dd076fc004ff6cdf47a78242878c604051610e2b9493929190612313565b60405180910390a2505050505050505050565b6000546001600160a01b0316331480610e7f5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b610ec25760405162461bcd60e51b81526020600482015260146024820152734e6f74204f776e6572206f7220466163746f727960601b60448201526064016103b3565b8060005b8181101561075a57610efe848483818110610ee357610ee361228f565b905060e00201803603810190610ef991906120a9565b6112ed565b600101610ec6565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f6c5760405162461bcd60e51b815260206004820152600b60248201526a4e6f7420466163746f727960a81b60448201526064016103b3565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b610f96611c39565b610f9e6119a3565b6000610fa86111d9565b905081811015610fca5760405162461bcd60e51b81526004016103b3906123bb565b611000335b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169084611ce3565b60405182815233907fca1cf43de312865665f595e88f569f9d5246690c07df26e86aba01147e6d13149060200160405180910390a25061051960018055565b611047611c39565b61104f6119a3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036110c05760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22faa27a5a2a760991b60448201526064016103b3565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015611107573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112b91906123e9565b90506000811161114d5760405162461bcd60e51b81526004016103b3906123bb565b6001600160a01b03821663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af11580156111aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ce9190612402565b505061051960018055565b6002546040516370a0823160e01b8152306004820152600091906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611244573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126891906123e9565b61127291906122e4565b905090565b61127f611c39565b6001600160a01b0381166112e45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103b3565b61051981611c93565b60c08101516001600160a01b03166113395760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b60448201526064016103b3565b60008160a00151826080015161134f91906122fb565b116113945760405162461bcd60e51b81526020600482015260156024820152741253959053125117d59154d5115117d05353d55395605a1b60448201526064016103b3565b805164ffffffffff166113e95760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f53544152545f54494d455354414d5000000000000000000060448201526064016103b3565b806020015164ffffffffff16816000015164ffffffffff16106114465760405162461bcd60e51b81526020600482015260156024820152740494e56414c49445f454e445f54494d455354414d5605c1b60448201526064016103b3565b6000816060015164ffffffffff16116114a15760405162461bcd60e51b815260206004820152601860248201527f494e56414c49445f52454c454153455f494e54455256414c000000000000000060448201526064016103b3565b6060810151815160208301516114b79190612424565b6114c19190612460565b64ffffffffff16156115155760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f494e54455256414c5f4c454e47544800000000000000000060448201526064016103b3565b6000816040015164ffffffffff16118015611534575060008160a00151115b80156115565750806000015164ffffffffff16816040015164ffffffffff1611155b806115775750604081015164ffffffffff16158015611577575060a0810151155b6115b35760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa1a624a32360991b60448201526064016103b3565b6115bb611f4f565b8160000151816000019064ffffffffff16908164ffffffffff16815250508160200151816020019064ffffffffff16908164ffffffffff1681525050600081610100019064ffffffffff16908164ffffffffff16815250508160400151816040019064ffffffffff16908164ffffffffff16815250508160600151816060019064ffffffffff16908164ffffffffff168152505081608001518160800181815250508160a001518160c001906001600160701b031690816001600160701b03168152505060008160a001818152505060018160e0019015159081151581525050600360008360c001516001600160a01b03166001600160a01b0316815260200190815260200160002081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548164ffffffffff021916908364ffffffffff16021790555060208201518160000160056101000a81548164ffffffffff021916908364ffffffffff160217905550604082015181600001600a6101000a81548164ffffffffff021916908364ffffffffff160217905550606082015181600001600f6101000a81548164ffffffffff021916908364ffffffffff1602179055506080820151816001015560a0820151816002015560c08201518160030160006101000a8154816001600160701b0302191690836001600160701b0316021790555060e082015181600301600e6101000a81548160ff02191690831515021790555061010082015181600301600f6101000a81548164ffffffffff021916908364ffffffffff1602179055505050600082608001518360a0015161183591906122fb565b90508060025461184591906122fb565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156118a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118cd91906123e9565b10156118eb5760405162461bcd60e51b81526004016103b3906123bb565b80600260008282546118fd91906122fb565b909155505060c0830180516004805460018101825560009182527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b03938416179055915116808252600360205260409182902054915190917f4abbdf6199174a0d2f115731aab0bb048ec6357c2b36f0fec6687f92b4c675e091611996918691612484565b60405180910390a2505050565b6002600154036119f55760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103b3565b6002600155565b60055415611b02576000611a0f83611d3a565b9050611a5033611a1f83866122e4565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611ce3565b600654611a8a906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911683611ce3565b60065460408051838152602081018590526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116928201929092529116907fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49060600160405180910390a2505050565b611b0b33610fcf565b5050565b60008260e00151158015611b2d575061010083015164ffffffffff16155b15611b3a57506000610486565b6000836020015164ffffffffff168364ffffffffff161115611b5e57836020015192505b836040015164ffffffffff168364ffffffffff1610611b925760c0840151611b8f906001600160701b0316826122fb565b90505b836000015164ffffffffff168364ffffffffff161115611c32578351600090611bbb9085612424565b6060860151909150600090611bd081846124a1565b611bda91906124c5565b9050600086600001518760200151611bf29190612424565b905060008164ffffffffff168364ffffffffff168960800151611c1591906124f2565b611c1f9190612511565b9050611c2b81866122fb565b9450505050505b9392505050565b6000546001600160a01b031633146109fe5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103b3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611d35908490611d57565b505050565b600061271060055483611d4d91906124f2565b6104869190612511565b6000611dac826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e2c9092919063ffffffff16565b9050805160001480611dcd575080806020019051810190611dcd9190612402565b611d355760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103b3565b6060610b38848460008585600080866001600160a01b03168587604051611e539190612551565b60006040518083038185875af1925050503d8060008114611e90576040519150601f19603f3d011682016040523d82523d6000602084013e611e95565b606091505b5091509150611ea687838387611eb1565b979650505050505050565b60608315611f20578251600003611f19576001600160a01b0385163b611f195760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b3565b5081610b38565b610b388383815115611f355781518083602001fd5b8060405162461bcd60e51b81526004016103b3919061256d565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b6001600160a01b038116811461051957600080fd5b8035611fbb81611f9b565b919050565b60008060408385031215611fd357600080fd5b8235611fde81611f9b565b946020939093013593505050565b64ffffffffff808251168352806020830151166020840152806040830151166040840152506060810151612029606084018264ffffffffff169052565b506080810151608083015260a081015160a083015260c081015161205860c08401826001600160701b03169052565b5060e081015161206c60e084018215159052565b506101008181015164ffffffffff81168483015261075a565b61012081016104868284611fec565b803564ffffffffff81168114611fbb57600080fd5b600060e082840312156120bb57600080fd5b60405160e0810181811067ffffffffffffffff821117156120ec57634e487b7160e01b600052604160045260246000fd5b6040526120f883612094565b815261210660208401612094565b602082015261211760408401612094565b604082015261212860608401612094565b60608201526080830135608082015260a083013560a082015261214d60c08401611fb0565b60c08201529392505050565b60006020828403121561216b57600080fd5b5035919050565b60006020828403121561218457600080fd5b8135611c3281611f9b565b6000806000606084860312156121a457600080fd5b83356121af81611f9b565b9250602084013591506121c460408501612094565b90509250925092565b6020808252825182820181905260009190848201906040850190845b8181101561220e5783516001600160a01b0316835292840192918401916001016121e9565b50909695505050505050565b6000806020838503121561222d57600080fd5b823567ffffffffffffffff8082111561224557600080fd5b818501915085601f83011261225957600080fd5b81358181111561226857600080fd5b86602060e08302850101111561227d57600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052603260045260246000fd5b6020808252600f908201526e4e4f5f4143544956455f434c41494d60881b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156122f6576122f66122ce565b500390565b6000821982111561230e5761230e6122ce565b500190565b84815264ffffffffff848116602083015283548082166040840152602881901c82166060840152605081901c8216608084015260781c811660a0830152600184015460c0830152600284015460e083015260038401546001600160701b038116610100840152607081901c60ff161515610120840152610180830191906123a96101408501838360781c1664ffffffffff169052565b50508261016083015295945050505050565b602080825260149082015273494e53554646494349454e545f42414c414e434560601b604082015260600190565b6000602082840312156123fb57600080fd5b5051919050565b60006020828403121561241457600080fd5b81518015158114611c3257600080fd5b600064ffffffffff83811690831681811015612442576124426122ce565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600064ffffffffff808416806124785761247861244a565b92169190910692915050565b61014081016124938285611fec565b826101208301529392505050565b600064ffffffffff808416806124b9576124b961244a565b92169190910492915050565b600064ffffffffff808316818516818304811182151516156124e9576124e96122ce565b02949350505050565b600081600019048311821515161561250c5761250c6122ce565b500290565b6000826125205761252061244a565b500490565b60005b83811015612540578181015183820152602001612528565b8381111561075a5750506000910152565b60008251612563818460208701612525565b9190910192915050565b602081526000825180602084015261258c816040850160208701612525565b601f01601f1916919091016040019291505056fea2646970667358221220f6f281ddf5221e58419bbd5962ee21973e52828d915e80742b0495ffe7c7556864736f6c634300080e0033";

type VTVLVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VTVLVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VTVLVesting__factory extends ContractFactory {
  constructor(...args: VTVLVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenAddress: string,
    _feePercent: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<VTVLVesting> {
    return super.deploy(
      _tokenAddress,
      _feePercent,
      _owner,
      overrides || {}
    ) as Promise<VTVLVesting>;
  }
  override getDeployTransaction(
    _tokenAddress: string,
    _feePercent: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenAddress,
      _feePercent,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): VTVLVesting {
    return super.attach(address) as VTVLVesting;
  }
  override connect(signer: Signer): VTVLVesting__factory {
    return super.connect(signer) as VTVLVesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VTVLVestingInterface {
    return new utils.Interface(_abi) as VTVLVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VTVLVesting {
    return new Contract(address, _abi, signerOrProvider) as VTVLVesting;
  }
}
