import { fib } from "./fib";

describe("fib", () => {
  test("returns 0 for n = 0", () => {
    expect(fib(0)).toBe(0);
  });

  test("returns 1 for n = 1", () => {
    expect(fib(1)).toBe(1);
  });

  test("returns 1 for n = 2", () => {
    expect(fib(2)).toBe(1);
  });

  test("returns 2 for n = 3", () => {
    expect(fib(3)).toBe(2);
  });

  test("returns 3 for n = 4", () => {
    expect(fib(4)).toBe(3);
  });

  test("returns 5 for n = 5", () => {
    expect(fib(5)).toBe(5);
  });

  test("returns 8 for n = 6", () => {
    expect(fib(6)).toBe(8);
  });
});
