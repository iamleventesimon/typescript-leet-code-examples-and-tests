import { gcdOfStrings } from "./gcdOfStrings";

describe("gcdOfStrings", () => {
  test("returns GCD of 'ABCABC' and 'ABC'", () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
  });

  test("returns GCD of 'ABABAB' and 'ABAB'", () => {
    expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
  });

  test("returns empty string if no GCD exists", () => {
    expect(gcdOfStrings("LEET", "CODE")).toBe("");
  });

  test("returns whole string if both are same", () => {
    expect(gcdOfStrings("AAAA", "AAAA")).toBe("AAAA");
  });
});
