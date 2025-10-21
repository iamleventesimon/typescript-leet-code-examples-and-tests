// kidsWithCandies.ts
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const candiesPlus = candies.map(val => val + extraCandies);
  const maxNumber: number = candies.length > 0 ? Math.max(...candies) : -1;

  return candiesPlus.map(val => val >= maxNumber);
}
