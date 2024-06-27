module.exports = {
  testEnvironment: "jsdom",
  coverageProvider: "v8",
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  // },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  bail: 1,
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/", // Change 'your-package' to the package name you need to transform
  ],
};
