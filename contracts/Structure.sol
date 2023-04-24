// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;
/**
    @notice A structure representing a single claim - supporting linear and cliff vesting.
     */
struct InputClaim {
    // Using 40 bits for timestamp (seconds)
    // Gives us a range from 1 Jan 1970 (Unix epoch) up to approximately 35 thousand years from then (2^40 / (365 * 24 * 60 * 60) ~= 35k)
    uint40 startTimestamp; // When does the vesting start (40 bits is enough for TS)
    uint40 endTimestamp; // When does the vesting end - the vesting goes linearly between the start and end timestamps
    uint40 cliffReleaseTimestamp; // At which timestamp is the cliffAmount released. This must be <= startTimestamp
    uint40 releaseIntervalSecs; // Every how many seconds does the vested amount increase.
    // uint112 range: range 0 –     5,192,296,858,534,827,628,530,496,329,220,095.
    // uint112 range: range 0 –                             5,192,296,858,534,827.
    uint256 linearVestAmount; // total entitlement
    uint112 cliffAmount; // how much is released at the cliff
}
