/**
 * -- Directions --
 * Given a string, return true if the string is a palindrome and
 * false if it is not.
 *
 * Palindromes are strings that form the same word when reversed.
 * Spaces and punctuation should be included in determining if the
 * string is a palindrome.
 *
 * -- Examples --
 * palindrome('abba') --> true
 * palindrome('madam') --> true
 * palindrome('civic') --> true
 * palindrome('noon') --> true
 * palindrome('nine') --> false
 */

export function palindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}
