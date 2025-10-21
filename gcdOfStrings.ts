// gcdOfStrings.ts
export function gcdOfStrings(str1: string, str2: string): string {
  // If concatenating str1+str2 doesn't equal str2+str1,
  // then there's no common divisor string pattern
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Helper function to calculate GCD of two numbers using Euclidean algorithm
  const calculateGCD = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const gcdLength = calculateGCD(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}
