/**
 * -- Directions --
 * Given a string, return the character that is most commonly used in the string.
 * If characters in the string do not repeat, then the first character is returned.
 *
 * -- Examples --
 * maxChar("abccccccccccd") --> "c"
 * maxChar("apple") --> "p"
 * maxChar("abcd1212122223") -> "2"
 * maxChar("studio") --> "s"
 */

export function maxChar(str: string): string {
  if (!str) return '';

  const frequency: Record<string, number> = {};

  for (let char of str.split('')) {
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
  }

  let max = 0;
  let maxChar: string = '';

  for (let [key, num] of Object.entries(frequency)) {
    if (num > max) {
      maxChar = key;
      max = num;
    }
  }

  return maxChar;
}
