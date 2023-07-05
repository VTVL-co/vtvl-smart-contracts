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
  VestingMilestone,
  VestingMilestoneInterface,
  InputMilestoneStruct,
} from "../../../contracts/milestone/VestingMilestone";

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
        name: "_allocation",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "percent",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "period",
            type: "uint128",
          },
          {
            internalType: "uint120",
            name: "releaseIntervalSecs",
            type: "uint120",
          },
        ],
        internalType: "struct InputMilestone[]",
        name: "_milestones",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
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
    name: "allocation",
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
        name: "_milestoneIndex",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
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
        name: "_milestoneIndex",
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
    inputs: [],
    name: "getAllRecipients",
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
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_milestoneIndex",
        type: "uint256",
      },
    ],
    name: "getMilestone",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawnAmount",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "period",
            type: "uint128",
          },
          {
            internalType: "uint120",
            name: "releaseIntervalSecs",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "isWithdrawn",
            type: "bool",
          },
          {
            internalType: "uint248",
            name: "allocation",
            type: "uint248",
          },
          {
            internalType: "uint8",
            name: "percent",
            type: "uint8",
          },
        ],
        internalType: "struct Milestone",
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
      {
        internalType: "uint256",
        name: "_milestoneIndex",
        type: "uint256",
      },
    ],
    name: "isCompleted",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "recipients",
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
        name: "_milestoneIndex",
        type: "uint256",
      },
    ],
    name: "setComplete",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_milestoneIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_referenceTs",
        type: "uint256",
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
        name: "_milestoneIndex",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ad638038062001ad6833981016040819052620000349162000536565b6200003f33620000f5565b60016006556001600160a01b038516620000915760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015260640160405180910390fd5b600280546001600160a01b0319166001600160a01b038716179055620000b781620000f5565b8151620000cc90600190602085019062000372565b5083600381905550620000ea836200014560201b62000af61760201c565b505050505062000729565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b805160005b818110156200036d576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152838281518110620001a157620001a16200069c565b60209081029190910181015101516001600160801b031660408201528351849083908110620001d457620001d46200069c565b60200260200101516040015181606001906001600160781b031690816001600160781b03168152505060646003548584815181106200021757620002176200069c565b60200260200101516000015160ff16620002329190620006c8565b6200023e9190620006ea565b6001600160f81b031660a082015260015460005b818110156200035e578260056000600184815481106200027657620002766200069c565b60009182526020808320909101546001600160a01b0316835282810193909352604091820181208882528352819020835181559183015160018381019190915590830151600283018054606086015160808701511515600160f81b9081026001600160f81b036001600160781b03909316600160801b027fff000000000000000000000000000000000000000000000000000000000000009094166001600160801b03909616959095179290921781169390931790915560a085015160c09095015160ff1602931692909217600390910155018062000355816200070d565b91505062000252565b5082600101925050506200014a565b505050565b828054828255906000526020600020908101928215620003ca579160200282015b82811115620003ca57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000393565b50620003d8929150620003dc565b5090565b5b80821115620003d85760008155600101620003dd565b6001600160a01b03811681146200040957600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156200044757620004476200040c565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200047857620004786200040c565b604052919050565b60006001600160401b038211156200049c576200049c6200040c565b5060051b60200190565b8051620004b381620003f3565b919050565b600082601f830112620004ca57600080fd5b81516020620004e3620004dd8362000480565b6200044d565b82815260059290921b840181019181810190868411156200050357600080fd5b8286015b848110156200052b5780516200051d81620003f3565b835291830191830162000507565b509695505050505050565b600080600080600060a086880312156200054f57600080fd5b85516200055c81620003f3565b60208781015160408901519297509550906001600160401b03808211156200058357600080fd5b818901915089601f8301126200059857600080fd5b8151620005a9620004dd8262000480565b8181526060918202840185019185820191908d841115620005c957600080fd5b948601945b83861015620006575780868f031215620005e85760008081fd5b620005f262000422565b865160ff81168114620006055760008081fd5b8152868801516001600160801b0381168114620006225760008081fd5b8189015260408701516001600160781b0381168114620006425760008081fd5b604082015283529485019491860191620005ce565b8c015190985094505050808311156200066f57600080fd5b50506200067f88828901620004b8565b9250506200069060808701620004a6565b90509295509295909350565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620006e557620006e5620006b2565b500290565b6000826200070857634e487b7160e01b600052601260045260246000fd5b500490565b600060018201620007225762000722620006b2565b5060010190565b61139d80620007396000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806379b8d938116100a2578063a431723311610071578063a431723314610378578063b6b55f251461038b578063b74513c11461039e578063d1bc76a1146103b3578063f2fde38b146103c657600080fd5b806379b8d9381461032457806388a17bde146103375780638da5cb5b146103405780639d76ea581461036557600080fd5b806356a3150b116100de57806356a3150b1461016c57806358d2a364146102c7578063715018a6146102da57806373e78ca3146102e257600080fd5b806304c76af014610110578063137c68fa1461011a578063195f58e9146101365780632e1a7d4d14610159575b600080fd5b6101186103d9565b005b61012360045481565b6040519081526020015b60405180910390f35b6101496101443660046110c1565b610453565b604051901515815260200161012d565b6101186101673660046110eb565b61048d565b61025661017a3660046110c1565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152506001600160a01b0382166000908152600560209081526040808320848452825291829020825160e0810184528154815260018201549281019290925260028101546001600160801b038116938301939093526001600160781b03600160801b840416606083015260ff600160f81b938490048116151560808401526003909101546001600160f81b03811660a08401529290920490911660c082015292915050565b60405161012d919081518152602080830151908201526040808301516001600160801b0316908201526060808301516001600160781b03169082015260808083015115159082015260a0808301516001600160f81b03169082015260c09182015160ff169181019190915260e00190565b6101186102d53660046110c1565b610636565b610118610793565b6101236102f03660046110c1565b6001600160a01b0391909116600090815260056020908152604080832093835292905220600301546001600160f81b031690565b6101236103323660046110c1565b6107a7565b61012360035481565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161012d565b60025461034d906001600160a01b031681565b610123610386366004611104565b6107e3565b6101186103993660046110eb565b6109d9565b6103a66109f4565b60405161012d9190611137565b61034d6103c13660046110eb565b610a56565b6101186103d4366004611184565b610a80565b6103e1610cf5565b600454600154600354600092916103f7916111b5565b61040191906111d4565b60025490915061041b906001600160a01b03163383610d4f565b60405181815233907fca1cf43de312865665f595e88f569f9d5246690c07df26e86aba01147e6d13149060200160405180910390a250565b6001600160a01b038216600090815260056020908152604080832084845290915281205415610483576001610486565b60005b9392505050565b33600081815260056020908152604080832085845290915281206003015483916001600160f81b0390911690036104fa5760405162461bcd60e51b815260206004820152600c60248201526b4e4f5f4d494c4553544f4e4560a01b60448201526064015b60405180910390fd5b3360008181526005602090815260408083208784529091528120548591036105545760405162461bcd60e51b815260206004820152600d60248201526c1393d517d0d3d3541311551151609a1b60448201526064016104f1565b33600081815260056020908152604080832089845290915281209161057a9088426107e3565b9050816001015481116105c55760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016104f1565b60008260010154826105d791906111d4565b6001840183905590506105f7336002546001600160a01b03169083610d4f565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a25050505050505050565b61063e610cf5565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ab91906111eb565b6001546003549192506106bd916111b5565b8110156106fc5760405162461bcd60e51b815260206004820152600d60248201526c1393d517d1115413d4d2551151609a1b60448201526064016104f1565b6001600160a01b038316600090815260056020908152604080832085845290915290208054156107625760405162461bcd60e51b81526020600482015260116024820152701053149150511657d0d3d3541311551151607a1b60448201526064016104f1565b4281556003810154600480546001600160f81b0390921691600090610788908490611204565b909155505050505050565b61079b610cf5565b6107a56000610db2565b565b6001600160a01b03821660009081526005602090815260408083208484529091528120600101546107d98484426107e3565b61048691906111d4565b6001600160a01b0383166000908152600560209081526040808320858452909152812060030154849084906001600160f81b031683036108545760405162461bcd60e51b815260206004820152600c60248201526b4e4f5f4d494c4553544f4e4560a01b60448201526064016104f1565b6001600160a01b03861660009081526005602090815260408083208884528252808320815160e081018352815480825260018301549482019490945260028201546001600160801b038116938201939093526001600160781b03600160801b840416606082015260ff600160f81b938490048116151560808301526003909201546001600160f81b03811660a0830152929092041660c082015291036108fe5760009350506109d0565b60408101518151610918916001600160801b031690611204565b85111561093c5760408101518151610939916001600160801b031690611204565b94505b80518511156109ca57805160009061095490876111d4565b9050600082606001516001600160781b0316826109719190611232565b9050600083604001516001600160801b03168460a0015185606001516001600160781b03166109a09190611246565b6109aa9190611275565b6001600160f81b031690506109bf82826111b5565b9650505050506109d0565b60009350505b50509392505050565b6002546109f1906001600160a01b0316333084610e02565b50565b60606001805480602002602001604051908101604052809291908181526020018280548015610a4c57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610a2e575b5050505050905090565b60018181548110610a6657600080fd5b6000918252602090912001546001600160a01b0316905081565b610a88610cf5565b6001600160a01b038116610aed5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104f1565b6109f181610db2565b805160005b81811015610cf0576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152838281518110610b4e57610b4e61129b565b60209081029190910181015101516001600160801b031660408201528351849083908110610b7e57610b7e61129b565b60200260200101516040015181606001906001600160781b031690816001600160781b0316815250506064600354858481518110610bbe57610bbe61129b565b60200260200101516000015160ff16610bd791906111b5565b610be19190611232565b6001600160f81b031660a082015260015460005b81811015610ce257826005600060018481548110610c1557610c1561129b565b60009182526020808320909101546001600160a01b0316835282810193909352604091820181208882528352819020835181559183015160018381019190915590830151600283018054606086015160808701511515600160f81b9081026001600160f81b036001600160781b03909316600160801b026001600160f81b03199094166001600160801b03909616959095179290921781169390931790915560a085015160c09095015160ff16029316929092176003909101550180610cda816112b1565b915050610bf5565b508260010192505050610afb565b505050565b6000546001600160a01b031633146107a55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f1565b6040516001600160a01b038316602482015260448101829052610cf090849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610e40565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610e3a9085906323b872dd60e01b90608401610d7b565b50505050565b6000610e95826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f159092919063ffffffff16565b9050805160001480610eb6575080806020019051810190610eb691906112ca565b610cf05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104f1565b6060610f248484600085610f2c565b949350505050565b606082471015610f8d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104f1565b600080866001600160a01b03168587604051610fa99190611318565b60006040518083038185875af1925050503d8060008114610fe6576040519150601f19603f3d011682016040523d82523d6000602084013e610feb565b606091505b5091509150610ffc87838387611007565b979650505050505050565b6060831561107657825160000361106f576001600160a01b0385163b61106f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104f1565b5081610f24565b610f24838381511561108b5781518083602001fd5b8060405162461bcd60e51b81526004016104f19190611334565b80356001600160a01b03811681146110bc57600080fd5b919050565b600080604083850312156110d457600080fd5b6110dd836110a5565b946020939093013593505050565b6000602082840312156110fd57600080fd5b5035919050565b60008060006060848603121561111957600080fd5b611122846110a5565b95602085013595506040909401359392505050565b6020808252825182820181905260009190848201906040850190845b818110156111785783516001600160a01b031683529284019291840191600101611153565b50909695505050505050565b60006020828403121561119657600080fd5b610486826110a5565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156111cf576111cf61119f565b500290565b6000828210156111e6576111e661119f565b500390565b6000602082840312156111fd57600080fd5b5051919050565b600082198211156112175761121761119f565b500190565b634e487b7160e01b600052601260045260246000fd5b6000826112415761124161121c565b500490565b60006001600160f81b038281168482168115158284048211161561126c5761126c61119f565b02949350505050565b60006001600160f81b038381168061128f5761128f61121c565b92169190910492915050565b634e487b7160e01b600052603260045260246000fd5b6000600182016112c3576112c361119f565b5060010190565b6000602082840312156112dc57600080fd5b8151801515811461048657600080fd5b60005b838110156113075781810151838201526020016112ef565b83811115610e3a5750506000910152565b6000825161132a8184602087016112ec565b9190910192915050565b60208152600082518060208401526113538160408501602087016112ec565b601f01601f1916919091016040019291505056fea2646970667358221220de91c91a5dbbbd57710e9d6ab8ef682c6a948f0fdd43f78f29ed8946abb84ae664736f6c634300080e0033";

type VestingMilestoneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingMilestoneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VestingMilestone__factory extends ContractFactory {
  constructor(...args: VestingMilestoneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenAddress: string,
    _allocation: BigNumberish,
    _milestones: InputMilestoneStruct[],
    _recipients: string[],
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<VestingMilestone> {
    return super.deploy(
      _tokenAddress,
      _allocation,
      _milestones,
      _recipients,
      _owner,
      overrides || {}
    ) as Promise<VestingMilestone>;
  }
  override getDeployTransaction(
    _tokenAddress: string,
    _allocation: BigNumberish,
    _milestones: InputMilestoneStruct[],
    _recipients: string[],
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenAddress,
      _allocation,
      _milestones,
      _recipients,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): VestingMilestone {
    return super.attach(address) as VestingMilestone;
  }
  override connect(signer: Signer): VestingMilestone__factory {
    return super.connect(signer) as VestingMilestone__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingMilestoneInterface {
    return new utils.Interface(_abi) as VestingMilestoneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VestingMilestone {
    return new Contract(address, _abi, signerOrProvider) as VestingMilestone;
  }
}