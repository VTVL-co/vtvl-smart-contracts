# VTVLVesting









## Methods

### allVestingRecipients

```solidity
function allVestingRecipients() external view returns (address[])
```

Return all the addresses that have vesting schedules attached.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

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
function claimableAmount(address _recipient, uint256 _scheduleIndex) external view returns (uint256)
```

Calculates how much can we claim, by subtracting the already withdrawn amount from the vestedAmount at this moment.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | - The address for whom we&#39;re calculating |
| _scheduleIndex | uint256 | - The index of the vesting schedules of the recipient. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### createClaim

```solidity
function createClaim(ClaimInput claimInput) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| claimInput | ClaimInput | undefined |

### createClaimsBatch

```solidity
function createClaimsBatch(ClaimInput[] claimInputs) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| claimInputs | ClaimInput[] | undefined |

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
function finalClaimableAmount(address _recipient, uint256 _scheduleIndex) external view returns (uint256)
```

Calculates how much wil be possible to claim at the end of vesting date, by subtracting the already withdrawn amount from the vestedAmount at this moment. Vesting date is either the end timestamp or the deactivation timestamp.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | - The address for whom we&#39;re calculating |
| _scheduleIndex | uint256 | - The index of the vesting schedules of the recipient. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### finalVestedAmount

```solidity
function finalVestedAmount(address _recipient, uint256 _scheduleIndex) external view returns (uint256)
```

Calculate the total vested at the end of the schedule, by simply feeding in the end timestamp to the function above.

*This fn is somewhat superfluous, should probably be removed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | - The address for whom we&#39;re calculating |
| _scheduleIndex | uint256 | - The index of the vesting schedules of the recipient. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getClaim

```solidity
function getClaim(address _recipient, uint256 _scheduleIndex) external view returns (struct VTVLVesting.Claim)
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
| _0 | VTVLVesting.Claim | undefined |

### getNumberOfVestings

```solidity
function getNumberOfVestings(address _recipient) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### numTokensReservedForVesting

```solidity
function numTokensReservedForVesting() external view returns (uint256)
```

How many tokens are already allocated to vesting schedules.

*Our balance of the token must always be greater than this amount. Otherwise we risk some users not getting their shares. This gets reduced as the users are paid out or when their schedules are revoked (as it is not reserved any more). In other words, this represents the amount the contract is scheduled to pay out at some point if the  owner were to never interact with the contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### numVestingRecipients

```solidity
function numVestingRecipients() external view returns (uint256)
```

Get the total number of vesting recipients.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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
function revokeClaim(address _recipient, uint256 _scheduleIndex) external nonpayable
```

Allow an Owner to revoke a claim that is already active.

*The requirement is that a claim exists and that it&#39;s active.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |
| _scheduleIndex | uint256 | - The index of the vesting schedules of the recipient. |

### setFee

```solidity
function setFee(uint256 _feePercent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _feePercent | uint256 | undefined |

### tokenAddress

```solidity
function tokenAddress() external view returns (contract IERC20)
```

Address of the token that we&#39;re vesting




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

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

### vestedAmount

```solidity
function vestedAmount(address _recipient, uint256 _scheduleIndex, uint40 _referenceTs) external view returns (uint256)
```

Calculate the amount vested for a given _recipient at a reference timestamp.

*Simply call the _baseVestedAmount for the claim in question*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | - The address for whom we&#39;re calculating |
| _scheduleIndex | uint256 | - The index of the vesting schedules of the recipient. |
| _referenceTs | uint40 | - The timestamp at which we want to calculate the vested amount. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw(uint256 _scheduleIndex) external nonpayable
```

Withdraw the full claimable balance.

*hasActiveClaim throws off anyone without a claim.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _scheduleIndex | uint256 | - The index of the vesting schedules of the recipient. |

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

### ClaimCreated

```solidity
event ClaimCreated(address indexed _recipient, VTVLVesting.Claim _claim, uint256 _scheduleIndex)
```

Emitted when a founder adds a vesting schedule.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _claim  | VTVLVesting.Claim | undefined |
| _scheduleIndex  | uint256 | undefined |

### ClaimRevoked

```solidity
event ClaimRevoked(address indexed _recipient, uint256 _numTokensWithheld, uint256 revocationTimestamp, VTVLVesting.Claim _claim, uint256 _scheduleIndex)
```

Emitted when a claim is revoked



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _numTokensWithheld  | uint256 | undefined |
| revocationTimestamp  | uint256 | undefined |
| _claim  | VTVLVesting.Claim | undefined |
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



