export const CONTRACT_NAMES = {
  VTVLVesting: "VTVLVesting",
  VTVLToken: "VTVLToken",
} as const;

export type CONTRACT_NAME_TYPES = keyof typeof CONTRACT_NAMES;
