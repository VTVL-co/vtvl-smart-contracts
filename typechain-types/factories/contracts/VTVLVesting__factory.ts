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
  "0x60c060405260006002553480156200001657600080fd5b50604051620026fe380380620026fe83398101604081905262000039916200013a565b6200004433620000d1565b600180556001600160a01b038316620000955760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015260640160405180910390fd5b6001600160a01b038316608052620000ad81620000d1565b503360a0819052600680546001600160a01b03191690911790556005555062000182565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200013757600080fd5b50565b6000806000606084860312156200015057600080fd5b83516200015d8162000121565b602085015160408601519194509250620001778162000121565b809150509250925092565b60805160a051612510620001ee600039600081816104ab01528181610a4901528181610f1a0152610fce0152600081816102cb015281816107350152818161076d015281816107a10152818161108c0152818161110c0152818161124a01526118a701526125106000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806379b8d938116100c3578063b3f006741161007c578063b3f00674146102ed578063c69bebe414610300578063d77836ce14610313578063e50373f914610326578063e865fbc714610339578063f2fde38b1461034157600080fd5b806379b8d9381461025f5780637e39c799146102725780637fd6f15c146102855780638da5cb5b1461028e5780639ca33f3e146102b35780639d76ea58146102c657600080fd5b80634f8acca3116101155780634f8acca3146101e057806361bac7921461020957806369fe0e2d1461021c578063715018a61461022f5780637197dec31461023757806373e78ca31461024c57600080fd5b80630f79ab391461015d578063137c68fa1461018657806316226e901461019d578063241c5b1f146101b25780632e1a7d4d146101ba5780634433444b146101cd575b600080fd5b61017061016b366004611efa565b610354565b60405161017d9190611fbf565b60405180910390f35b61018f60025481565b60405190815260200161017d565b6101b06101ab366004611fe3565b61048c565b005b60045461018f565b6101b06101c8366004612093565b61051c565b61018f6101db366004611efa565b61081d565b61018f6101ee3660046120ac565b6001600160a01b031660009081526003602052604090205490565b61018f6102173660046120c9565b610947565b6101b061022a366004612093565b610a3e565b6101b0610aa9565b61023f610abd565b60405161017d9190612107565b61018f61025a366004611efa565b610b1f565b61018f61026d366004611efa565b610bfd565b6101b0610280366004611efa565b610ce5565b61018f60055481565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161017d565b6101b06102c1366004612154565b610efb565b61029b7f000000000000000000000000000000000000000000000000000000000000000081565b60065461029b906001600160a01b031681565b6101b061030e3660046120ac565b610fc3565b6101b0610321366004612093565b61104b565b6101b06103343660046120ac565b6110fa565b61018f611226565b6101b061034f3660046120ac565b6112c4565b61035c611e89565b6001600160a01b03831660009081526003602052604090205482106103bc5760405162461bcd60e51b81526020600482015260116024820152701393d7d4d0d2115115531157d1561254d5607a1b60448201526064015b60405180910390fd5b6001600160a01b03831660009081526003602052604090208054839081106103e6576103e66121c9565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b8204811695850195909552600160501b8104851692840192909252600160781b918290048416606084015260018101546080840152600281015460a0840152600301546001600160701b03811660c084015260ff600160701b820416151560e08401520490911661010082015290505b92915050565b6000546001600160a01b03163314806104cd5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b6105105760405162461bcd60e51b81526020600482015260146024820152734e6f74204f776e6572206f7220466163746f727960601b60448201526064016103b3565b6105198161133a565b50565b336000818152600360205260409020548290811061054c5760405162461bcd60e51b81526004016103b3906121df565b6001600160a01b0382166000908152600360205260408120805483908110610576576105766121c9565b60009182526020909120600490910201805490915064ffffffffff166105ae5760405162461bcd60e51b81526004016103b3906121df565b6003810154600160701b900460ff166105d95760405162461bcd60e51b81526004016103b3906121df565b6105e16119f0565b336000908152600360205260408120805486908110610602576106026121c9565b90600052602060002090600402019050600061062561061e3390565b8742610947565b905081600201548111801561063a5750600081115b61067c5760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016103b3565b600082600201548261068e919061221e565b9050600081116106d65760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016103b3565b808360020160008282546106ea9190612235565b925050819055508060026000828254610703919061221e565b90915550506005541561079c57600061071b82611a49565b905061075c3361072b838561221e565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611a66565b600654610796906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911683611a66565b506107d0565b6107d07f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163383611a66565b604080518281526020810189905233917f987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a910160405180910390a250505061081760018055565b50505050565b6001600160a01b038216600090815260036020526040812080548291908490811061084a5761084a6121c9565b90600052602060002090600402019050600081600301600e9054906101000a900460ff1661088a576003820154600160781b900464ffffffffff1661089b565b8154600160281b900464ffffffffff165b60028301546040805161012081018252855464ffffffffff8082168352600160281b820481166020840152600160501b8204811693830193909352600160781b90819004831660608301526001870154608083015260a0820184905260038701546001600160701b03811660c084015260ff600160701b820416151560e084015204909116610100820152919250906109349083611abd565b61093e919061221e565b95945050505050565b6001600160a01b0383166000908152600360205260408120805482919085908110610974576109746121c9565b6000918252602080832060408051610120810182526004909402909101805464ffffffffff8082168652600160281b8204811694860194909452600160501b8104841692850192909252600160781b918290048316606085015260018101546080850152600281015460a0850152600301546001600160701b03811660c085015260ff600160701b820416151560e08501819052919004909116610100830152909250610a2657816101000151610a28565b835b9050610a348282611abd565b9695505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610aa45760405162461bcd60e51b815260206004820152600b60248201526a4e6f7420466163746f727960a81b60448201526064016103b3565b600555565b610ab1611be7565b610abb6000611c41565b565b60606004805480602002602001604051908101604052809291908181526020018280548015610b1557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610af7575b5050505050905090565b6001600160a01b0382166000908152600360205260408120805482919084908110610b4c57610b4c6121c9565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b82048116958501869052600160501b8204811693850193909352600160781b908190048316606085015260018201546080850152600282015460a08501526003909101546001600160701b03811660c085015260ff600160701b820416151560e085015204166101008201529150610bf5908290611abd565b949350505050565b6001600160a01b0382166000908152600360205260408120805482919084908110610c2a57610c2a6121c9565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b8204811695850195909552600160501b8104851692840192909252600160781b918290048416606084015260018101546080840152600281015460a084018190526003909101546001600160701b03811660c085015260ff600160701b820416151560e0850152919091049092166101008201529150610cdb858542610947565b610bf5919061221e565b610ced611be7565b6001600160a01b038216600090815260036020526040902054829082908110610d285760405162461bcd60e51b81526004016103b3906121df565b6001600160a01b0382166000908152600360205260408120805483908110610d5257610d526121c9565b60009182526020909120600490910201805490915064ffffffffff16610d8a5760405162461bcd60e51b81526004016103b3906121df565b6003810154600160701b900460ff16610db55760405162461bcd60e51b81526004016103b3906121df565b6001600160a01b0385166000908152600360205260408120805486908110610ddf57610ddf6121c9565b906000526020600020906004020190506000610dfb8787610b1f565b905080826002015410610e455760405162461bcd60e51b81526020600482015260126024820152711393d7d553959154d5115117d05353d5539560721b60448201526064016103b3565b60038201805464ffffffffff42908116600160781b0265ffffffffffff60701b1990921691909117909155600090610e809089908990610947565b90506000610e8e828461221e565b90508060026000828254610ea2919061221e565b92505081905550886001600160a01b03167fed9a46e9df4b25f99c63227fd4e73032724c681b95d0dd076fc004ff6cdf47a78242878c604051610ee8949392919061224d565b60405180910390a2505050505050505050565b6000546001600160a01b0316331480610f3c5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b610f7f5760405162461bcd60e51b81526020600482015260146024820152734e6f74204f776e6572206f7220466163746f727960601b60448201526064016103b3565b8060005b8181101561081757610fbb848483818110610fa057610fa06121c9565b905060e00201803603810190610fb69190611fe3565b61133a565b600101610f83565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110295760405162461bcd60e51b815260206004820152600b60248201526a4e6f7420466163746f727960a81b60448201526064016103b3565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b611053611be7565b61105b6119f0565b6000611065611226565b9050818110156110875760405162461bcd60e51b81526004016103b3906122f5565b6110bb7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163384611a66565b60405182815233907fca1cf43de312865665f595e88f569f9d5246690c07df26e86aba01147e6d13149060200160405180910390a25061051960018055565b611102611be7565b61110a6119f0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b03160361117b5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22faa27a5a2a760991b60448201526064016103b3565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156111c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e69190612323565b9050600081116112085760405162461bcd60e51b81526004016103b3906122f5565b61121c6001600160a01b0383163383611a66565b5061051960018055565b6002546040516370a0823160e01b8152306004820152600091906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611291573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b59190612323565b6112bf919061221e565b905090565b6112cc611be7565b6001600160a01b0381166113315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103b3565b61051981611c41565b60c08101516001600160a01b03166113865760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b60448201526064016103b3565b60008160a00151826080015161139c9190612235565b116113e15760405162461bcd60e51b81526020600482015260156024820152741253959053125117d59154d5115117d05353d55395605a1b60448201526064016103b3565b805164ffffffffff166114365760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f53544152545f54494d455354414d5000000000000000000060448201526064016103b3565b806020015164ffffffffff16816000015164ffffffffff16106114935760405162461bcd60e51b81526020600482015260156024820152740494e56414c49445f454e445f54494d455354414d5605c1b60448201526064016103b3565b6000816060015164ffffffffff16116114ee5760405162461bcd60e51b815260206004820152601860248201527f494e56414c49445f52454c454153455f494e54455256414c000000000000000060448201526064016103b3565b606081015181516020830151611504919061233c565b61150e9190612378565b64ffffffffff16156115625760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f494e54455256414c5f4c454e47544800000000000000000060448201526064016103b3565b6000816040015164ffffffffff16118015611581575060008160a00151115b80156115a35750806000015164ffffffffff16816040015164ffffffffff1611155b806115c45750604081015164ffffffffff161580156115c4575060a0810151155b6116005760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa1a624a32360991b60448201526064016103b3565b611608611e89565b8160000151816000019064ffffffffff16908164ffffffffff16815250508160200151816020019064ffffffffff16908164ffffffffff1681525050600081610100019064ffffffffff16908164ffffffffff16815250508160400151816040019064ffffffffff16908164ffffffffff16815250508160600151816060019064ffffffffff16908164ffffffffff168152505081608001518160800181815250508160a001518160c001906001600160701b031690816001600160701b03168152505060008160a001818152505060018160e0019015159081151581525050600360008360c001516001600160a01b03166001600160a01b0316815260200190815260200160002081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548164ffffffffff021916908364ffffffffff16021790555060208201518160000160056101000a81548164ffffffffff021916908364ffffffffff160217905550604082015181600001600a6101000a81548164ffffffffff021916908364ffffffffff160217905550606082015181600001600f6101000a81548164ffffffffff021916908364ffffffffff1602179055506080820151816001015560a0820151816002015560c08201518160030160006101000a8154816001600160701b0302191690836001600160701b0316021790555060e082015181600301600e6101000a81548160ff02191690831515021790555061010082015181600301600f6101000a81548164ffffffffff021916908364ffffffffff1602179055505050600082608001518360a001516118829190612235565b9050806002546118929190612235565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156118f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191a9190612323565b10156119385760405162461bcd60e51b81526004016103b3906122f5565b806002600082825461194a9190612235565b909155505060c0830180516004805460018101825560009182527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b03938416179055915116808252600360205260409182902054915190917f4abbdf6199174a0d2f115731aab0bb048ec6357c2b36f0fec6687f92b4c675e0916119e391869161239c565b60405180910390a2505050565b600260015403611a425760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103b3565b6002600155565b600061271060055483611a5c91906123b9565b61048691906123d8565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611ab8908490611c91565b505050565b60008260e00151158015611adb575061010083015164ffffffffff16155b15611ae857506000610486565b6000836020015164ffffffffff168364ffffffffff161115611b0c57836020015192505b836040015164ffffffffff168364ffffffffff1610611b405760c0840151611b3d906001600160701b031682612235565b90505b836000015164ffffffffff168364ffffffffff161115611be0578351600090611b69908561233c565b6060860151909150600090611b7e81846123ec565b611b889190612410565b9050600086600001518760200151611ba0919061233c565b905060008164ffffffffff168364ffffffffff168960800151611bc391906123b9565b611bcd91906123d8565b9050611bd98186612235565b9450505050505b9392505050565b6000546001600160a01b03163314610abb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103b3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611ce6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d669092919063ffffffff16565b9050805160001480611d07575080806020019051810190611d07919061243d565b611ab85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103b3565b6060610bf5848460008585600080866001600160a01b03168587604051611d8d919061248b565b60006040518083038185875af1925050503d8060008114611dca576040519150601f19603f3d011682016040523d82523d6000602084013e611dcf565b606091505b5091509150611de087838387611deb565b979650505050505050565b60608315611e5a578251600003611e53576001600160a01b0385163b611e535760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b3565b5081610bf5565b610bf58383815115611e6f5781518083602001fd5b8060405162461bcd60e51b81526004016103b391906124a7565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b6001600160a01b038116811461051957600080fd5b8035611ef581611ed5565b919050565b60008060408385031215611f0d57600080fd5b8235611f1881611ed5565b946020939093013593505050565b64ffffffffff808251168352806020830151166020840152806040830151166040840152506060810151611f63606084018264ffffffffff169052565b506080810151608083015260a081015160a083015260c0810151611f9260c08401826001600160701b03169052565b5060e0810151611fa660e084018215159052565b506101008181015164ffffffffff811684830152610817565b61012081016104868284611f26565b803564ffffffffff81168114611ef557600080fd5b600060e08284031215611ff557600080fd5b60405160e0810181811067ffffffffffffffff8211171561202657634e487b7160e01b600052604160045260246000fd5b60405261203283611fce565b815261204060208401611fce565b602082015261205160408401611fce565b604082015261206260608401611fce565b60608201526080830135608082015260a083013560a082015261208760c08401611eea565b60c08201529392505050565b6000602082840312156120a557600080fd5b5035919050565b6000602082840312156120be57600080fd5b8135611be081611ed5565b6000806000606084860312156120de57600080fd5b83356120e981611ed5565b9250602084013591506120fe60408501611fce565b90509250925092565b6020808252825182820181905260009190848201906040850190845b818110156121485783516001600160a01b031683529284019291840191600101612123565b50909695505050505050565b6000806020838503121561216757600080fd5b823567ffffffffffffffff8082111561217f57600080fd5b818501915085601f83011261219357600080fd5b8135818111156121a257600080fd5b86602060e0830285010111156121b757600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052603260045260246000fd5b6020808252600f908201526e4e4f5f4143544956455f434c41494d60881b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008282101561223057612230612208565b500390565b6000821982111561224857612248612208565b500190565b84815264ffffffffff848116602083015283548082166040840152602881901c82166060840152605081901c8216608084015260781c811660a0830152600184015460c0830152600284015460e083015260038401546001600160701b038116610100840152607081901c60ff161515610120840152610180830191906122e36101408501838360781c1664ffffffffff169052565b50508261016083015295945050505050565b602080825260149082015273494e53554646494349454e545f42414c414e434560601b604082015260600190565b60006020828403121561233557600080fd5b5051919050565b600064ffffffffff8381169083168181101561235a5761235a612208565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600064ffffffffff8084168061239057612390612362565b92169190910692915050565b61014081016123ab8285611f26565b826101208301529392505050565b60008160001904831182151516156123d3576123d3612208565b500290565b6000826123e7576123e7612362565b500490565b600064ffffffffff8084168061240457612404612362565b92169190910492915050565b600064ffffffffff8083168185168183048111821515161561243457612434612208565b02949350505050565b60006020828403121561244f57600080fd5b81518015158114611be057600080fd5b60005b8381101561247a578181015183820152602001612462565b838111156108175750506000910152565b6000825161249d81846020870161245f565b9190910192915050565b60208152600082518060208401526124c681604085016020870161245f565b601f01601f1916919091016040019291505056fea264697066735822122068f4d2e15979e26faf20ad45e51751207b77e790277cbd3805f0975544f9d1fc64736f6c634300080e0033";

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
