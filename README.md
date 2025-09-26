# Learning JavaScript / TypeScript

This repository can be used for practicing with JavaScript/TypeScript.

## Getting Started

Download the repository to your local client, and install the dependencies:

```bash
npm install
```

### Learning

The `examples` directory has examples of different topics such as:

- booleans
- classes
- numbers
- objects
- program structure

To run any of the example files from the command line:

```bash
node --no-warnings=ExperimentalWarning --loader ts-node/esm examples/<file>.ts
```

### Practicing

The `exercises` directory has different functions where you can practice programming. To do so, add your logic to the function, and then run the [Jest](https://jestjs.io/) tests for the function. Each test is named "test:name" where "name" represents the exercise name. If you are stuck, then you can look for the solution in the `exercise-solutions` directory.

The `index.ts` file is the source file you should edit, and the `test.ts` file where the tests are written.

As an example, to run the tests for the reverse-string function:

```bash
npm run test:reversestring
```

Please note that the script names omit `-` from the file names as demonstrated above with the reverse-string example.

You can also test your code from the command line using the following:

```bash
node --no-warnings=ExperimentalWarning --loader ts-node/esm exercises/<file>.ts
```
