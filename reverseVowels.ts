// reverseVowels.ts

export function isVowel(inputChar: string): boolean {
  return "aeiouAEIOU".includes(inputChar);
}

export function reverseVowels(s: string): string {
  const chars = s.split("");
  let leftPointer = 0;
  let rightPointer = chars.length - 1;

  while (leftPointer < rightPointer) {
    while (leftPointer < rightPointer && !isVowel(chars[leftPointer])) {
      leftPointer++;
    }

    while (leftPointer < rightPointer && !isVowel(chars[rightPointer])) {
      rightPointer--;
    }

    // Swap vowels
    [chars[leftPointer], chars[rightPointer]] = [chars[rightPointer], chars[leftPointer]];

    leftPointer++;
    rightPointer--;
  }

  return chars.join("");
}
