/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VTVLMerkleVestingFactory,
  VTVLMerkleVestingFactoryInterface,
} from "../../contracts/VTVLMerkleVestingFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vestingAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "CreateVestingContract",
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
    inputs: [
      {
        internalType: "contract IERC20Extented",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "createVestingContract",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_vestingContract",
        type: "address",
      },
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
        name: "_vestingContract",
        type: "address",
      },
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
        name: "_vestingContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "updateconversionThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6136238061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063e55156b51161005b578063e55156b5146100dc578063f2fde38b146100ef578063f4b2984114610102578063f940e3851461011557600080fd5b806312c126b41461008d578063715018a6146100a25780638da5cb5b146100aa578063cbf1ad7e146100c9575b600080fd5b6100a061009b366004610600565b610128565b005b6100a06101d4565b600054604080516001600160a01b039092168252519081900360200190f35b6100a06100d7366004610639565b6101e8565b6100a06100ea366004610639565b610257565b6100a06100fd366004610665565b61031a565b6100a0610110366004610639565b610393565b6100a0610123366004610600565b610443565b610130610533565b6001600160a01b038216600090815260016020526040902054829060ff166101735760405162461bcd60e51b815260040161016a90610689565b60405180910390fd5b6040516331a6faf960e21b81526001600160a01b03838116600483015284169063c69bebe4906024015b600060405180830381600087803b1580156101b757600080fd5b505af11580156101cb573d6000803e3d6000fd5b50505050505050565b6101dc610533565b6101e6600061058d565b565b6101f0610533565b6001600160a01b038216600090815260016020526040902054829060ff1661022a5760405162461bcd60e51b815260040161016a90610689565b60405163508de5df60e01b8152600481018390526001600160a01b0384169063508de5df9060240161019d565b61025f610533565b6001600160a01b038216600090815260016020526040902054829060ff166102995760405162461bcd60e51b815260040161016a90610689565b6000821180156102aa575061271082105b156102dc576040516369fe0e2d60e01b8152600481018390526001600160a01b038416906369fe0e2d9060240161019d565b60405162461bcd60e51b81526020600482015260136024820152721253959053125117d1915157d4115490d15395606a1b604482015260640161016a565b610322610533565b6001600160a01b0381166103875760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161016a565b6103908161058d565b50565b60008282336040516103a4906105dd565b6001600160a01b03938416815260208101929092529091166040820152606001604051809103906000f0801580156103e0573d6000803e3d6000fd5b506001600160a01b038116600081815260016020818152604092839020805460ff1916909217909155905133815292935090917fe5211516932e9042c46c90d9b551b41d1e991bc87e19bd664dc7b48f5323eef1910160405180910390a2505050565b61044b610533565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610492573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b691906106c0565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb906044016020604051808303816000875af1158015610509573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052d91906106d9565b50505050565b6000546001600160a01b031633146101e65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161016a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612ef280620006fc83390190565b6001600160a01b038116811461039057600080fd5b6000806040838503121561061357600080fd5b823561061e816105eb565b9150602083013561062e816105eb565b809150509250929050565b6000806040838503121561064c57600080fd5b8235610657816105eb565b946020939093013593505050565b60006020828403121561067757600080fd5b8135610682816105eb565b9392505050565b60208082526018908201527f4e6f74206f75722076657374696e6720636f6e74726163740000000000000000604082015260600190565b6000602082840312156106d257600080fd5b5051919050565b6000602082840312156106eb57600080fd5b8151801515811461068257600080fdfe60e06040523480156200001157600080fd5b5060405162002ef238038062002ef28339810160408190526200003491620001e4565b8262000040336200017b565b600180556001600160a01b038116620000915760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015260640160405180910390fd5b6001600160a01b0381166080819052604051630b4c774160e11b8152600481019190915273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4860248201526101f46044820152731f98431c8ad98523631ae4a59f267346ea31f98490631698ee8290606401602060405180830381865afa15801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a91906200022c565b6001600160a01b031660a0525062000152816200017b565b503360c0819052600580546001600160a01b031916909117905560045550601e60065562000253565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001e157600080fd5b50565b600080600060608486031215620001fa57600080fd5b83516200020781620001cb565b6020850151604086015191945092506200022181620001cb565b809150509250925092565b6000602082840312156200023f57600080fd5b81516200024c81620001cb565b9392505050565b60805160a05160c051612c06620002ec60003960008181610548015281816107e20152610bdd0152600081816101c8015281816113f301526117360152600081816102f7015281816104460152818161047001528181610dd201528181610e550152818161101c01528181611793015281816117cb0152818161180f01528181611879015281816119440152611a100152612c066000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806398803667116100f9578063d672c07d11610097578063e50373f911610071578063e50373f9146103b7578063e865fbc7146103ca578063f2fde38b146103d2578063fa79fba3146103e557600080fd5b8063d672c07d14610376578063d77836ce14610389578063e3d11ba01461039c57600080fd5b8063b3f00674116100d3578063b3f0067414610322578063bb09d9b714610335578063c69bebe414610350578063cb7609131461036357600080fd5b806398803667146102cf5780639d76ea58146102f2578063a3bd607e1461031957600080fd5b806369fe0e2d116101665780637b748d32116101405780637b748d321461028f5780637fd6f15c146102a25780638da5cb5b146102ab578063972a2a62146102bc57600080fd5b806369fe0e2d146102615780636e85ddd714610274578063715018a61461028757600080fd5b806310f01555146101ae57806316f0115b146101c357806347399595146102075780634f7ed92114610228578063508de5df1461023b5780635aec5f4b1461024e575b600080fd5b6101c16101bc366004612206565b6103f8565b005b6101ea7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61021a610215366004612350565b610405565b6040519081526020016101fe565b61021a61023636600461236d565b61041b565b6101c1610249366004612206565b61053d565b6101c161025c36600461244a565b610593565b6101c161026f366004612206565b6107d7565b6101c161028236600461244a565b610824565b6101c1610a0c565b61021a61029d366004612350565b610a20565b61021a60045481565b6000546001600160a01b03166101ea565b6101c16102ca36600461249b565b610b41565b6102e26102dd3660046124e0565b610b8a565b60405190151581526020016101fe565b6101ea7f000000000000000000000000000000000000000000000000000000000000000081565b61021a60065481565b6005546101ea906001600160a01b031681565b6101ea73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b6101c161035e36600461250c565b610bd2565b61021a610371366004612529565b610c3c565b61021a610384366004612350565b610cd4565b6101c1610397366004612206565b610d6a565b6101ea731f98431c8ad98523631ae4a59f267346ea31f98481565b6101c16103c536600461250c565b610e43565b61021a611004565b6101c16103e036600461250c565b611094565b61021a6103f3366004612350565b61110a565b6104006111cb565b600255565b6000610415828360200151611225565b92915050565b60008061042783611332565b50905061046a818573a0b86991c6218b36c1d19d4a2e9eb0ce3606eb487f000000000000000000000000000000000000000000000000000000000000000061159a565b915060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f0919061255f565b60ff1690506001600160801b03851661050a600683612598565b61051590600a612693565b61052085606461269f565b61052a91906126d4565b61053491906126d4565b95945050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461058e5760405162461bcd60e51b8152600401610585906126e8565b60405180910390fd5b600655565b61059b6116a8565b60006105a68361110a565b90506105b28282610b41565b608083015160e08401516001600160a01b0316600090815260036020526040812054156106235760e08501516001600160a01b03166000908152600360205260409020805464ffffffffff841690811061060e5761060e61270d565b906000526020600020906002020190506106a3565b6040805180820182526000808252602080830182815260e08a0180516001600160a01b0390811685526003845286852080546001818101835591875294862087516002909602019485559251939092019290925590511681529182208054919290916106915761069161270d565b90600052602060002090600202019150505b60006106af8642610c3c565b8254909150811180156106c25750600081115b6107045760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b6044820152606401610585565b81546000906107139083612598565b90506000811161075b5760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b6044820152606401610585565b81835560e0870151610775908264ffffffffff8716611701565b60e08701516040805183815264ffffffffff871660208201526001600160a01b03909216917f987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a910160405180910390a250505050506107d360018055565b5050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461081f5760405162461bcd60e51b8152600401610585906126e8565b600455565b61082c6111cb565b60e0820151608083015160006108418561110a565b905061084d8482610b41565b60e08501516001600160a01b0316600090815260036020526040812054156108c95760e08601516001600160a01b03166000908152600360205260409020805464ffffffffff85169081106108a4576108a461270d565b906000526020600020906002020190504264ffffffffff168160010181905550610949565b604080518082018252600080825242602080840191825260e08b0180516001600160a01b03908116855260038352868520805460018181018355918752938620875160029095020193845593519290930191909155511681529182208054919290916109375761093761270d565b90600052602060002090600202019150505b600061095487610405565b90508082600001541061099e5760405162461bcd60e51b81526020600482015260126024820152711393d7d553959154d5115117d05353d5539560721b6044820152606401610585565b60006109aa8842610c3c565b905060006109b88284612598565b9050866001600160a01b03167fd5df8b57541c233bf9f9e0bdc9d2a176bf3f7636d2c488a737047ceac242232a82428c8a6040516109f99493929190612723565b60405180910390a2505050505050505050565b610a146111cb565b610a1e6000611a3c565b565b60e08101516001600160a01b03166000908152600360205260408120548190610a4a576000610a98565b60e08301516001600160a01b031660009081526003602052604090206080840151815464ffffffffff909116908110610a8557610a8561270d565b9060005260206000209060020201600101545b60e08401516001600160a01b031660009081526003602052604081205491925090610ac4576000610b12565b60e08401516001600160a01b031660009081526003602052604090206080850151815464ffffffffff909116908110610aff57610aff61270d565b9060005260206000209060020201600001545b9050600082600003610b28578460200151610b2a565b825b905081610b378683611225565b6105349190612598565b610b4e8260025483611a8c565b6107d35760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b210383937b7b360991b6044820152606401610585565b6001600160a01b0382166000908152600360205260408120805483908110610bb457610bb461270d565b90600052602060002090600202016001015460001415905092915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c1a5760405162461bcd60e51b8152600401610585906126e8565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60e08201516001600160a01b03166000908152600360205260408120548190610c66576000610cb4565b60e08401516001600160a01b031660009081526003602052604090206080850151815464ffffffffff909116908110610ca157610ca161270d565b9060005260206000209060020201600101545b9050600081600003610cc65783610cc8565b815b90506105348582611225565b60e08101516001600160a01b03166000908152600360205260408120548190610cfe576000610d4c565b60e08301516001600160a01b031660009081526003602052604090206080840151815464ffffffffff909116908110610d3957610d3961270d565b9060005260206000209060020201600001545b905080610d598442610c3c565b610d639190612598565b9392505050565b610d726111cb565b610d7a6116a8565b6000610d84611004565b905081811015610dcd5760405162461bcd60e51b8152602060048201526014602482015273494e53554646494349454e545f42414c414e434560601b6044820152606401610585565b610e017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163384611aa2565b60405182815233907fca1cf43de312865665f595e88f569f9d5246690c07df26e86aba01147e6d13149060200160405180910390a250610e4060018055565b50565b610e4b6111cb565b610e536116a8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b031603610ec45760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22faa27a5a2a760991b6044820152606401610585565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610f0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2f91906127cf565b905060008111610f785760405162461bcd60e51b8152602060048201526014602482015273494e53554646494349454e545f42414c414e434560601b6044820152606401610585565b6001600160a01b03821663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af1158015610fd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff991906127e8565b5050610e4060018055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561106b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108f91906127cf565b905090565b61109c6111cb565b6001600160a01b0381166111015760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610585565b610e4081611a3c565b80516020808301516040808501516060860151608087015160a088015160c089015160e08a0151955160009961119199909897910164ffffffffff98891681529688166020880152948716604087015292861660608601529416608084015260a083019390935260c08201929092526001600160a01b039190911660e08201526101000190565b60408051601f1981840301815282825280516020918201209083015201604051602081830303815290604052805190602001209050919050565b6000546001600160a01b03163314610a1e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610585565b60008060009050836020015164ffffffffff168364ffffffffff161115611262578360a001518460c0015161125a919061280a565b915050610415565b836040015164ffffffffff168364ffffffffff161061128d5760c084015161128a908261280a565b90505b836000015164ffffffffff168364ffffffffff161115610d635783516000906112b69085612822565b60608601519091506000906112cb8184612848565b6112d5919061286c565b90506000866000015187602001516112ed9190612822565b905060008164ffffffffff168364ffffffffff168960a00151611310919061269f565b61131a91906126d4565b9050611326818661280a565b98975050505050505050565b6000808263ffffffff166000036113705760405162461bcd60e51b8152602060048201526002602482015261042560f41b6044820152606401610585565b60408051600280825260608201835260009260208301908036833701905050905083816000815181106113a5576113a561270d565b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106113d4576113d461270d565b602002602001019063ffffffff16908163ffffffff16815250506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663883bdbfd846040518263ffffffff1660e01b815260040161143d9190612899565b600060405180830381865afa15801561145a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114829190810190612947565b9150915060008260008151811061149b5761149b61270d565b6020026020010151836001815181106114b6576114b661270d565b60200260200101516114c89190612a09565b90506000826000815181106114df576114df61270d565b6020026020010151836001815181106114fa576114fa61270d565b602002602001015161150c9190612a59565b905061151e63ffffffff891683612a79565b965060008260060b128015611544575061153e63ffffffff891683612ab7565b60060b15155b15611557578661155381612ad9565b9750505b60006115706001600160a01b0363ffffffff8b16612afc565b905061158d640100000000600160c01b03602084901b1682612b22565b9650505050505050915091565b6000806115a686611b05565b90506001600160801b036001600160a01b0382161161162c5760006115d46001600160a01b0383168061269f565b9050836001600160a01b0316856001600160a01b03161061160c57611607600160c01b876001600160801b031683611e28565b611624565b61162481876001600160801b0316600160c01b611e28565b92505061169f565b600061164b6001600160a01b0383168068010000000000000000611e28565b9050836001600160a01b0316856001600160a01b0316106116835761167e600160801b876001600160801b031683611e28565b61169b565b61169b81876001600160801b0316600160801b611e28565b9250505b50949350505050565b6002600154036116fa5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610585565b6002600155565b60045415611a0357600061171483611eda565b90506000606460065483611728919061269f565b61173291906126d4565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161561193757600061177085600a61041b565b9050600654811061186c576117ba866117898588612598565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611aa2565b6005546117f4906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911685611aa2565b60055460408051858152602081018790526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116928201929092529116907fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49060600160405180910390a2611931565b6118a06001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168787611aa2565b6005546118ce9073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489088906001600160a01b031685611ef7565b600554604080518481526020810187905273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb488183015290516001600160a01b03909216917fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49181900360600190a25b506119fc565b61196b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168686611aa2565b6005546119999073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489087906001600160a01b031684611ef7565b600554604080518381526020810186905273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb488183015290516001600160a01b03909216917fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49181900360600190a25b5050505050565b611a376001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484611aa2565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600082611a998584611f35565b14949350505050565b6040516001600160a01b038316602482015260448101829052611a3790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611f82565b60008060008360020b12611b1c578260020b611b24565b8260020b6000035b9050620d89e8811115611b4a576040516315e4079d60e11b815260040160405180910390fd5b600081600116600003611b6157600160801b611b73565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611ba7576ffff97272373d413259a46990580e213a0260801c5b6004821615611bc6576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611be5576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611c04576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611c23576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611c42576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611c61576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611c81576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611ca1576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611cc1576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615611ce1576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611d01576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611d21576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611d41576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611d61576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611d82576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611da2576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611dc1576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611dde576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611dff578060001981611dfb57611dfb6126be565b0490505b640100000000810615611e13576001611e16565b60005b60ff16602082901c0192505050919050565b6000808060001985870985870292508281108382030391505080600003611e615760008411611e5657600080fd5b508290049050610d63565b808411611e6d57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b600061271060045483611eed919061269f565b61041591906126d4565b6040516001600160a01b0380851660248301528316604482015260648101829052611f2f9085906323b872dd60e01b90608401611ace565b50505050565b600081815b8451811015611f7a57611f6682868381518110611f5957611f5961270d565b6020026020010151612057565b915080611f7281612b3c565b915050611f3a565b509392505050565b6000611fd7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166120869092919063ffffffff16565b9050805160001480611ff8575080806020019051810190611ff891906127e8565b611a375760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610585565b6000818310612073576000828152602084905260409020610d63565b6000838152602083905260409020610d63565b6060612095848460008561209d565b949350505050565b6060824710156120fe5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610585565b600080866001600160a01b0316858760405161211a9190612b81565b60006040518083038185875af1925050503d8060008114612157576040519150601f19603f3d011682016040523d82523d6000602084013e61215c565b606091505b509150915061169b87838387606083156121d75782516000036121d0576001600160a01b0385163b6121d05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610585565b5081612095565b61209583838151156121ec5781518083602001fd5b8060405162461bcd60e51b81526004016105859190612b9d565b60006020828403121561221857600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561225e5761225e61221f565b604052919050565b803564ffffffffff8116811461227b57600080fd5b919050565b6001600160a01b0381168114610e4057600080fd5b60006101008083850312156122a957600080fd5b6040519081019067ffffffffffffffff821181831017156122cc576122cc61221f565b816040528092506122dc84612266565b81526122ea60208501612266565b60208201526122fb60408501612266565b604082015261230c60608501612266565b606082015261231d60808501612266565b608082015260a084013560a082015260c084013560c082015260e0840135915061234682612280565b60e0015292915050565b6000610100828403121561236357600080fd5b610d638383612295565b6000806040838503121561238057600080fd5b82356001600160801b038116811461239757600080fd5b9150602083013563ffffffff811681146123b057600080fd5b809150509250929050565b600067ffffffffffffffff8211156123d5576123d561221f565b5060051b60200190565b600082601f8301126123f057600080fd5b81356020612405612400836123bb565b612235565b82815260059290921b8401810191818101908684111561242457600080fd5b8286015b8481101561243f5780358352918301918301612428565b509695505050505050565b600080610120838503121561245e57600080fd5b6124688484612295565b915061010083013567ffffffffffffffff81111561248557600080fd5b612491858286016123df565b9150509250929050565b600080604083850312156124ae57600080fd5b823567ffffffffffffffff8111156124c557600080fd5b6124d1858286016123df565b95602094909401359450505050565b600080604083850312156124f357600080fd5b82356124fe81612280565b946020939093013593505050565b60006020828403121561251e57600080fd5b8135610d6381612280565b600080610120838503121561253d57600080fd5b6125478484612295565b91506125566101008401612266565b90509250929050565b60006020828403121561257157600080fd5b815160ff81168114610d6357600080fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156125aa576125aa612582565b500390565b600181815b808511156125ea5781600019048211156125d0576125d0612582565b808516156125dd57918102915b93841c93908002906125b4565b509250929050565b60008261260157506001610415565b8161260e57506000610415565b8160018114612624576002811461262e5761264a565b6001915050610415565b60ff84111561263f5761263f612582565b50506001821b610415565b5060208310610133831016604e8410600b841016171561266d575081810a610415565b61267783836125af565b806000190482111561268b5761268b612582565b029392505050565b6000610d6383836125f2565b60008160001904831182151516156126b9576126b9612582565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826126e3576126e36126be565b500490565b6020808252600b908201526a4e6f7420466163746f727960a81b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60006101608201905085825264ffffffffff808616602084015280855116604084015280602086015116606084015280604086015116608084015250606084015161277760a084018264ffffffffff169052565b50608084015164ffffffffff811660c08401525060a084015160e083015260c084015161010083015260e08401516127bb6101208401826001600160a01b03169052565b5064ffffffffff8316610140830152610534565b6000602082840312156127e157600080fd5b5051919050565b6000602082840312156127fa57600080fd5b81518015158114610d6357600080fd5b6000821982111561281d5761281d612582565b500190565b600064ffffffffff8381169083168181101561284057612840612582565b039392505050565b600064ffffffffff80841680612860576128606126be565b92169190910492915050565b600064ffffffffff8083168185168183048111821515161561289057612890612582565b02949350505050565b6020808252825182820181905260009190848201906040850190845b818110156128d757835163ffffffff16835292840192918401916001016128b5565b50909695505050505050565b600082601f8301126128f457600080fd5b81516020612904612400836123bb565b82815260059290921b8401810191818101908684111561292357600080fd5b8286015b8481101561243f57805161293a81612280565b8352918301918301612927565b6000806040838503121561295a57600080fd5b825167ffffffffffffffff8082111561297257600080fd5b818501915085601f83011261298657600080fd5b81516020612996612400836123bb565b82815260059290921b840181019181810190898411156129b557600080fd5b948201945b838610156129e35785518060060b81146129d45760008081fd5b825294820194908201906129ba565b918801519196509093505050808211156129fc57600080fd5b50612491858286016128e3565b60008160060b8360060b6000811281667fffffffffffff1901831281151615612a3457612a34612582565b81667fffffffffffff018313811615612a4f57612a4f612582565b5090039392505050565b60006001600160a01b038381169083168181101561284057612840612582565b60008160060b8360060b80612a9057612a906126be565b667fffffffffffff19821460001982141615612aae57612aae612582565b90059392505050565b60008260060b80612aca57612aca6126be565b808360060b0791505092915050565b60008160020b627fffff198103612af257612af2612582565b6000190192915050565b60006001600160c01b038281168482168115158284048211161561289057612890612582565b60006001600160c01b0383811680612860576128606126be565b600060018201612b4e57612b4e612582565b5060010190565b60005b83811015612b70578181015183820152602001612b58565b83811115611f2f5750506000910152565b60008251612b93818460208701612b55565b9190910192915050565b6020815260008251806020840152612bbc816040850160208701612b55565b601f01601f1916919091016040019291505056fea26469706673582212202b397a694d765a7de1283409adae1682edf2793d7b25c3354e910bcc839933b364736f6c634300080e0033a2646970667358221220bb6c22fee76322f6d57287f41af975cb6fbbbb8c7138a01de1ea330c253ca6b164736f6c634300080e0033";

type VTVLMerkleVestingFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VTVLMerkleVestingFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VTVLMerkleVestingFactory__factory extends ContractFactory {
  constructor(...args: VTVLMerkleVestingFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<VTVLMerkleVestingFactory> {
    return super.deploy(overrides || {}) as Promise<VTVLMerkleVestingFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VTVLMerkleVestingFactory {
    return super.attach(address) as VTVLMerkleVestingFactory;
  }
  override connect(signer: Signer): VTVLMerkleVestingFactory__factory {
    return super.connect(signer) as VTVLMerkleVestingFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VTVLMerkleVestingFactoryInterface {
    return new utils.Interface(_abi) as VTVLMerkleVestingFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VTVLMerkleVestingFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VTVLMerkleVestingFactory;
  }
}
