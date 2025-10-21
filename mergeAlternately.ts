// mergeAlternately.ts
export function mergeAlternately(word1: string, word2: string): string {
  let res = "";
  let change = true;

  while (word1.length > 0 || word2.length > 0) {
    if (change && word1.length > 0) {
      res += word1[0];
      word1 = word1.substring(1);
    } else if (!change && word2.length > 0) {
      res += word2[0];
      word2 = word2.substring(1);
    }
    change = !change;
  }

  return res;
}
