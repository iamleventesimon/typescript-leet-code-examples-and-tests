// mergeOrderedArrays.test.ts
import { mergeOrderedArrays } from "./mergeOrderedArrays";

describe("mergeOrderedArrays", () => {
  test("merges two sorted arrays without duplicates", () => {
    expect(mergeOrderedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("removes duplicates when arrays have overlapping numbers", () => {
    expect(mergeOrderedArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("works when one array is empty", () => {
    expect(mergeOrderedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeOrderedArrays([4, 5, 6], [])).toEqual([4, 5, 6]);
  });

  test("works when both arrays are empty", () => {
    expect(mergeOrderedArrays([], [])).toEqual([]);
  });

  test("works when arrays contain duplicates internally", () => {
    expect(mergeOrderedArrays([1, 1, 2, 3], [2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

});
