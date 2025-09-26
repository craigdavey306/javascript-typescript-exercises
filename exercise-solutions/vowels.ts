/**
 * -- Directions --
 * Write a function that returns the number of vowels used in a string.
 * As a reminder, vowels are the characters: 'a', 'e', 'i', 'o', and 'u'.
 *
 * -- Examples --
 * vowels('Hi There!') --> 3
 * vowels('Are you sure?') --> 6
 * vowels('Why?') --> 0
 */

// --- Possible solution # 1 - uses regular expression ---
export function vowels1(str: string): number {
  return str.toLowerCase().replace(/[^aeiou]/g, '').length;
}

// --- Possible solution # 2 ---
export function vowels2(str: string): number {
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  return count;
}
