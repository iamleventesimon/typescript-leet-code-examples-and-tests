// singleNumber.test.ts
import { singleNumber } from "./singleNumber";

describe("singleNumber", () => {
  test("finds single number in array with duplicates", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  test("works with negative numbers", () => {
    expect(singleNumber([-1, -1, -2])).toBe(-2);
  });

  test("works with single-element array", () => {
    expect(singleNumber([42])).toBe(42);
  });

  test("works with large numbers", () => {
    expect(singleNumber([1000000, 1, 1000000])).toBe(1);
  });
});
