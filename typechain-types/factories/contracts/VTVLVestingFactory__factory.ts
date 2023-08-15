/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VTVLVestingFactory,
  VTVLVestingFactoryInterface,
} from "../../contracts/VTVLVestingFactory";

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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6140e88061007e6000396000f3fe60806040523480156200001157600080fd5b5060043610620000935760003560e01c8063e55156b51162000062578063e55156b514620000f1578063f2fde38b1462000108578063f4b29841146200011f578063f940e385146200013657600080fd5b806312c126b41462000098578063715018a614620000b15780638da5cb5b14620000bb578063cbf1ad7e14620000da575b600080fd5b620000af620000a9366004620006bd565b6200014d565b005b620000af62000223565b600054604080516001600160a01b039092168252519081900360200190f35b620000af620000eb366004620006fb565b6200025e565b620000af62000102366004620006fb565b620002f6565b620000af620001193660046200072a565b620003e5565b620000af62000130366004620006fb565b62000487565b620000af62000147366004620006bd565b6200052e565b6000546001600160a01b03163314620001835760405162461bcd60e51b81526004016200017a9062000751565b60405180910390fd5b6001600160a01b038216600090815260016020526040902054829060ff16620001c05760405162461bcd60e51b81526004016200017a9062000786565b6040516331a6faf960e21b81526001600160a01b03838116600483015284169063c69bebe4906024015b600060405180830381600087803b1580156200020557600080fd5b505af11580156200021a573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b03163314620002505760405162461bcd60e51b81526004016200017a9062000751565b6200025c600062000649565b565b6000546001600160a01b031633146200028b5760405162461bcd60e51b81526004016200017a9062000751565b6001600160a01b038216600090815260016020526040902054829060ff16620002c85760405162461bcd60e51b81526004016200017a9062000786565b60405163508de5df60e01b8152600481018390526001600160a01b0384169063508de5df90602401620001ea565b6000546001600160a01b03163314620003235760405162461bcd60e51b81526004016200017a9062000751565b6001600160a01b038216600090815260016020526040902054829060ff16620003605760405162461bcd60e51b81526004016200017a9062000786565b60008211801562000372575061271082105b15620003a6576040516369fe0e2d60e01b8152600481018390526001600160a01b038416906369fe0e2d90602401620001ea565b60405162461bcd60e51b81526020600482015260136024820152721253959053125117d1915157d4115490d15395606a1b60448201526064016200017a565b6000546001600160a01b03163314620004125760405162461bcd60e51b81526004016200017a9062000751565b6001600160a01b038116620004795760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200017a565b620004848162000649565b50565b60008282604051620004999062000699565b6001600160a01b0390921682526020820152604001604051809103906000f080158015620004cb573d6000803e3d6000fd5b506001600160a01b038116600081815260016020818152604092839020805460ff1916909217909155905133815292935090917fe5211516932e9042c46c90d9b551b41d1e991bc87e19bd664dc7b48f5323eef1910160405180910390a2505050565b6000546001600160a01b031633146200055b5760405162461bcd60e51b81526004016200017a9062000751565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015620005a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005c99190620007bd565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb906044016020604051808303816000875af11580156200061d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006439190620007d7565b50505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6138b780620007fc83390190565b6001600160a01b03811681146200048457600080fd5b60008060408385031215620006d157600080fd5b8235620006de81620006a7565b91506020830135620006f081620006a7565b809150509250929050565b600080604083850312156200070f57600080fd5b82356200071c81620006a7565b946020939093013593505050565b6000602082840312156200073d57600080fd5b81356200074a81620006a7565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f4e6f74206f75722076657374696e6720636f6e74726163740000000000000000604082015260600190565b600060208284031215620007d057600080fd5b5051919050565b600060208284031215620007ea57600080fd5b815180151581146200074a57600080fdfe61010060405260006002553480156200001757600080fd5b50604051620038b7380380620038b78339810160408190526200003a9162000247565b3260008181526020818152604091829020805460ff1916600190811790915591519182528492917fe529461c8529abc0e0fe7c5ee361f74fe22e0b7574df1fc0b7558a282091fb78910160405180910390a2600180556001600160a01b038116620000dd5760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015260640160405180910390fd5b6001600160a01b03811660808190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa15801562000128573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014e919062000278565b60ff1660a052608051604051630b4c774160e11b81526001600160a01b03909116600482015273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4860248201526101f46044820152731f98431c8ad98523631ae4a59f267346ea31f98490631698ee8290606401602060405180830381865afa158015620001d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001f99190620002a4565b6001600160a01b031660c052503360e0819052600580546001600160a01b031916909117905560045550601e600655620002c4565b6001600160a01b03811681146200024457600080fd5b50565b600080604083850312156200025b57600080fd5b825162000268816200022e565b6020939093015192949293505050565b6000602082840312156200028b57600080fd5b815160ff811681146200029d57600080fd5b9392505050565b600060208284031215620002b757600080fd5b81516200029d816200022e565b60805160a05160c05160e0516135496200036e60003960008181610b4301528181610c89015261114a01526000818161022e01528181610a670152611bfa01526000818161033101528181610ad90152611ba30152600081816103db01528181610a960152818161123a015281816112fe0152818161149a01528181611a8101528181611c5701528181611c8f01528181611cd301528181611d350152611e0001526135496000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806373e78ca311610104578063a3bd607e116100a2578063d77836ce11610071578063d77836ce14610447578063e3d11ba01461045a578063e50373f914610475578063e865fbc71461048857600080fd5b8063a3bd607e146103fd578063b3f0067414610406578063bb09d9b714610419578063c69bebe41461043457600080fd5b80637e39c799116100de5780637e39c799146103a75780637fd6f15c146103ba5780639ca33f3e146103c35780639d76ea58146103d657600080fd5b806373e78ca314610379578063740943311461038c57806379b8d9381461039457600080fd5b80634b0bddd211610171578063508de5df1161014b578063508de5df146103195780635caed0291461032c57806361bac7921461035357806369fe0e2d1461036657600080fd5b80634b0bddd2146102ca5780634f7ed921146102dd5780634f8acca3146102f057600080fd5b806316f0115b116101ad57806316f0115b1461022957806324d7806c146102685780632e1a7d4d146102a45780634433444b146102b757600080fd5b80630f79ab39146101d4578063137c68fa146101fd57806316226e9014610214575b600080fd5b6101e76101e2366004612a39565b610490565b6040516101f49190612afe565b60405180910390f35b61020660025481565b6040519081526020016101f4565b610227610222366004612b6e565b6105c8565b005b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101f4565b610294610276366004612c12565b6001600160a01b031660009081526020819052604090205460ff1690565b60405190151581526020016101f4565b6102276102b2366004612c2f565b610603565b6102066102c5366004612a39565b610861565b6102276102d8366004612c56565b61098b565b6102066102eb366004612c8f565b610a5f565b6102066102fe366004612c12565b6001600160a01b031660009081526003602052604090205490565b610227610327366004612c2f565b610b38565b6102067f000000000000000000000000000000000000000000000000000000000000000081565b610206610361366004612cd2565b610b85565b610227610374366004612c2f565b610c7e565b610206610387366004612a39565b610ccb565b610206600681565b6102066103a2366004612a39565b610da1565b6102276103b5366004612a39565b610e89565b61020660045481565b6102276103d1366004612d10565b6110c6565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b61020660065481565b600554610250906001600160a01b031681565b61025073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b610227610442366004612c12565b61113f565b610227610455366004612c2f565b6111a9565b610250731f98431c8ad98523631ae4a59f267346ea31f98481565b610227610483366004612c12565b61129e565b610206611476565b6104986129d8565b6001600160a01b03831660009081526003602052604090205482106104f85760405162461bcd60e51b81526020600482015260116024820152701393d7d4d0d2115115531157d1561254d5607a1b60448201526064015b60405180910390fd5b6001600160a01b038316600090815260036020526040902080548390811061052257610522612d85565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b8204811695850195909552600160501b8104851692840192909252600160781b918290048416606084015260018101546080840152600281015460a0840152600301546001600160701b03811660c084015260ff600160701b820416151560e08401520490911661010082015290505b92915050565b3360009081526020819052604090205460ff166105f75760405162461bcd60e51b81526004016104ef90612d9b565b61060081611514565b50565b33600081815260036020526040902054829081106106335760405162461bcd60e51b81526004016104ef90612dca565b6001600160a01b038216600090815260036020526040812080548390811061065d5761065d612d85565b60009182526020909120600490910201805490915064ffffffffff166106955760405162461bcd60e51b81526004016104ef90612dca565b6003810154600160701b900460ff166106c05760405162461bcd60e51b81526004016104ef90612dca565b6002600154036106e25760405162461bcd60e51b81526004016104ef90612df3565b600260015533600090815260036020526040812080548690811061070857610708612d85565b90600052602060002090600402019050600061072b6107243390565b8742610b85565b90508160020154811180156107405750600081115b6107825760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016104ef565b60008260020154826107949190612e40565b9050600081116107dc5760405162461bcd60e51b81526020600482015260136024820152724e4f5448494e475f544f5f574954484452415760681b60448201526064016104ef565b808360020160008282546107f09190612e57565b9250508190555080600260008282546108099190612e40565b9091555061081990508188611b85565b604080518281526020810189905233917f987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a910160405180910390a25050600180555050505050565b6001600160a01b038216600090815260036020526040812080548291908490811061088e5761088e612d85565b90600052602060002090600402019050600081600301600e9054906101000a900460ff166108ce576003820154600160781b900464ffffffffff166108df565b8154600160281b900464ffffffffff165b60028301546040805161012081018252855464ffffffffff8082168352600160281b820481166020840152600160501b8204811693830193909352600160781b90819004831660608301526001870154608083015260a0820184905260038701546001600160701b03811660c084015260ff600160701b820416151560e084015204909116610100820152919250906109789083611ed2565b6109829190612e40565b95945050505050565b3360009081526020819052604090205460ff166109ba5760405162461bcd60e51b81526004016104ef90612d9b565b6001600160a01b038216610a025760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b60448201526064016104ef565b6001600160a01b03821660008181526020818152604091829020805460ff191685151590811790915591519182527fe529461c8529abc0e0fe7c5ee361f74fe22e0b7574df1fc0b7558a282091fb78910160405180910390a25050565b600080610a8c7f00000000000000000000000000000000000000000000000000000000000000008461200c565b509050610acf81857f000000000000000000000000000000000000000000000000000000000000000073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48612256565b915081610afd60067f0000000000000000000000000000000000000000000000000000000000000000612e40565b610b0890600a612f53565b610b13866064612f5f565b6001600160801b0316610b269190612f8e565b610b309190612fc3565b949350505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b805760405162461bcd60e51b81526004016104ef90612fd7565b600655565b6001600160a01b0383166000908152600360205260408120805482919085908110610bb257610bb2612d85565b6000918252602080832060408051610120810182526004909402909101805464ffffffffff8082168652600160281b8204811694860194909452600160501b8104841692850192909252600160781b918290048316606085015260018101546080850152600281015460a0850152600301546001600160701b03811660c085015260ff600160701b820416151560e08501819052919004909116610100830152909250610c6457816101000151610c66565b835b9050610c728282611ed2565b925050505b9392505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cc65760405162461bcd60e51b81526004016104ef90612fd7565b600455565b6001600160a01b0382166000908152600360205260408120805482919084908110610cf857610cf8612d85565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b82048116958501869052600160501b8204811693850193909352600160781b908190048316606085015260018201546080850152600282015460a08501526003909101546001600160701b03811660c085015260ff600160701b820416151560e085015204166101008201529150610b30908290611ed2565b6001600160a01b0382166000908152600360205260408120805482919084908110610dce57610dce612d85565b600091825260209182902060408051610120810182526004909302909101805464ffffffffff8082168552600160281b8204811695850195909552600160501b8104851692840192909252600160781b918290048416606084015260018101546080840152600281015460a084018190526003909101546001600160701b03811660c085015260ff600160701b820416151560e0850152919091049092166101008201529150610e7f858542610b85565b610b309190612e40565b3360009081526020819052604090205460ff16610eb85760405162461bcd60e51b81526004016104ef90612d9b565b6001600160a01b038216600090815260036020526040902054829082908110610ef35760405162461bcd60e51b81526004016104ef90612dca565b6001600160a01b0382166000908152600360205260408120805483908110610f1d57610f1d612d85565b60009182526020909120600490910201805490915064ffffffffff16610f555760405162461bcd60e51b81526004016104ef90612dca565b6003810154600160701b900460ff16610f805760405162461bcd60e51b81526004016104ef90612dca565b6001600160a01b0385166000908152600360205260408120805486908110610faa57610faa612d85565b906000526020600020906004020190506000610fc68787610ccb565b9050808260020154106110105760405162461bcd60e51b81526020600482015260126024820152711393d7d553959154d5115117d05353d5539560721b60448201526064016104ef565b60038201805464ffffffffff42908116600160781b0265ffffffffffff60701b199092169190911790915560009061104b9089908990610b85565b905060006110598284612e40565b9050806002600082825461106d9190612e40565b92505081905550886001600160a01b03167fed9a46e9df4b25f99c63227fd4e73032724c681b95d0dd076fc004ff6cdf47a78242878c6040516110b39493929190612ffc565b60405180910390a2505050505050505050565b3360009081526020819052604090205460ff166110f55760405162461bcd60e51b81526004016104ef90612d9b565b8060005b818110156111395761113184848381811061111657611116612d85565b905060e0020180360381019061112c9190612b6e565b611514565b6001016110f9565b50505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111875760405162461bcd60e51b81526004016104ef90612fd7565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526020819052604090205460ff166111d85760405162461bcd60e51b81526004016104ef90612d9b565b6002600154036111fa5760405162461bcd60e51b81526004016104ef90612df3565b60026001556000611209611476565b90508181101561122b5760405162461bcd60e51b81526004016104ef906130a4565b611261335b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169084612364565b60405182815233907fca1cf43de312865665f595e88f569f9d5246690c07df26e86aba01147e6d13149060200160405180910390a2505060018055565b3360009081526020819052604090205460ff166112cd5760405162461bcd60e51b81526004016104ef90612d9b565b6002600154036112ef5760405162461bcd60e51b81526004016104ef90612df3565b60026001556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169082160361135f5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22faa27a5a2a760991b60448201526064016104ef565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156113a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ca91906130d2565b9050600081116113ec5760405162461bcd60e51b81526004016104ef906130a4565b6001600160a01b03821663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af1158015611449573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146d91906130eb565b50506001805550565b6002546040516370a0823160e01b8152306004820152600091906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156114e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150591906130d2565b61150f9190612e40565b905090565b60c08101516001600160a01b03166115605760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b60448201526064016104ef565b60008160a0015182608001516115769190612e57565b116115bb5760405162461bcd60e51b81526020600482015260156024820152741253959053125117d59154d5115117d05353d55395605a1b60448201526064016104ef565b805164ffffffffff166116105760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f53544152545f54494d455354414d5000000000000000000060448201526064016104ef565b806020015164ffffffffff16816000015164ffffffffff161061166d5760405162461bcd60e51b81526020600482015260156024820152740494e56414c49445f454e445f54494d455354414d5605c1b60448201526064016104ef565b6000816060015164ffffffffff16116116c85760405162461bcd60e51b815260206004820152601860248201527f494e56414c49445f52454c454153455f494e54455256414c000000000000000060448201526064016104ef565b6060810151815160208301516116de9190613108565b6116e8919061312e565b64ffffffffff161561173c5760405162461bcd60e51b815260206004820152601760248201527f494e56414c49445f494e54455256414c5f4c454e47544800000000000000000060448201526064016104ef565b6000816040015164ffffffffff1611801561175b575060008160a00151115b801561177d5750806000015164ffffffffff16816040015164ffffffffff1611155b8061179e5750604081015164ffffffffff1615801561179e575060a0810151155b6117da5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa1a624a32360991b60448201526064016104ef565b6117e26129d8565b8160000151816000019064ffffffffff16908164ffffffffff16815250508160200151816020019064ffffffffff16908164ffffffffff1681525050600081610100019064ffffffffff16908164ffffffffff16815250508160400151816040019064ffffffffff16908164ffffffffff16815250508160600151816060019064ffffffffff16908164ffffffffff168152505081608001518160800181815250508160a001518160c001906001600160701b031690816001600160701b03168152505060008160a001818152505060018160e0019015159081151581525050600360008360c001516001600160a01b03166001600160a01b0316815260200190815260200160002081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548164ffffffffff021916908364ffffffffff16021790555060208201518160000160056101000a81548164ffffffffff021916908364ffffffffff160217905550604082015181600001600a6101000a81548164ffffffffff021916908364ffffffffff160217905550606082015181600001600f6101000a81548164ffffffffff021916908364ffffffffff1602179055506080820151816001015560a0820151816002015560c08201518160030160006101000a8154816001600160701b0302191690836001600160701b0316021790555060e082015181600301600e6101000a81548160ff02191690831515021790555061010082015181600301600f6101000a81548164ffffffffff021916908364ffffffffff1602179055505050600082608001518360a00151611a5c9190612e57565b905080600254611a6c9190612e57565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ad0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611af491906130d2565b1015611b125760405162461bcd60e51b81526004016104ef906130a4565b8060026000828254611b249190612e57565b909155505060c08301516001600160a01b0316600081815260036020526040908190205490517f4abbdf6199174a0d2f115731aab0bb048ec6357c2b36f0fec6687f92b4c675e091611b7891869190613152565b60405180910390a2505050565b60045415611ec5576000611b98836123cc565b90506000611bc760067f0000000000000000000000000000000000000000000000000000000000000000612e40565b611bd290600a612f53565b606460065484611be29190612f8e565b611bec9190612fc3565b611bf69190612fc3565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031615611dfb576000611c3485600a610a5f565b90506006548110611d3057611c7e33611c4d8588612e40565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612364565b600554611cb8906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911685612364565b60055460408051858152602081018790526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116928201929092529116907fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49060600160405180910390a2611df5565b611d647f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163387612364565b600554611d929073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489033906001600160a01b0316856123f5565b600554604080518481526020810187905273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb488183015290516001600160a01b03909216917fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49181900360600190a25b50611139565b611e2f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163386612364565b600554611e5d9073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489033906001600160a01b0316846123f5565b600554604080518381526020810186905273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb488183015290516001600160a01b03909216917fa3f0e6be441aebd3eebd7f117fa7b226a1f713ddedf3d17c61a4b3176f67bbc49181900360600190a250505050565b611ece33611230565b5050565b60008260e00151158015611ef0575061010083015164ffffffffff16155b15611efd575060006105c2565b6000836020015164ffffffffff168364ffffffffff161115611f3e578360c001516001600160701b03168460800151611f369190612e57565b9150506105c2565b836040015164ffffffffff168364ffffffffff1610611f67575060c08301516001600160701b03165b836000015164ffffffffff168364ffffffffff161115610c77578351600090611f909085613108565b6060860151909150600090611fa5818461316f565b611faf9190613193565b9050600086600001518760200151611fc79190613108565b905060008164ffffffffff168364ffffffffff168960800151611fea9190612f8e565b611ff49190612fc3565b90506120008186612e57565b98975050505050505050565b6000808263ffffffff1660000361204a5760405162461bcd60e51b8152602060048201526002602482015261042560f41b60448201526064016104ef565b604080516002808252606082018352600092602083019080368337019050509050838160008151811061207f5761207f612d85565b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106120ae576120ae612d85565b602002602001019063ffffffff16908163ffffffff1681525050600080866001600160a01b031663883bdbfd846040518263ffffffff1660e01b81526004016120f791906131b7565b600060405180830381865afa158015612114573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261213c9190810190613299565b9150915060008260008151811061215557612155612d85565b60200260200101518360018151811061217057612170612d85565b60200260200101516121829190613365565b905060008260008151811061219957612199612d85565b6020026020010151836001815181106121b4576121b4612d85565b60200260200101516121c691906133b5565b90506121d863ffffffff8916836133d5565b965060008260060b1280156121fe57506121f863ffffffff891683613413565b60060b15155b15612211578661220d81613435565b9750505b600061222a6001600160a01b0363ffffffff8b16613458565b9050612247640100000000600160c01b03602084901b168261347e565b96505050505050509250929050565b6000806122628661242d565b90506001600160801b036001600160a01b038216116122e85760006122906001600160a01b03831680612f8e565b9050836001600160a01b0316856001600160a01b0316106122c8576122c3600160c01b876001600160801b031683612750565b6122e0565b6122e081876001600160801b0316600160c01b612750565b92505061235b565b60006123076001600160a01b0383168068010000000000000000612750565b9050836001600160a01b0316856001600160a01b03161061233f5761233a600160801b876001600160801b031683612750565b612357565b61235781876001600160801b0316600160801b612750565b9250505b50949350505050565b6040516001600160a01b0383166024820152604481018290526123c790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612802565b505050565b6000612710600454836123df9190612f8e565b6123eb9061270f612e57565b6105c29190612fc3565b6040516001600160a01b03808516602483015283166044820152606481018290526111399085906323b872dd60e01b90608401612390565b60008060008360020b12612444578260020b61244c565b8260020b6000035b9050620d89e8811115612472576040516315e4079d60e11b815260040160405180910390fd5b60008160011660000361248957600160801b61249b565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156124cf576ffff97272373d413259a46990580e213a0260801c5b60048216156124ee576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561250d576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b601082161561252c576fffcb9843d60f6159c9db58835c9266440260801c5b602082161561254b576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561256a576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615612589576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156125a9576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156125c9576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156125e9576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615612609576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615612629576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615612649576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615612669576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615612689576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156126aa576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156126ca576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156126e9576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615612706576b048a170391f7dc42444e8fa20260801c5b60008460020b131561272757806000198161272357612723612fad565b0490505b64010000000081061561273b57600161273e565b60005b60ff16602082901c0192505050919050565b6000808060001985870985870292508281108382030391505080600003612789576000841161277e57600080fd5b508290049050610c77565b80841161279557600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000612857826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166128d49092919063ffffffff16565b8051909150156123c7578080602001905181019061287591906130eb565b6123c75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104ef565b6060610b308484600085856001600160a01b0385163b6129365760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104ef565b600080866001600160a01b0316858760405161295291906134c4565b60006040518083038185875af1925050503d806000811461298f576040519150601f19603f3d011682016040523d82523d6000602084013e612994565b606091505b5091509150612357828286606083156129ae575081610c77565b8251156129be5782518084602001fd5b8160405162461bcd60e51b81526004016104ef91906134e0565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b6001600160a01b038116811461060057600080fd5b60008060408385031215612a4c57600080fd5b8235612a5781612a24565b946020939093013593505050565b64ffffffffff808251168352806020830151166020840152806040830151166040840152506060810151612aa2606084018264ffffffffff169052565b506080810151608083015260a081015160a083015260c0810151612ad160c08401826001600160701b03169052565b5060e0810151612ae560e084018215159052565b506101008181015164ffffffffff811684830152611139565b61012081016105c28284612a65565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612b4c57612b4c612b0d565b604052919050565b803564ffffffffff81168114612b6957600080fd5b919050565b600060e08284031215612b8057600080fd5b60405160e0810181811067ffffffffffffffff82111715612ba357612ba3612b0d565b604052612baf83612b54565b8152612bbd60208401612b54565b6020820152612bce60408401612b54565b6040820152612bdf60608401612b54565b60608201526080830135608082015260a083013560a082015260c0830135612c0681612a24565b60c08201529392505050565b600060208284031215612c2457600080fd5b8135610c7781612a24565b600060208284031215612c4157600080fd5b5035919050565b801515811461060057600080fd5b60008060408385031215612c6957600080fd5b8235612c7481612a24565b91506020830135612c8481612c48565b809150509250929050565b60008060408385031215612ca257600080fd5b82356001600160801b0381168114612cb957600080fd5b9150602083013563ffffffff81168114612c8457600080fd5b600080600060608486031215612ce757600080fd5b8335612cf281612a24565b925060208401359150612d0760408501612b54565b90509250925092565b60008060208385031215612d2357600080fd5b823567ffffffffffffffff80821115612d3b57600080fd5b818501915085601f830112612d4f57600080fd5b813581811115612d5e57600080fd5b86602060e083028501011115612d7357600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052603260045260246000fd5b602080825260159082015274105113525397d050d0d154d4d7d491545552549151605a1b604082015260600190565b6020808252600f908201526e4e4f5f4143544956455f434c41494d60881b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015612e5257612e52612e2a565b500390565b60008219821115612e6a57612e6a612e2a565b500190565b600181815b80851115612eaa578160001904821115612e9057612e90612e2a565b80851615612e9d57918102915b93841c9390800290612e74565b509250929050565b600082612ec1575060016105c2565b81612ece575060006105c2565b8160018114612ee45760028114612eee57612f0a565b60019150506105c2565b60ff841115612eff57612eff612e2a565b50506001821b6105c2565b5060208310610133831016604e8410600b8410161715612f2d575081810a6105c2565b612f378383612e6f565b8060001904821115612f4b57612f4b612e2a565b029392505050565b6000610c778383612eb2565b60006001600160801b0380831681851681830481118215151615612f8557612f85612e2a565b02949350505050565b6000816000190483118215151615612fa857612fa8612e2a565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612fd257612fd2612fad565b500490565b6020808252600b908201526a4e6f7420466163746f727960a81b604082015260600190565b84815264ffffffffff848116602083015283548082166040840152602881901c82166060840152605081901c8216608084015260781c811660a0830152600184015460c0830152600284015460e083015260038401546001600160701b038116610100840152607081901c60ff161515610120840152610180830191906130926101408501838360781c1664ffffffffff169052565b50508261016083015295945050505050565b602080825260149082015273494e53554646494349454e545f42414c414e434560601b604082015260600190565b6000602082840312156130e457600080fd5b5051919050565b6000602082840312156130fd57600080fd5b8151610c7781612c48565b600064ffffffffff8381169083168181101561312657613126612e2a565b039392505050565b600064ffffffffff8084168061314657613146612fad565b92169190910692915050565b61014081016131618285612a65565b826101208301529392505050565b600064ffffffffff8084168061318757613187612fad565b92169190910492915050565b600064ffffffffff80831681851681830481118215151615612f8557612f85612e2a565b6020808252825182820181905260009190848201906040850190845b818110156131f557835163ffffffff16835292840192918401916001016131d3565b50909695505050505050565b600067ffffffffffffffff82111561321b5761321b612b0d565b5060051b60200190565b600082601f83011261323657600080fd5b8151602061324b61324683613201565b612b23565b82815260059290921b8401810191818101908684111561326a57600080fd5b8286015b8481101561328e57805161328181612a24565b835291830191830161326e565b509695505050505050565b600080604083850312156132ac57600080fd5b825167ffffffffffffffff808211156132c457600080fd5b818501915085601f8301126132d857600080fd5b815160206132e861324683613201565b82815260059290921b8401810191818101908984111561330757600080fd5b948201945b838610156133355785518060060b81146133265760008081fd5b8252948201949082019061330c565b9188015191965090935050508082111561334e57600080fd5b5061335b85828601613225565b9150509250929050565b60008160060b8360060b6000811281667fffffffffffff190183128115161561339057613390612e2a565b81667fffffffffffff0183138116156133ab576133ab612e2a565b5090039392505050565b60006001600160a01b038381169083168181101561312657613126612e2a565b60008160060b8360060b806133ec576133ec612fad565b667fffffffffffff1982146000198214161561340a5761340a612e2a565b90059392505050565b60008260060b8061342657613426612fad565b808360060b0791505092915050565b60008160020b627fffff19810361344e5761344e612e2a565b6000190192915050565b60006001600160c01b0382811684821681151582840482111615612f8557612f85612e2a565b60006001600160c01b038381168061318757613187612fad565b60005b838110156134b357818101518382015260200161349b565b838111156111395750506000910152565b600082516134d6818460208701613498565b9190910192915050565b60208152600082518060208401526134ff816040850160208701613498565b601f01601f1916919091016040019291505056fea26469706673582212201af4f661d4927f835990a3566047c77642a08abc74af656d1a2b1163c781c3e264736f6c634300080e0033a2646970667358221220889a58c49e711f7f16fc647261670e52d8e7fff287787a6f65b450148a4aad9664736f6c634300080e0033";

type VTVLVestingFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VTVLVestingFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VTVLVestingFactory__factory extends ContractFactory {
  constructor(...args: VTVLVestingFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<VTVLVestingFactory> {
    return super.deploy(overrides || {}) as Promise<VTVLVestingFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VTVLVestingFactory {
    return super.attach(address) as VTVLVestingFactory;
  }
  override connect(signer: Signer): VTVLVestingFactory__factory {
    return super.connect(signer) as VTVLVestingFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VTVLVestingFactoryInterface {
    return new utils.Interface(_abi) as VTVLVestingFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VTVLVestingFactory {
    return new Contract(address, _abi, signerOrProvider) as VTVLVestingFactory;
  }
}
