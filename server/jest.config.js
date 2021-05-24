module.exports = {
  setupFiles: ["./src/setupTests.js"],
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
