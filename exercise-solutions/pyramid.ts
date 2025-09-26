/**
 * -- Directions --
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape with
 * N levels using the "#" character.
 *
 * -- Examples --
 * pyramid(1)
 * '#'
 *
 * pyramid(2)
 * '#'
 * '##'
 *
 * pyramid(3)
 * '#'
 * '##'
 * '###'
 */

// --- Possible solution # 1 - uses string concatenation ---

export function pyramid1(n: number): void {
  if (n <= 0) return;

  let step = '#';

  for (let level = 1; level <= n; level++) {
    console.log(step);
    step += '#';
  }
}

// --- Possible solution # 2 - uses string.repeat() method ---

export function pyramid2(n: number): void {
  if (n <= 0) return;

  const step = '#';

  for (let level = 1; level <= n; level++) {
    console.log(step.repeat(level));
  }
}

// --- Possible solution # 3 -- uses recursion ---

export function pyramid3(n: number) {
  if (n <= 0) return;
  pyramid3(n - 1);

  console.log('#'.repeat(n));
}
