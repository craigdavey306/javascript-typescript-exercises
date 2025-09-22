import { maxChar } from './index.ts';

interface MaxCharTestCase {
  inputString: string;
  expected: string;
}

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test.each<MaxCharTestCase>([
  { inputString: 'abccccccccdaaccd', expected: 'c' },
  { inputString: 'apple', expected: 'p' },
  { inputString: 'abcd1212122223', expected: '2' },
  { inputString: 'studio', expected: 's' },
  { inputString: 'a', expected: 'a' },
])(
  'finds the most frequently used character "$expected" in "$inputString"',
  ({ inputString, expected }) => {
    const result = maxChar(inputString);
    expect(result).toEqual(expected);
  }
);
