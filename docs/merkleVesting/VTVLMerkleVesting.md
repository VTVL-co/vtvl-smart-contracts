# VTVLMerkleVesting









## Methods

### amountAvailableToWithdrawByAdmin

```solidity
function amountAvailableToWithdrawByAdmin() external view returns (uint256)
```

Get amount that is not vested in contract

*Whenever vesting is revoked, this amount will be increased.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimableAmount

```solidity
function claimableAmount(ClaimInput _claimInput) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### feePercent

```solidity
function feePercent() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### feeReceiver

```solidity
function feeReceiver() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### finalClaimableAmount

```solidity
function finalClaimableAmount(ClaimInput _claimInput) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### finalVestedAmount

```solidity
function finalVestedAmount(ClaimInput _claimInput) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getClaim

```solidity
function getClaim(address _recipient, uint256 _scheduleIndex) external view returns (struct VTVLMerkleVesting.Claim)
```

Basic getter for a claim. 

*Could be using public claims var, but this is cleaner in terms of naming. (getClaim(address) as opposed to claims(address)). *

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | - the address for which we fetch the claim. |
| _scheduleIndex | uint256 | - the index of the schedules. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | VTVLMerkleVesting.Claim | undefined |

### getLeaf

```solidity
function getLeaf(ClaimInput _claimInput) external pure returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### isRevoked

```solidity
function isRevoked(address _recipient, uint256 _scheduleIndex) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |
| _scheduleIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### revokeClaim

```solidity
function revokeClaim(ClaimInput _claimInput, bytes32[] proof) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |
| proof | bytes32[] | undefined |

### setFee

```solidity
function setFee(uint256 _feePercent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _feePercent | uint256 | undefined |

### setMerkleRoot

```solidity
function setMerkleRoot(bytes32 _root) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _root | bytes32 | undefined |

### tokenAddress

```solidity
function tokenAddress() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### totalWithdrawnAmount

```solidity
function totalWithdrawnAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### updateFeeReceiver

```solidity
function updateFeeReceiver(address _newReceiver) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newReceiver | address | undefined |

### updateconversionThreshold

```solidity
function updateconversionThreshold(uint256 _threshold) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _threshold | uint256 | undefined |

### verify

```solidity
function verify(bytes32[] proof, bytes32 leaf) external view
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proof | bytes32[] | undefined |
| leaf | bytes32 | undefined |

### vestedAmount

```solidity
function vestedAmount(ClaimInput _claimInput, uint40 _referenceTs) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |
| _referenceTs | uint40 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw(ClaimInput _claimInput, bytes32[] proof) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimInput | ClaimInput | undefined |
| proof | bytes32[] | undefined |

### withdrawAdmin

```solidity
function withdrawAdmin(uint256 _amountRequested) external nonpayable
```

Admin withdrawal of the unallocated tokens.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _amountRequested | uint256 | - the amount that we want to withdraw |

### withdrawOtherToken

```solidity
function withdrawOtherToken(contract IERC20 _otherTokenAddress) external nonpayable
```

Withdraw a token which isn&#39;t controlled by the vesting contract.

*This contract controls/vests token at &quot;tokenAddress&quot;. However, someone might send a different token.  To make sure these don&#39;t get accidentally trapped, give admin the ability to withdraw them (to their own address). Note that the token to be withdrawn can&#39;t be the one at &quot;tokenAddress&quot;.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _otherTokenAddress | contract IERC20 | - the token which we want to withdraw |



## Events

### AdminWithdrawn

```solidity
event AdminWithdrawn(address indexed _recipient, uint256 _amountRequested)
```

Emitted when admin withdraws.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _amountRequested  | uint256 | undefined |

### ClaimRevoked

```solidity
event ClaimRevoked(address indexed _recipient, uint256 _numTokensWithheld, uint256 revocationTimestamp, ClaimInput _claimInput, uint256 _scheduleIndex)
```

Emitted when a claim is revoked



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _numTokensWithheld  | uint256 | undefined |
| revocationTimestamp  | uint256 | undefined |
| _claimInput  | ClaimInput | undefined |
| _scheduleIndex  | uint256 | undefined |

### Claimed

```solidity
event Claimed(address indexed _recipient, uint256 _withdrawalAmount, uint256 _scheduleIndex)
```

Emitted when someone withdraws a vested amount



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _withdrawalAmount  | uint256 | undefined |
| _scheduleIndex  | uint256 | undefined |

### FeeReceived

```solidity
event FeeReceived(address indexed _recipient, uint256 _feeAmount, uint256 _scheduleIndex, address _tokenAddress)
```

Emitted when receiving the fee.

*_tokenAddress may be vesting token address or USDC address depending on the token price.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _feeAmount  | uint256 | undefined |
| _scheduleIndex  | uint256 | undefined |
| _tokenAddress  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



