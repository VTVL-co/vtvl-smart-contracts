/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VTVLVesting, VTVLVestingInterface } from "../VTVLVesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenAddress",
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
    ],
    name: "Claimed",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "_startTimestamp",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "_endTimestamp",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "_cliffReleaseTimestamp",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "_releaseIntervalSecs",
        type: "uint40",
      },
      {
        internalType: "uint112",
        name: "_linearVestAmount",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_cliffAmount",
        type: "uint112",
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
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint40[]",
        name: "_startTimestamps",
        type: "uint40[]",
      },
      {
        internalType: "uint40[]",
        name: "_endTimestamps",
        type: "uint40[]",
      },
      {
        internalType: "uint40[]",
        name: "_cliffReleaseTimestamps",
        type: "uint40[]",
      },
      {
        internalType: "uint40[]",
        name: "_releaseIntervalsSecs",
        type: "uint40[]",
      },
      {
        internalType: "uint112[]",
        name: "_linearVestAmounts",
        type: "uint112[]",
      },
      {
        internalType: "uint112[]",
        name: "_cliffAmounts",
        type: "uint112[]",
      },
    ],
    name: "createClaimsBatch",
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
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
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
        name: "_recipient",
        type: "address",
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
    inputs: [],
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
];

const _bytecode =
  "0x60a060405260006002553480156200001657600080fd5b506040516200241e3803806200241e8339810160408190526200003991620000fc565b336000818152602081905260409020805460ff191660011790556001600160a01b03167fe529461c8529abc0e0fe7c5ee361f74fe22e0b7574df1fc0b7558a282091fb78600160405162000091911515815260200190565b60405180910390a2600180556001600160a01b038116620000ea5760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015260640160405180910390fd5b6001600160a01b03166080526200012e565b6000602082840312156200010f57600080fd5b81516001600160a01b03811681146200012757600080fd5b9392505050565b6080516122b16200016d6000396000818161030b015281816106d501528181610c8401528181610d2e01528181610e4c01526116b901526122b16000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063852e72e9116100a2578063d77836ce11610071578063d77836ce14610358578063e50373f91461036b578063e865fbc71461037e578063ed83a4b214610386578063f37d94b41461039957600080fd5b8063852e72e9146102e057806389885049146102f35780639d76ea5814610306578063ae9741aa1461034557600080fd5b80633ccfd60b116100e95780633ccfd60b146101905780634a0e701e146101985780634b0bddd2146101ab5780634cd3723a146101be5780637197dec3146102cb57600080fd5b80630216ee411461011b578063137c68fa14610130578063241c5b1f1461014c57806324d7806c14610154575b600080fd5b61012e610129366004611a28565b6103ac565b005b61013960025481565b6040519081526020015b60405180910390f35b600454610139565b610180610162366004611a28565b6001600160a01b031660009081526020819052604090205460ff1690565b6040519015158152602001610143565b61012e61056b565b6101396101a6366004611a5f565b610749565b61012e6101b9366004611aa2565b610819565b6102be6101cc366004611a28565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152506001600160a01b0316600090815260036020818152604092839020835161012081018552815464ffffffffff8082168352600160281b8204811694830194909452600160501b8104841695820195909552600160781b948590048316606082015260018201546080820152600282015460a08201529201546001600160701b03811660c084015260ff600160701b820416151560e08401529290920490911661010082015290565b6040516101439190611adb565b6102d36108ed565b6040516101439190611b6d565b61012e6102ee366004611bd1565b61094f565b610139610301366004611a28565b610996565b61032d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610143565b61012e610353366004611dfc565b610a5a565b61012e610366366004611f17565b610bf5565b61012e610379366004611a28565b610cf5565b610139610e28565b610139610394366004611a28565b610ec6565b6101396103a7366004611a28565b610f72565b3360009081526020819052604090205460ff166103e45760405162461bcd60e51b81526004016103db90611f30565b60405180910390fd5b6001600160a01b0381166000908152600360205260409020805482919064ffffffffff166104245760405162461bcd60e51b81526004016103db90611f5f565b6003810154600160701b900460ff1661044f5760405162461bcd60e51b81526004016103db90611f5f565b6001600160a01b03831660009081526003602052604081209061047185610ec6565b9050808260020154106104bb5760405162461bcd60e51b81526020600482015260126024820152711393d7d553959154d5115117d05353d5539560721b60448201526064016103db565b60038201805464ffffffffff42908116600160781b0265ffffffffffff60701b19909216919091179091556000906104f4908790610749565b905060006105028284611f9e565b905080600260008282546105169190611f9e565b92505081905550866001600160a01b03167fd93a85b4fc6775ce81af625c853805c5fff7a940704c5bffbe0e35ac6c67a28d82428760405161055a93929190612043565b60405180910390a250505050505050565b336000818152600360205260409020805464ffffffffff1661059f5760405162461bcd60e51b81526004016103db90611f5f565b6003810154600160701b900460ff166105ca5760405162461bcd60e51b81526004016103db90611f5f565b6105d2611052565b336000818152600360205260408120916105ec9042610749565b90508160020154811180156106015750600081115b6106435760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016103db565b60008260020154826106559190611f9e565b90506000811161069d5760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016103db565b808360020160008282546106b19190612065565b9250508190555080600260008282546106ca9190611f9e565b9091555061070490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633836110ab565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a250505061074560018055565b5050565b6001600160a01b0382166000908152600360208181526040808420815161012081018352815464ffffffffff8082168352600160281b8204811695830195909552600160501b8104851693820193909352600160781b928390048416606082015260018201546080820152600282015460a08201529301546001600160701b03811660c085015260ff600160701b820416151560e08501819052919004909116610100830152829061080057816101000151610802565b835b905061080e8282611102565b925050505b92915050565b3360009081526020819052604090205460ff166108485760405162461bcd60e51b81526004016103db90611f30565b6001600160a01b0382166108905760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b60448201526064016103db565b6001600160a01b03821660008181526020818152604091829020805460ff191685151590811790915591519182527fe529461c8529abc0e0fe7c5ee361f74fe22e0b7574df1fc0b7558a282091fb78910160405180910390a25050565b6060600480548060200260200160405190810160405280929190818152602001828054801561094557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610927575b5050505050905090565b3360009081526020819052604090205460ff1661097e5760405162461bcd60e51b81526004016103db90611f30565b61098d8787878787878761122a565b50505050505050565b6001600160a01b0381166000908152600360208181526040808420815161012081018352815464ffffffffff8082168352600160281b8204811695830195909552600160501b8104851693820193909352600160781b928390048416606082015260018201546080820152600282015460a0820181905291909401546001600160701b03811660c086015260ff600160701b820416151560e086015291909104909116610100830152610a498442610749565b610a539190611f9e565b9392505050565b3360009081526020819052604090205460ff16610a895760405162461bcd60e51b81526004016103db90611f30565b8651865181148015610a9b5750808651145b8015610aa75750808551145b8015610ab35750808451145b8015610abf5750808351145b8015610acb5750808251145b610b0f5760405162461bcd60e51b8152602060048201526015602482015274082a4a482b2be988a9c8ea890be9a92a69a82a8869605b1b60448201526064016103db565b60005b81811015610bea57610bd8898281518110610b2f57610b2f61207d565b6020026020010151898381518110610b4957610b4961207d565b6020026020010151898481518110610b6357610b6361207d565b6020026020010151898581518110610b7d57610b7d61207d565b6020026020010151898681518110610b9757610b9761207d565b6020026020010151898781518110610bb157610bb161207d565b6020026020010151898881518110610bcb57610bcb61207d565b602002602001015161122a565b80610be281612093565b915050610b12565b505050505050505050565b3360009081526020819052604090205460ff16610c245760405162461bcd60e51b81526004016103db90611f30565b610c2c611052565b6000610c36610e28565b905081811015610c7f5760405162461bcd60e51b8152602060048201526014602482015273494e53554646494349454e545f42414c414e434560601b60448201526064016103db565b610cb37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633846110ab565b60405182815233907fca1cf43de312865665f595e88f569f9d5246690c07df26e86aba01147e6d13149060200160405180910390a250610cf260018055565b50565b3360009081526020819052604090205460ff16610d245760405162461bcd60e51b81526004016103db90611f30565b610d2c611052565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b031603610d9d5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22faa27a5a2a760991b60448201526064016103db565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0891906120ac565b9050610e1e6001600160a01b03831633836110ab565b50610cf260018055565b6002546040516370a0823160e01b8152306004820152600091906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610e93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb791906120ac565b610ec19190611f9e565b905090565b6001600160a01b0381166000908152600360208181526040808420815161012081018352815464ffffffffff8082168352600160281b82048116958301869052600160501b8204811694830194909452600160781b908190048416606083015260018301546080830152600283015460a083015291909401546001600160701b03811660c086015260ff600160701b820416151560e08601520416610100830152610a53908290611102565b6001600160a01b0381166000908152600360208181526040808420815161012081018352815464ffffffffff8082168352600160281b8204811695830195909552600160501b8104851693820193909352600160781b928390048416606082015260018201546080820152600282015460a08201529301546001600160701b03811660c085015260ff600160701b820416151560e0850181905291900490911661010083015282906110295781610100015161102f565b81602001515b90508160a001516110408383611102565b61104a9190611f9e565b949350505050565b6002600154036110a45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103db565b6002600155565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526110fd90849061181b565b505050565b60008260e00151158015611120575061010083015164ffffffffff16155b1561112d57506000610813565b6000836020015164ffffffffff168364ffffffffff16111561115157836020015192505b836040015164ffffffffff168364ffffffffff16106111855760c0840151611182906001600160701b031682612065565b90505b836000015164ffffffffff168364ffffffffff161115610a535783516000906111ae90856120c5565b60608601519091506000906111c38184612101565b6111cd9190612125565b90506000866000015187602001516111e591906120c5565b905060008164ffffffffff168364ffffffffff1689608001516112089190612152565b6112129190612171565b905061121e8186612065565b98975050505050505050565b6001600160a01b0387166000908152600360205260409020805488919064ffffffffff16156112925760405162461bcd60e51b8152602060048201526014602482015273434c41494d5f414c52454144595f45584953545360601b60448201526064016103db565b6001600160a01b0389166112da5760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b60448201526064016103db565b60006112e68486612185565b6001600160701b0316116113345760405162461bcd60e51b81526020600482015260156024820152741253959053125117d59154d5115117d05353d55395605a1b60448201526064016103db565b60008864ffffffffff161161138b5760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f53544152545f54494d455354414d5000000000000000000060448201526064016103db565b8664ffffffffff168864ffffffffff16106113e05760405162461bcd60e51b81526020600482015260156024820152740494e56414c49445f454e445f54494d455354414d5605c1b60448201526064016103db565b60008564ffffffffff16116114375760405162461bcd60e51b815260206004820152601860248201527f494e56414c49445f52454c454153455f494e54455256414c000000000000000060448201526064016103db565b8461144289896120c5565b61144c91906121b0565b64ffffffffff16156114a05760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f494e54455256414c5f4c454e47544800000000000000000060448201526064016103db565b60008664ffffffffff161180156114c057506000836001600160701b0316115b80156114da57508764ffffffffff168664ffffffffff1611155b806114fc575064ffffffffff86161580156114fc57506001600160701b038316155b6115385760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa1a624a32360991b60448201526064016103db565b6000600360008b6001600160a01b03166001600160a01b031681526020019081526020016000209050888160000160006101000a81548164ffffffffff021916908364ffffffffff160217905550878160000160056101000a81548164ffffffffff021916908364ffffffffff160217905550600081600301600f6101000a81548164ffffffffff021916908364ffffffffff1602179055508681600001600a6101000a81548164ffffffffff021916908364ffffffffff1602179055508581600001600f6101000a81548164ffffffffff021916908364ffffffffff160217905550846001600160701b03168160010181905550838160030160006101000a8154816001600160701b0302191690836001600160701b0316021790555060008160020181905550600181600301600e6101000a81548160ff0219169083151502179055506000858561168b9190612185565b6001600160701b03169050806002546116a49190612065565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611708573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172c91906120ac565b10156117715760405162461bcd60e51b8152602060048201526014602482015273494e53554646494349454e545f42414c414e434560601b60448201526064016103db565b80600260008282546117839190612065565b9091555050600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b038d169081179091556040517f94236aa8f08a6558c854d068f832a9f6ef202e7db2b87d0a060ad02562ba8d58906118069085906121d4565b60405180910390a25050505050505050505050565b6000611870826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118f09092919063ffffffff16565b905080516000148061189157508080602001905181019061189191906121e3565b6110fd5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103db565b606061104a848460008585600080866001600160a01b03168587604051611917919061222c565b60006040518083038185875af1925050503d8060008114611954576040519150601f19603f3d011682016040523d82523d6000602084013e611959565b606091505b509150915061196a87838387611975565b979650505050505050565b606083156119e45782516000036119dd576001600160a01b0385163b6119dd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103db565b508161104a565b61104a83838151156119f95781518083602001fd5b8060405162461bcd60e51b81526004016103db9190612248565b6001600160a01b0381168114610cf257600080fd5b600060208284031215611a3a57600080fd5b8135610a5381611a13565b803564ffffffffff81168114611a5a57600080fd5b919050565b60008060408385031215611a7257600080fd5b8235611a7d81611a13565b9150611a8b60208401611a45565b90509250929050565b8015158114610cf257600080fd5b60008060408385031215611ab557600080fd5b8235611ac081611a13565b91506020830135611ad081611a94565b809150509250929050565b815164ffffffffff908116825260208084015182169083015260408084015182169083015260608084015191821690830152610120820190506080830151608083015260a083015160a083015260c0830151611b4260c08401826001600160701b03169052565b5060e0830151611b5660e084018215159052565b506101009283015164ffffffffff16919092015290565b6020808252825182820181905260009190848201906040850190845b81811015611bae5783516001600160a01b031683529284019291840191600101611b89565b50909695505050505050565b80356001600160701b0381168114611a5a57600080fd5b600080600080600080600060e0888a031215611bec57600080fd5b8735611bf781611a13565b9650611c0560208901611a45565b9550611c1360408901611a45565b9450611c2160608901611a45565b9350611c2f60808901611a45565b9250611c3d60a08901611bba565b9150611c4b60c08901611bba565b905092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611c9857611c98611c59565b604052919050565b600067ffffffffffffffff821115611cba57611cba611c59565b5060051b60200190565b600082601f830112611cd557600080fd5b81356020611cea611ce583611ca0565b611c6f565b82815260059290921b84018101918181019086841115611d0957600080fd5b8286015b84811015611d2d578035611d2081611a13565b8352918301918301611d0d565b509695505050505050565b600082601f830112611d4957600080fd5b81356020611d59611ce583611ca0565b82815260059290921b84018101918181019086841115611d7857600080fd5b8286015b84811015611d2d57611d8d81611a45565b8352918301918301611d7c565b600082601f830112611dab57600080fd5b81356020611dbb611ce583611ca0565b82815260059290921b84018101918181019086841115611dda57600080fd5b8286015b84811015611d2d57611def81611bba565b8352918301918301611dde565b600080600080600080600060e0888a031215611e1757600080fd5b873567ffffffffffffffff80821115611e2f57600080fd5b611e3b8b838c01611cc4565b985060208a0135915080821115611e5157600080fd5b611e5d8b838c01611d38565b975060408a0135915080821115611e7357600080fd5b611e7f8b838c01611d38565b965060608a0135915080821115611e9557600080fd5b611ea18b838c01611d38565b955060808a0135915080821115611eb757600080fd5b611ec38b838c01611d38565b945060a08a0135915080821115611ed957600080fd5b611ee58b838c01611d9a565b935060c08a0135915080821115611efb57600080fd5b50611f088a828b01611d9a565b91505092959891949750929550565b600060208284031215611f2957600080fd5b5035919050565b602080825260159082015274105113525397d050d0d154d4d7d491545552549151605a1b604082015260600190565b6020808252600f908201526e4e4f5f4143544956455f434c41494d60881b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015611fb057611fb0611f88565b500390565b805464ffffffffff8082168452602882901c81166020850152605082901c81166040850152607882901c8116606085015260018301546080850152600283015460a085015260038301546001600160701b03811660c0860152915061202460e0850160ff8460701c1615159052565b61203d6101008501828460781c1664ffffffffff169052565b50505050565b83815264ffffffffff83166020820152610160810161104a6040830184611fb5565b6000821982111561207857612078611f88565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600182016120a5576120a5611f88565b5060010190565b6000602082840312156120be57600080fd5b5051919050565b600064ffffffffff838116908316818110156120e3576120e3611f88565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600064ffffffffff80841680612119576121196120eb565b92169190910492915050565b600064ffffffffff8083168185168183048111821515161561214957612149611f88565b02949350505050565b600081600019048311821515161561216c5761216c611f88565b500290565b600082612180576121806120eb565b500490565b60006001600160701b038083168185168083038211156121a7576121a7611f88565b01949350505050565b600064ffffffffff808416806121c8576121c86120eb565b92169190910692915050565b61012081016108138284611fb5565b6000602082840312156121f557600080fd5b8151610a5381611a94565b60005b8381101561221b578181015183820152602001612203565b8381111561203d5750506000910152565b6000825161223e818460208701612200565b9190910192915050565b6020815260008251806020840152612267816040850160208701612200565b601f01601f1916919091016040019291505056fea2646970667358221220b7993e911d11d74b8ce078f3d0909a2059fb68d85ca888f345f9629eb7992dc264736f6c634300080e0033";

export class VTVLVesting__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VTVLVesting> {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<VTVLVesting>;
  }
  getDeployTransaction(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  attach(address: string): VTVLVesting {
    return super.attach(address) as VTVLVesting;
  }
  connect(signer: Signer): VTVLVesting__factory {
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
