// Sources flattened with hardhat v2.14.1 https://hardhat.org

// File @openzeppelin/contracts/utils/Context.sol@v4.9.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

// File @openzeppelin/contracts/access/Ownable.sol@v4.9.0

// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: new owner is the zero address"
        );
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.9.0

// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

// File @openzeppelin/contracts/interfaces/IERC20.sol@v4.9.0

// OpenZeppelin Contracts v4.4.1 (interfaces/IERC20.sol)

pragma solidity ^0.8.0;

// File @openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol@v4.9.0

// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/extensions/IERC20Permit.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in
 * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].
 *
 * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by
 * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't
 * need to send a transaction, and thus is not required to hold Ether at all.
 */
interface IERC20Permit {
    /**
     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,
     * given ``owner``'s signed approval.
     *
     * IMPORTANT: The same issues {IERC20-approve} has related to transaction
     * ordering also apply here.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `deadline` must be a timestamp in the future.
     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`
     * over the EIP712-formatted function arguments.
     * - the signature must use ``owner``'s current nonce (see {nonces}).
     *
     * For more information on the signature format, see the
     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP
     * section].
     */
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    /**
     * @dev Returns the current nonce for `owner`. This value must be
     * included whenever a signature is generated for {permit}.
     *
     * Every successful call to {permit} increases ``owner``'s nonce by one. This
     * prevents a signature from being used multiple times.
     */
    function nonces(address owner) external view returns (uint256);

    /**
     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.
     */
    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() external view returns (bytes32);
}

// File @openzeppelin/contracts/utils/Address.sol@v4.9.0

// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)

pragma solidity ^0.8.1;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     *
     * Furthermore, `isContract` will also return true if the target contract within
     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,
     * which only has an effect at the end of a transaction.
     * ====
     *
     * [IMPORTANT]
     * ====
     * You shouldn't rely on `isContract` to protect against flash loan attacks!
     *
     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
     * constructor.
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize/address.code.length, which returns 0
        // for contracts in construction, since the code is only stored at the end
        // of the constructor execution.

        return account.code.length > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(
            address(this).balance >= amount,
            "Address: insufficient balance"
        );

        (bool success, ) = recipient.call{value: amount}("");
        require(
            success,
            "Address: unable to send value, recipient may have reverted"
        );
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain `call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data
    ) internal returns (bytes memory) {
        return
            functionCallWithValue(
                target,
                data,
                0,
                "Address: low-level call failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        return
            functionCallWithValue(
                target,
                data,
                value,
                "Address: low-level call with value failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(
            address(this).balance >= value,
            "Address: insufficient balance for call"
        );
        (bool success, bytes memory returndata) = target.call{value: value}(
            data
        );
        return
            verifyCallResultFromTarget(
                target,
                success,
                returndata,
                errorMessage
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data
    ) internal view returns (bytes memory) {
        return
            functionStaticCall(
                target,
                data,
                "Address: low-level static call failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        (bool success, bytes memory returndata) = target.staticcall(data);
        return
            verifyCallResultFromTarget(
                target,
                success,
                returndata,
                errorMessage
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data
    ) internal returns (bytes memory) {
        return
            functionDelegateCall(
                target,
                data,
                "Address: low-level delegate call failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        (bool success, bytes memory returndata) = target.delegatecall(data);
        return
            verifyCallResultFromTarget(
                target,
                success,
                returndata,
                errorMessage
            );
    }

    /**
     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling
     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.
     *
     * _Available since v4.8._
     */
    function verifyCallResultFromTarget(
        address target,
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        if (success) {
            if (returndata.length == 0) {
                // only check isContract if the call was successful and the return data is empty
                // otherwise we already know that it was a contract
                require(isContract(target), "Address: call to non-contract");
            }
            return returndata;
        } else {
            _revert(returndata, errorMessage);
        }
    }

    /**
     * @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the
     * revert reason or using the provided one.
     *
     * _Available since v4.3._
     */
    function verifyCallResult(
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal pure returns (bytes memory) {
        if (success) {
            return returndata;
        } else {
            _revert(returndata, errorMessage);
        }
    }

    function _revert(
        bytes memory returndata,
        string memory errorMessage
    ) private pure {
        // Look for revert reason and bubble it up if present
        if (returndata.length > 0) {
            // The easiest way to bubble the revert reason is using memory via assembly
            /// @solidity memory-safe-assembly
            assembly {
                let returndata_size := mload(returndata)
                revert(add(32, returndata), returndata_size)
            }
        } else {
            revert(errorMessage);
        }
    }
}

// File @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol@v4.9.0

// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/utils/SafeERC20.sol)

pragma solidity ^0.8.0;

/**
 * @title SafeERC20
 * @dev Wrappers around ERC20 operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeERC20 {
    using Address for address;

    /**
     * @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,
     * non-reverting calls are assumed to be successful.
     */
    function safeTransfer(IERC20 token, address to, uint256 value) internal {
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(token.transfer.selector, to, value)
        );
    }

    /**
     * @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the
     * calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.
     */
    function safeTransferFrom(
        IERC20 token,
        address from,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(token.transferFrom.selector, from, to, value)
        );
    }

    /**
     * @dev Deprecated. This function has issues similar to the ones found in
     * {IERC20-approve}, and its usage is discouraged.
     *
     * Whenever possible, use {safeIncreaseAllowance} and
     * {safeDecreaseAllowance} instead.
     */
    function safeApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        require(
            (value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(token.approve.selector, spender, value)
        );
    }

    /**
     * @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,
     * non-reverting calls are assumed to be successful.
     */
    function safeIncreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        uint256 oldAllowance = token.allowance(address(this), spender);
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(
                token.approve.selector,
                spender,
                oldAllowance + value
            )
        );
    }

    /**
     * @dev Decrease the calling contract's allowance toward `spender` by `value`. If `token` returns no value,
     * non-reverting calls are assumed to be successful.
     */
    function safeDecreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        unchecked {
            uint256 oldAllowance = token.allowance(address(this), spender);
            require(
                oldAllowance >= value,
                "SafeERC20: decreased allowance below zero"
            );
            _callOptionalReturn(
                token,
                abi.encodeWithSelector(
                    token.approve.selector,
                    spender,
                    oldAllowance - value
                )
            );
        }
    }

    /**
     * @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,
     * non-reverting calls are assumed to be successful. Compatible with tokens that require the approval to be set to
     * 0 before setting it to a non-zero value.
     */
    function forceApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        bytes memory approvalCall = abi.encodeWithSelector(
            token.approve.selector,
            spender,
            value
        );

        if (!_callOptionalReturnBool(token, approvalCall)) {
            _callOptionalReturn(
                token,
                abi.encodeWithSelector(token.approve.selector, spender, 0)
            );
            _callOptionalReturn(token, approvalCall);
        }
    }

    /**
     * @dev Use a ERC-2612 signature to set the `owner` approval toward `spender` on `token`.
     * Revert on invalid signature.
     */
    function safePermit(
        IERC20Permit token,
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal {
        uint256 nonceBefore = token.nonces(owner);
        token.permit(owner, spender, value, deadline, v, r, s);
        uint256 nonceAfter = token.nonces(owner);
        require(
            nonceAfter == nonceBefore + 1,
            "SafeERC20: permit did not succeed"
        );
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     */
    function _callOptionalReturn(IERC20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address-functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(
            data,
            "SafeERC20: low-level call failed"
        );
        require(
            returndata.length == 0 || abi.decode(returndata, (bool)),
            "SafeERC20: ERC20 operation did not succeed"
        );
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     *
     * This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.
     */
    function _callOptionalReturnBool(
        IERC20 token,
        bytes memory data
    ) private returns (bool) {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We cannot use {Address-functionCall} here since this should return false
        // and not revert is the subcall reverts.

        (bool success, bytes memory returndata) = address(token).call(data);
        return
            success &&
            (returndata.length == 0 || abi.decode(returndata, (bool))) &&
            Address.isContract(address(token));
    }
}

// File @openzeppelin/contracts/security/ReentrancyGuard.sol@v4.9.0

// OpenZeppelin Contracts (last updated v4.9.0) (security/ReentrancyGuard.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be _NOT_ENTERED
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Returns true if the reentrancy guard is currently set to "entered", which indicates there is a
     * `nonReentrant` function in the call stack.
     */
    function _reentrancyGuardEntered() internal view returns (bool) {
        return _status == _ENTERED;
    }
}

// File contracts/IVestingFee.sol

pragma solidity 0.8.14;

interface IVestingFee {
    function setFee(uint256 _feePercent) external;

    function updateFeeReceiver(address _newReceiver) external;

    // function updateconversionThreshold(uint256 _threshold) external;
}

// File contracts/VTVLVesting.sol

pragma solidity 0.8.14;

struct ClaimInput {
    uint40 startTimestamp; // When does the vesting start (40 bits is enough for TS)
    uint40 endTimestamp; // When does the vesting end - the vesting goes linearly between the start and end timestamps
    uint40 cliffReleaseTimestamp; // At which timestamp is the cliffAmount released. This must be <= startTimestamp
    uint40 releaseIntervalSecs; // Every how many seconds does the vested amount increase.
    // uint112 range: range 0 ΓÇô     5,192,296,858,534,827,628,530,496,329,220,095.
    // uint112 range: range 0 ΓÇô                             5,192,296,858,534,827.
    uint256 linearVestAmount; // total entitlement
    uint256 cliffAmount; // how much is released at the cliff
    address recipient; // the recipient address
}

contract VTVLVesting is Ownable, ReentrancyGuard, IVestingFee {
    using SafeERC20 for IERC20;

    /**
    @notice How many tokens are already allocated to vesting schedules.
    @dev Our balance of the token must always be greater than this amount.
    * Otherwise we risk some users not getting their shares.
    * This gets reduced as the users are paid out or when their schedules are revoked (as it is not reserved any more).
    * In other words, this represents the amount the contract is scheduled to pay out at some point if the 
    * owner were to never interact with the contract.
    */
    uint256 public numTokensReservedForVesting = 0;

    /**
    @notice A structure representing a single claim - supporting linear and cliff vesting.
     */
    struct Claim {
        // Using 40 bits for timestamp (seconds)
        // Gives us a range from 1 Jan 1970 (Unix epoch) up to approximately 35 thousand years from then (2^40 / (365 * 24 * 60 * 60) ~= 35k)
        uint40 startTimestamp; // When does the vesting start (40 bits is enough for TS)
        uint40 endTimestamp; // When does the vesting end - the vesting goes linearly between the start and end timestamps
        uint40 cliffReleaseTimestamp; // At which timestamp is the cliffAmount released. This must be <= startTimestamp
        uint40 releaseIntervalSecs; // Every how many seconds does the vested amount increase.
        // uint112 range: range 0 ΓÇô     5,192,296,858,534,827,628,530,496,329,220,095.
        // uint112 range: range 0 ΓÇô                             5,192,296,858,534,827.
        uint256 linearVestAmount; // total entitlement
        uint256 amountWithdrawn; // how much was withdrawn thus far - released at the cliffReleaseTimestamp
        uint112 cliffAmount; // how much is released at the cliff
        bool isActive; // whether this claim is active (or revoked)
        // should keep the current index of struct fields to avoid changing frontend code regarding this change
        uint40 deactivationTimestamp;
    }

    /**
    @notice Address of the token that we're vesting
     */
    IERC20 public immutable tokenAddress;

    // Mapping every user address to his/her Claim
    // This could be array because a recipient can have multiple schdules.
    // Only one Claim possible per address
    mapping(address => Claim[]) internal claims;

    // Track the recipients of the vesting
    address[] internal vestingRecipients;

    address private immutable factoryAddress;
    uint256 public feePercent; // Fee percent.  500 means 5%, 1 means 0.01 %
    address public feeReceiver; // The receier address that will get the fee.

    // Events:
    /**
    @notice Emitted when a founder adds a vesting schedule.
     */
    event ClaimCreated(
        address indexed _recipient,
        Claim _claim,
        uint256 _scheduleIndex
    );

    /**
    @notice Emitted when someone withdraws a vested amount
    */
    event Claimed(
        address indexed _recipient,
        uint256 _withdrawalAmount,
        uint256 _scheduleIndex
    );

    /**
    @notice Emitted when receiving the fee.
    */
    event FeeReceived(
        address indexed _recipient,
        uint256 _feeAmount,
        uint256 _scheduleIndex,
        address _tokenAddress
    );

    /** 
    @notice Emitted when a claim is revoked
    */
    event ClaimRevoked(
        address indexed _recipient,
        uint256 _numTokensWithheld,
        uint256 revocationTimestamp,
        Claim _claim,
        uint256 _scheduleIndex
    );

    /** 
    @notice Emitted when admin withdraws.
    */
    event AdminWithdrawn(address indexed _recipient, uint256 _amountRequested);

    //
    /**
    @notice Construct the contract, taking the ERC20 token to be vested as the parameter.
    @dev The owner can set the contract in question when creating the contract.
     */
    constructor(IERC20 _tokenAddress, uint256 _feePercent, address _owner) {
        require(address(_tokenAddress) != address(0), "INVALID_ADDRESS");
        _transferOwnership(_owner);
        factoryAddress = msg.sender;
        feeReceiver = msg.sender;
        feePercent = _feePercent;
        tokenAddress = _tokenAddress;
    }

    /**
    @notice Basic getter for a claim. 
    @dev Could be using public claims var, but this is cleaner in terms of naming. (getClaim(address) as opposed to claims(address)). 
    @param _recipient - the address for which we fetch the claim.
    @param _scheduleIndex - the index of the schedules.
     */
    function getClaim(
        address _recipient,
        uint256 _scheduleIndex
    ) external view returns (Claim memory) {
        if (claims[_recipient].length <= _scheduleIndex) {
            revert("NO_SCHEDULE_EXIST");
        }
        return claims[_recipient][_scheduleIndex];
    }

    /**
    @notice This modifier requires that an user has a claim attached.
    @dev  To determine this, we check that a claim:
    * - is active
    * - start timestamp is nonzero.
    * These are sufficient conditions because we only ever set startTimestamp in 
    * createClaim, and we never change it. Therefore, startTimestamp will be set
    * IFF a claim has been created. In addition to that, we need to check
    * a claim is active (since this is has_*Active*_Claim)
    */
    modifier hasActiveClaim(address _recipient, uint256 _scheduleIndex) {
        require(claims[_recipient].length > _scheduleIndex, "NO_ACTIVE_CLAIM");

        Claim storage _claim = claims[_recipient][_scheduleIndex];
        require(_claim.startTimestamp > 0, "NO_ACTIVE_CLAIM");

        // We however still need the active check, since (due to the name of the function)
        // we want to only allow active claims
        require(_claim.isActive, "NO_ACTIVE_CLAIM");

        // Save gas, omit further checks
        // require(_claim.linearVestAmount + _claim.cliffAmount > 0, "INVALID_VESTED_AMOUNT");
        // require(_claim.endTimestamp > 0, "NO_END_TIMESTAMP");
        _;
    }

    /**
    @notice This modifier requires that owner or factory contract.
    */
    modifier onlyFactory() {
        require(msg.sender == factoryAddress, "Not Factory");
        _;
    }

    /**
    @notice This modifier requires that owner or factory contract.
    */
    modifier onlyOwnerOrFactory() {
        require(
            msg.sender == owner() || msg.sender == factoryAddress,
            "Not Owner or Factory"
        );
        _;
    }

    /**
    @notice Pure function to calculate the vested amount from a given _claim, at a reference timestamp
    @param _claim The claim in question
    @param _referenceTs Timestamp for which we're calculating
     */
    function _baseVestedAmount(
        Claim memory _claim,
        uint40 _referenceTs
    ) internal pure returns (uint256) {
        // If no schedule is created
        if (!_claim.isActive && _claim.deactivationTimestamp == 0) {
            return 0;
        }

        uint256 vestAmt = 0;

        // Check if this time is over vesting end time
        if (_referenceTs > _claim.endTimestamp) {
            _referenceTs = _claim.endTimestamp;
        }

        // If we're past the cliffReleaseTimestamp, we release the cliffAmount
        // We don't check here that cliffReleaseTimestamp is after the startTimestamp
        if (_referenceTs >= _claim.cliffReleaseTimestamp) {
            vestAmt += _claim.cliffAmount;
        }

        // Calculate the linearly vested amount - this is relevant only if we're past the schedule start
        // at _referenceTs == _claim.startTimestamp, the period proportion will be 0 so we don't need to start the calc
        if (_referenceTs > _claim.startTimestamp) {
            uint40 currentVestingDurationSecs = _referenceTs -
                _claim.startTimestamp; // How long since the start

            // Next, we need to calculated the duration truncated to nearest releaseIntervalSecs
            uint40 truncatedCurrentVestingDurationSecs = (currentVestingDurationSecs /
                    _claim.releaseIntervalSecs) * _claim.releaseIntervalSecs;

            uint40 finalVestingDurationSecs = _claim.endTimestamp -
                _claim.startTimestamp; // length of the interval

            // Calculate the linear vested amount - fraction_of_interval_completed * linearVestedAmount
            // Since fraction_of_interval_completed is truncatedCurrentVestingDurationSecs / finalVestingDurationSecs, the formula becomes
            // truncatedCurrentVestingDurationSecs / finalVestingDurationSecs * linearVestAmount, so we can rewrite as below to avoid
            // rounding errors
            uint256 linearVestAmount = (_claim.linearVestAmount *
                truncatedCurrentVestingDurationSecs) / finalVestingDurationSecs;

            // Having calculated the linearVestAmount, simply add it to the vested amount
            vestAmt += linearVestAmount;
        }

        return vestAmt;
    }

    /**
    @notice Calculate the amount vested for a given _recipient at a reference timestamp.
    @param _recipient - The address for whom we're calculating
    @param _scheduleIndex - The index of the vesting schedules of the recipient.
    @param _referenceTs - The timestamp at which we want to calculate the vested amount.
    @dev Simply call the _baseVestedAmount for the claim in question
    */
    function vestedAmount(
        address _recipient,
        uint256 _scheduleIndex,
        uint40 _referenceTs
    ) public view returns (uint256) {
        Claim memory _claim = claims[_recipient][_scheduleIndex];
        uint40 vestEndTimestamp = _claim.isActive
            ? _referenceTs
            : _claim.deactivationTimestamp;
        return _baseVestedAmount(_claim, vestEndTimestamp);
    }

    /**
    @notice Calculate the total vested at the end of the schedule, by simply feeding in the end timestamp to the function above.
    @dev This fn is somewhat superfluous, should probably be removed.
    @param _recipient - The address for whom we're calculating
    @param _scheduleIndex - The index of the vesting schedules of the recipient.
     */
    function finalVestedAmount(
        address _recipient,
        uint256 _scheduleIndex
    ) public view returns (uint256) {
        Claim memory _claim = claims[_recipient][_scheduleIndex];
        return _baseVestedAmount(_claim, _claim.endTimestamp);
    }

    /**
    @notice Calculates how much can we claim, by subtracting the already withdrawn amount from the vestedAmount at this moment.
    @param _recipient - The address for whom we're calculating
    @param _scheduleIndex - The index of the vesting schedules of the recipient.
    */
    function claimableAmount(
        address _recipient,
        uint256 _scheduleIndex
    ) public view returns (uint256) {
        Claim memory _claim = claims[_recipient][_scheduleIndex];
        return
            vestedAmount(_recipient, _scheduleIndex, uint40(block.timestamp)) -
            _claim.amountWithdrawn;
    }

    /**
    @notice Calculates how much wil be possible to claim at the end of vesting date, by subtracting the already withdrawn
            amount from the vestedAmount at this moment. Vesting date is either the end timestamp or the deactivation timestamp.
    @param _recipient - The address for whom we're calculating
    @param _scheduleIndex - The index of the vesting schedules of the recipient.
    */
    function finalClaimableAmount(
        address _recipient,
        uint256 _scheduleIndex
    ) external view returns (uint256) {
        Claim storage _claim = claims[_recipient][_scheduleIndex];
        uint40 vestEndTimestamp = _claim.isActive
            ? _claim.endTimestamp
            : _claim.deactivationTimestamp;
        return
            _baseVestedAmount(_claim, vestEndTimestamp) -
            _claim.amountWithdrawn;
    }

    /** 
    @notice Return all the addresses that have vesting schedules attached.
    */
    function allVestingRecipients() external view returns (address[] memory) {
        return vestingRecipients;
    }

    /** 
    @notice Get the total number of vesting recipients.
    */
    function numVestingRecipients() external view returns (uint256) {
        return vestingRecipients.length;
    }

    /** 
    @notice Permission-unchecked version of claim creation (no onlyOwner). Actual logic for create claim, to be run within either createClaim or createClaimBatch.
    @dev This'll simply check the input parameters, and create the structure verbatim based on passed in parameters.
     */
    function _createClaimUnchecked(ClaimInput memory claimInput) private {
        require(claimInput.recipient != address(0), "INVALID_ADDRESS");
        require(
            claimInput.linearVestAmount + claimInput.cliffAmount > 0,
            "INVALID_VESTED_AMOUNT"
        ); // Actually only one of linearvested/cliff amount must be 0, not necessarily both
        require(claimInput.startTimestamp > 0, "INVALID_START_TIMESTAMP");
        // Do we need to check whether _startTimestamp is greater than the current block.timestamp?
        // Or do we allow schedules that started in the past?
        // -> Conclusion: we want to allow this, for founders that might have forgotten to add some users, or to avoid issues with transactions not going through because of discoordination between block.timestamp and sender's local time
        // require(_endTimestamp > 0, "_endTimestamp must be valid"); // not necessary because of the next condition (transitively)
        require(
            claimInput.startTimestamp < claimInput.endTimestamp,
            "INVALID_END_TIMESTAMP"
        ); // _endTimestamp must be after _startTimestamp
        require(claimInput.releaseIntervalSecs > 0, "INVALID_RELEASE_INTERVAL");
        require(
            (claimInput.endTimestamp - claimInput.startTimestamp) %
                claimInput.releaseIntervalSecs ==
                0,
            "INVALID_INTERVAL_LENGTH"
        );

        // Potential TODO: sanity check, if _linearVestAmount == 0, should we perhaps force that start and end ts are the same?

        // No point in allowing cliff TS without the cliff amount or vice versa.
        // Both or neither of _cliffReleaseTimestamp and _cliffAmount must be set. If cliff is set, _cliffReleaseTimestamp must be before or at the _startTimestamp
        require(
            (claimInput.cliffReleaseTimestamp > 0 &&
                claimInput.cliffAmount > 0 &&
                claimInput.cliffReleaseTimestamp <=
                claimInput.startTimestamp) ||
                (claimInput.cliffReleaseTimestamp == 0 &&
                    claimInput.cliffAmount == 0),
            "INVALID_CLIFF"
        );

        Claim memory _claim;
        _claim.startTimestamp = claimInput.startTimestamp;
        _claim.endTimestamp = claimInput.endTimestamp;
        _claim.deactivationTimestamp = 0;
        _claim.cliffReleaseTimestamp = claimInput.cliffReleaseTimestamp;
        _claim.releaseIntervalSecs = claimInput.releaseIntervalSecs;
        _claim.linearVestAmount = claimInput.linearVestAmount;
        _claim.cliffAmount = uint112(claimInput.cliffAmount);
        _claim.amountWithdrawn = 0;
        _claim.isActive = true;

        claims[claimInput.recipient].push(_claim);

        // Our total allocation is simply the full sum of the two amounts, _cliffAmount + _linearVestAmount
        // Not necessary to use the more complex logic from _baseVestedAmount
        uint256 allocatedAmount = claimInput.cliffAmount +
            claimInput.linearVestAmount;
        require(
            // Still no effects up to this point (and tokenAddress is selected by contract deployer and is immutable), so no reentrancy risk
            tokenAddress.balanceOf(address(this)) >=
                numTokensReservedForVesting + allocatedAmount,
            "INSUFFICIENT_BALANCE"
        );

        // Done with checks

        // Effects limited to lines below
        numTokensReservedForVesting += allocatedAmount; // track the allocated amount
        vestingRecipients.push(claimInput.recipient); // add the vesting recipient to the list
        emit ClaimCreated(
            claimInput.recipient,
            _claim,
            claims[claimInput.recipient].length
        ); // let everyone know
    }

    /** 
    @notice Create a claim based on the input parameters.
    @dev This'll simply check the input parameters, and create the structure verbatim based on passed in parameters.
     */
    function createClaim(
        ClaimInput memory claimInput
    ) external onlyOwnerOrFactory {
        _createClaimUnchecked(claimInput);
    }

    /**
    @notice The batch version of the createClaim function. Each argument is an array, and this function simply repeatedly calls the createClaim.
    
     */
    function createClaimsBatch(
        ClaimInput[] calldata claimInputs
    ) external onlyOwnerOrFactory {
        uint256 length = claimInputs.length;

        for (uint256 i = 0; i < length; ) {
            _createClaimUnchecked(claimInputs[i]);
            unchecked {
                ++i;
            }
        }
    }

    /**
    @notice Withdraw the full claimable balance.
    @dev hasActiveClaim throws off anyone without a claim.
    @param _scheduleIndex - The index of the vesting schedules of the recipient.
     */
    function withdraw(
        uint256 _scheduleIndex
    ) external hasActiveClaim(_msgSender(), _scheduleIndex) nonReentrant {
        // Get the message sender claim - if any

        Claim storage usrClaim = claims[_msgSender()][_scheduleIndex];

        // we can use block.timestamp directly here as reference TS, as the function itself will make sure to cap it to endTimestamp
        // Conversion of timestamp to uint40 should be safe since 48 bit allows for a lot of years.
        uint256 allowance = vestedAmount(
            _msgSender(),
            _scheduleIndex,
            uint40(block.timestamp)
        );

        // Make sure we didn't already withdraw more that we're allowed.
        require(
            allowance > usrClaim.amountWithdrawn && allowance > 0,
            "NOTHING_TO_WITHDRAW"
        );

        // Calculate how much can we withdraw (equivalent to the above inequality)
        uint256 amountRemaining = allowance - usrClaim.amountWithdrawn;
        require(amountRemaining > 0, "NOTHING_TO_WITHDRAW");

        // "Double-entry bookkeeping"
        // Carry out the withdrawal by noting the withdrawn amount, and by transferring the tokens.
        usrClaim.amountWithdrawn += amountRemaining;
        // Reduce the allocated amount since the following transaction pays out so the "debt" gets reduced
        numTokensReservedForVesting -= amountRemaining;

        _transferToken(amountRemaining, _scheduleIndex);
        // After the "books" are set, transfer the tokens
        // Reentrancy note - internal vars have been changed by now
        // Also following Checks-effects-interactions pattern

        // Let withdrawal known to everyone.
        emit Claimed(_msgSender(), amountRemaining, _scheduleIndex);
    }

    /**
     * @notice transfer the token to the user and fee receiver.
     * @param _amount The total amount that will be transfered.
     * @param _scheduleIndex The index of the schedule.
     */
    function _transferToken(uint256 _amount, uint256 _scheduleIndex) private {
        if (feePercent > 0) {
            uint256 _feeAmount = calculateFee(_amount);

            tokenAddress.safeTransfer(_msgSender(), _amount - _feeAmount);
            tokenAddress.safeTransfer(feeReceiver, _feeAmount);
            emit FeeReceived(
                feeReceiver,
                _feeAmount,
                _scheduleIndex,
                address(tokenAddress)
            );
        } else {
            tokenAddress.safeTransfer(_msgSender(), _amount);
        }
    }

    function calculateFee(uint256 _amount) private view returns (uint256) {
        return (_amount * feePercent) / 10000;
    }

    /**
    @notice Admin withdrawal of the unallocated tokens.
    @param _amountRequested - the amount that we want to withdraw
     */
    function withdrawAdmin(
        uint256 _amountRequested
    ) public onlyOwner nonReentrant {
        // Allow the owner to withdraw any balance not currently tied up in contracts.
        uint256 amountRemaining = amountAvailableToWithdrawByAdmin();

        require(amountRemaining >= _amountRequested, "INSUFFICIENT_BALANCE");

        // Actually withdraw the tokens
        // Reentrancy note - this operation doesn't touch any of the internal vars, simply transfers
        // Also following Checks-effects-interactions pattern
        tokenAddress.safeTransfer(_msgSender(), _amountRequested);

        // Let the withdrawal known to everyone
        emit AdminWithdrawn(_msgSender(), _amountRequested);
    }

    /** 
    @notice Allow an Owner to revoke a claim that is already active.
    @dev The requirement is that a claim exists and that it's active.
    @param _scheduleIndex - The index of the vesting schedules of the recipient.
    */
    function revokeClaim(
        address _recipient,
        uint256 _scheduleIndex
    ) external onlyOwner hasActiveClaim(_recipient, _scheduleIndex) {
        // Fetch the claim
        Claim storage _claim = claims[_recipient][_scheduleIndex];

        // Calculate what the claim should finally vest to
        uint256 finalVestAmt = finalVestedAmount(_recipient, _scheduleIndex);

        // No point in revoking something that has been fully consumed
        // so require that there be unconsumed amount
        require(_claim.amountWithdrawn < finalVestAmt, "NO_UNVESTED_AMOUNT");

        // Deactivate the claim, and release the appropriate amount of tokens
        _claim.isActive = false; // This effectively reduces the liability by amountRemaining, so we can reduce the liability numTokensReservedForVesting by that much
        _claim.deactivationTimestamp = uint40(block.timestamp);

        // The amount that is "reclaimed" is equal to the total allocation less what was already withdrawn
        uint256 vestedSoFarAmt = vestedAmount(
            _recipient,
            _scheduleIndex,
            uint40(block.timestamp)
        );
        uint256 amountRemaining = finalVestAmt - vestedSoFarAmt;
        numTokensReservedForVesting -= amountRemaining; // Reduces the allocation

        // Tell everyone a claim has been revoked.
        emit ClaimRevoked(
            _recipient,
            amountRemaining,
            uint40(block.timestamp),
            _claim,
            _scheduleIndex
        );
    }

    /**
    @notice Withdraw a token which isn't controlled by the vesting contract.
    @dev This contract controls/vests token at "tokenAddress". However, someone might send a different token. 
    To make sure these don't get accidentally trapped, give admin the ability to withdraw them (to their own address).
    Note that the token to be withdrawn can't be the one at "tokenAddress".
    @param _otherTokenAddress - the token which we want to withdraw
     */
    function withdrawOtherToken(
        IERC20 _otherTokenAddress
    ) external onlyOwner nonReentrant {
        require(_otherTokenAddress != tokenAddress, "INVALID_TOKEN"); // tokenAddress address is already sure to be nonzero due to constructor
        uint256 bal = _otherTokenAddress.balanceOf(address(this));
        require(bal > 0, "INSUFFICIENT_BALANCE");
        _otherTokenAddress.transfer(_msgSender(), bal);
    }

    /**
     * @notice Get amount that is not vested in contract
     * @dev Whenever vesting is revoked, this amount will be increased.
     */
    function amountAvailableToWithdrawByAdmin() public view returns (uint256) {
        return
            tokenAddress.balanceOf(address(this)) - numTokensReservedForVesting;
    }

    function getNumberOfVestings(
        address _recipient
    ) public view returns (uint256) {
        return claims[_recipient].length;
    }

    function setFee(uint256 _feePercent) external onlyFactory {
        feePercent = _feePercent;
    }

    function updateFeeReceiver(address _newReceiver) external onlyFactory {
        feeReceiver = _newReceiver;
    }
}

// File contracts/VTVLVestingFactory.sol

pragma solidity 0.8.14;

/// @title Vesting Factory contract
/// @notice Create Vesting contract

contract VTVLVestingFactory is Ownable {
    using SafeERC20 for IERC20;

    event CreateVestingContract(
        address indexed vestingAddress,
        address deployer
    );

    mapping(address => bool) isVestingContracts;

    /**
    @notice This modifier requires the vesting contract.
    */
    modifier onlyVestingContract(address _vestingContract) {
        require(
            isVestingContracts[_vestingContract],
            "Not our vesting contract"
        );
        _;
    }

    /**
     * @notice Create Vesting contract without funding.
     * @dev This will only create the vesting contract.
     * @param _tokenAddress Vesting Fund token address.
     * @param _feePercent The percent of fee.
     */
    function createVestingContract(
        IERC20 _tokenAddress,
        uint256 _feePercent
    ) public {
        VTVLVesting vestingContract = new VTVLVesting(
            _tokenAddress,
            _feePercent,
            msg.sender
        );

        isVestingContracts[address(vestingContract)] = true;

        emit CreateVestingContract(address(vestingContract), msg.sender);
    }

    /**
     * @notice Set the fee percent of Vesting contract.
     * @dev 100% will be 10000.
     */
    function setFee(
        address _vestingContract,
        uint256 _feePercent
    ) external onlyOwner onlyVestingContract(_vestingContract) {
        if (_feePercent > 0 && _feePercent < 10000) {
            IVestingFee(_vestingContract).setFee(_feePercent);
        } else {
            revert("INVALID_FEE_PERCENT");
        }
    }

    /**
     * @notice Set the fee recipient of Vesting contract.
     */
    function updateFeeReceiver(
        address _vestingContract,
        address _newReceiver
    ) external onlyOwner onlyVestingContract(_vestingContract) {
        IVestingFee(_vestingContract).updateFeeReceiver(_newReceiver);
    }

    /**
     * @notice Withdraw the token to the receiver.
     */
    function withdraw(
        address _tokenAddress,
        address _receiver
    ) external onlyOwner {
        uint256 balance = IERC20(_tokenAddress).balanceOf(address(this));
        IERC20(_tokenAddress).transfer(_receiver, balance);
    }
}
