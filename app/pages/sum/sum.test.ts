// import "@testing-library/jest-dom";

// const sumFunction = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sumFunction(1, 2)).toBe(3);
// });

import { describe, expect, test } from "@jest/globals";
import sum from "./sum";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
