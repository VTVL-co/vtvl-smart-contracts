const currentTime = Math.round(new Date().getTime() / 1000);
const vestingJson = [
  [
    currentTime,
    currentTime + 10000,
    currentTime - 1000,
    100,
    0,
    10000,
    10,
    "0xe456f9A32E5f11035ffBEa0e97D1aAFDA6e60F03",
  ],
  [
    currentTime,
    currentTime + 10000,
    currentTime - 1000,
    100,
    1,
    10000,
    10,
    "0xe456f9A32E5f11035ffBEa0e97D1aAFDA6e60F03",
  ],
  [
    currentTime,
    currentTime + 10000,
    currentTime - 1000,
    5000,
    2,
    10000,
    10,
    "0xe456f9A32E5f11035ffBEa0e97D1aAFDA6e60F03",
  ],
];

export default vestingJson;
