// kidsWithCandies.test.ts
import { kidsWithCandies } from "./kidsWithCandies";

describe("kidsWithCandies", () => {
  test("returns correct result for example case", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
  });

  test("works when all have the same candies", () => {
    expect(kidsWithCandies([4, 4, 4], 1)).toEqual([true, true, true]);
  });

  test("works with an empty array", () => {
    expect(kidsWithCandies([], 3)).toEqual([]);
  });

  test("handles single element array", () => {
    expect(kidsWithCandies([10], 5)).toEqual([true]);
  });
});
