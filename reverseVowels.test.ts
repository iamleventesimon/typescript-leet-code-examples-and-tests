// reverseVowels.test.ts
import { reverseVowels, isVowel } from "./reverseVowels";

describe("isVowel", () => {
  test("returns true for vowels", () => {
    for (const char of ["a", "E", "i", "O", "u"]) {
      expect(isVowel(char)).toBe(true);
    }
  });

  test("returns false for consonants and symbols", () => {
    for (const char of ["b", "C", "x", "1", "!", " "]) {
      expect(isVowel(char)).toBe(false);
    }
  });
});

describe("reverseVowels", () => {
  test("reverses vowels in a normal word", () => {
    expect(reverseVowels("hello")).toBe("holle");
  });

  test("handles strings with uppercase vowels", () => {
    expect(reverseVowels("LeetCode")).toBe("LeotCede");
  });

  test("returns the same string if no vowels", () => {
    expect(reverseVowels("rhythm")).toBe("rhythm");
  });

  test("reverses vowels in a sentence", () => {
    expect(reverseVowels("A man, a plan, a canal: Panama")).toBe("a man, a plan, a canal: PanamA");
  });

  test("works with empty string", () => {
    expect(reverseVowels("")).toBe("");
  });

  test("works with single-character strings", () => {
    expect(reverseVowels("a")).toBe("a");
    expect(reverseVowels("b")).toBe("b");
  });
});
