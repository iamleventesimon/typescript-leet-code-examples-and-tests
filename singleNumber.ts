// singleNumber.ts
export function singleNumber(nums: number[]): number {
  let result = 0;

  for (let num of nums) {
    result = result ^ num; // XOR all numbers
  }

  return result;
}
