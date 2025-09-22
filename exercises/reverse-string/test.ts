import { reverse } from './index.ts';

interface ReverseStringTestCase {
  inputString: string;
  expected: string;
}

test('reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test.each<ReverseStringTestCase>([
  { inputString: 'apple', expected: 'elppa' },
  { inputString: 'abcd', expected: 'dcba' },
  { inputString: ' abcd', expected: 'dcba ' },
])(
  'reverses the string "$inputString" --> "$expected"',
  ({ inputString, expected }) => {
    const result = reverse(inputString);
    expect(result).toEqual(expected);
  }
);
