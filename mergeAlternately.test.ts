// mergeAlternately.test.ts
import { mergeAlternately } from "./mergeAlternately";

describe("mergeAlternately", () => {
  test("merges two strings of equal length", () => {
    expect(mergeAlternately("abc", "xyz")).toBe("axbycz");
  });

  test("handles first string longer", () => {
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });

  test("handles second string longer", () => {
    expect(mergeAlternately("hi", "wxyz")).toBe("hwixyz");
  });

  test("handles one empty string", () => {
    expect(mergeAlternately("", "abc")).toBe("abc");
    expect(mergeAlternately("abc", "")).toBe("abc");
  });

  test("handles both empty strings", () => {
    expect(mergeAlternately("", "")).toBe("");
  });
});
