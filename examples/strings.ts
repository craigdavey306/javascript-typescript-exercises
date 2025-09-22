// Strings

/**
 * Strings are used to represent text, and are written by enclosing
 * the content in quotes.
 *
 * JavaScript uses the Unicode standard for characters.
 */

// The following are examples of the different types of quotes used in JavaScript.
console.log('Down by the sea');
console.log("Float down the river's rapids");
console.log(`Tropical island`);

// Special string characters: newline (\n)
console.log('This is the first line\nAnd this is the second');

// String concatenation
const concatenatedString = 'con' + 'cat' + 'e' + 'nate';
console.log(concatenatedString);

// String template literals allow you to embed variables and perform operations.
console.log(
  `Here is an example of embedding the concatenatedString variable in the string: ${concatenatedString}`
);
console.log(`1 + 1 is ${1 + 1}`);

// Strings have a length

console.log('Hello, world!'.length);

// Examples of available methods that exist for strings are below.
// Please see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// for additional methods and examples.

console.log('---- available string methods ----');
// 1) converting a string to uppercase
console.log('this will be converted to uppercase'.toLocaleUpperCase());
// 2) converting a string to lowercase
console.log('THIS WILL BE CONVERTED TO LOWERCASE'.toLocaleLowerCase());
// 3) determining if a string exists in a given string
const sentence = 'The quick brown fox jumped over the lazy dog';
const word = 'fox';
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } included in the sentence.`
);
// 4) Repeating a string
console.log(`I feel ${'HAPPY! '.repeat(3)}`);
// 5) Splitting a string into substrings based on a given pattern
console.log(sentence.split(' ')); // pattern = space
console.log(sentence.split('')); // pattern = characters
// 6) Removing leading and trailing whitespaces
const world = '  Hello, world!   ';
console.log(
  `Length of ${world} before trimming is ${world.length}, and after it is ${
    world.trim().length
  }`
);
