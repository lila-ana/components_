module.exports = {
  testEnvironment: "jsdom",
  // testEnvironment: "node",
  coverageProvider: "v8",
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
