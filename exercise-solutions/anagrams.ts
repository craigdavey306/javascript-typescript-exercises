/**
 * -- Directions --
 *
 * Check to see if two strings provided to the function are anagrams of each other.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. For this example, consider capital letters
 * to be the same as lowercase ones.
 *
 * -- Examples --
 * anagrams('rail safety', 'fairy tales') --> True
 * anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 * anagrams('Hi there', 'Bye there') --> False
 *
 */

// Possible solution #1 - using a regular expression
export function anagrams(a: string, b: string): boolean {
  return normalizeString(a) === normalizeString(b);
}

// uses a Regular Expression to remove any non-word character.
function normalizeString(str: string): string {
  return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}

// Possible solution #2 - using a for...of loop
export function anagram2(a: string, b: string): boolean {
  return normalizeString2(a) === normalizeString2(b);
}

// uses a Regular Expression to remove any non-word character.
function normalizeString2(str: string): string {
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const normalizedCharacters: string[] = [];
  const chars = str.split('');
  for (const char of chars) {
    const lowercase = char.toLocaleLowerCase();
    if (allowedChars.includes(lowercase)) {
      normalizedCharacters.push(lowercase);
    }
  }

  return normalizedCharacters.toSorted().join('');
}

// Possible solution #3 - using a higher order function
export function anagrams3(a: string, b: string): boolean {
  return normalizeString3(a) === normalizeString3(b);
}

// Assumes only specific characters are allowed.
function normalizeString3(str: string): string {
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const normalizedCharacters: string[] = [];

  str.split('').forEach((char) => {
    const lowercase = char.toLocaleLowerCase();
    if (allowedChars.includes(lowercase)) {
      normalizedCharacters.push(lowercase);
    }
  });

  return normalizedCharacters.toSorted().join('');
}
