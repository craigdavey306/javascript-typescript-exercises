// --- Variables ---

// const vs let

// 1. Variables of type number
const price: number = 19.99;
const pi = 3.14;

let discountPercentage = 0.5;
// The following would be an error:
// discountPercentage = "forty percent"; // <-- This would be a compilation error.

// 2. Variables of type string
const typescriptGreeting: string = 'Hello, TypeScript!';
const javascriptGreeting = 'Hello, JavaScript!';

let largestCity: string;
largestCity = 'Sitka';
// The following would be an error:
// largestCity = true;

// 3. Variables of type boolean
let isAvailable: boolean = true;
const isEnabled = false;
// The following would be an error:
// isAvailable = "of course!"

// --- Objects & Interfaces ---

interface Product {
  id: number;
  name: string;
  price: number;
}

const newProduct: Product = {
  id: 1,
  name: 'Book',
  price: 19.99,
};

/** // -- Example of an object that is incomplete and causes an error
const badProduct: Product = {
  id: 2,
  name: 'Incomplete',
};
*/

// --- Arrays ---

// examples using strings & numbers -

const names: string[] = ['Alice', 'Bob', 'Carol', 'David'];
// names = ["Alice"] // causes an error
names.push('Erica'); // <-- this is okay...

let scores = [85, 92, 70];
scores = [...scores, 75];

// array of objects
const products: Product[] = [
  { id: 1, name: 'Mystery Book', price: 9.99 },
  { id: 2, name: 'Harmonica', price: 25.89 },
  { id: 3, name: 'Water Bottle', price: 19.99 },
  { id: 4, name: 'Pens', price: 5.75 },
];

// filtering an array of objects
products
  .filter((product) => product.price < 10)
  .forEach((product) => console.log(product));
