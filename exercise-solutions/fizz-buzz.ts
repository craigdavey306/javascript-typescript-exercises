/**
 * -- Directions --
 * Write a program that console logs the number from 1 to N.
 * For multiples of three, print "fizz" instead of the number.
 * For multiples of five, print "buzz" instead of the number.
 * For multiples of both three and five, print "fizzbuzz".
 *
 *  -- Example --
 *  fizzBuzz(5);
 *  1
 *  2
 *  fizz
 *  4
 *  buzz
 */

// Possible solution # 1
export function fizzBuzz1(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

// Possible solution # 2
export function fizzBuzz2(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

// Possible solution # 3
export function fizzBuzz(n: number): void {
  let i = 1;
  while (i <= n) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
    i++;
  }
}
