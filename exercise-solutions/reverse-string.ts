/**
 * -- Directions --
 * Given a string, return a new string with the reversed order
 * of characters.
 *
 * -- Examples --
 * reverse('apple') --> 'elppa'
 * reverse('abc') --> 'cba'
 * reverse(' abc') --> 'cba '
 */

// --- Possible solution # 1 - uses string methods ---
export function reverse1(str: string): string {
  return str.split('').reverse().join('');
}
