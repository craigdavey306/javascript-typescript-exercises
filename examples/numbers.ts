// --- Numbers ---

const integer = 1;
const float = 1.0;

const pi: number = 3.14;
const e: number = 2.718;

const million = 1_000_000;

// --- Mathematical Operations ---

console.log(4 + 2);
console.log(4 - 2);
console.log(4 * 2);
console.log(4 / 2);
console.log(4 % 2);

// --- Converting a string to a number ---

console.log('parsing an integer: ', parseInt('10'));
console.log('parsing a float: ', parseFloat('10.1'));

// --- Array of numbers ---

const temperatures: number[] = [70, 100, 32.0, 33.5, 57.3, 87.3, 2, -3];

// filter even temperatures
const evenTemps = temperatures.filter((temp) => temp % 2 === 0);
console.log(evenTemps);

// filter positive temperatures
const positiveTemps = temperatures.filter((temp) => temp > 0);
console.log(positiveTemps);
