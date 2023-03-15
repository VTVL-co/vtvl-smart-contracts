# VTVLVestingFactory



> Vesting Factory contract

Create Vesting contract



## Methods

### createVestingContract

```solidity
function createVestingContract(contract IERC20 _tokenAddress) external nonpayable
```

Create Vesting contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | contract IERC20 | Vesting Fund token address |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### CreateVestingContract

```solidity
event CreateVestingContract(address indexed vestingAddress, address deployer)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| vestingAddress `indexed` | address | undefined |
| deployer  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



