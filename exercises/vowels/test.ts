import { vowels } from './index.ts';

interface VowelsTestCase {
  inputString: string;
  expectedResult: number;
}

test('vowels function exists', () => {
  expect(typeof vowels).toEqual('function');
});

test.each<VowelsTestCase>([
  { inputString: 'aeiou', expectedResult: 5 },
  { inputString: 'AEIOU', expectedResult: 5 },
  { inputString: 'Why?', expectedResult: 0 },
  { inputString: 'Are you sure?', expectedResult: 6 },
  { inputString: 'abcdefghijklmnopqrstuvwxyz', expectedResult: 5 },
])(
  'returns the number of vowels that exist for the input: $inputString',
  ({ inputString, expectedResult }) => {
    const result = vowels(inputString);
    expect(result).toEqual(expectedResult);
  }
);
