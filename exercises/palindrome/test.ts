import { palindrome } from './index.ts';

interface PalindromeTestCase {
  inputString: string;
  isPalindrome: boolean;
}

const isPalindromeFilter = (test: PalindromeTestCase) => test.isPalindrome;

test('palindrome function exists', () => {
  expect(typeof palindrome).toEqual('function');
});

const tests: PalindromeTestCase[] = [
  { inputString: 'madam', isPalindrome: true },
  { inputString: ' madam', isPalindrome: false },
  { inputString: 'civic', isPalindrome: true },
  { inputString: 'dog', isPalindrome: false },
  { inputString: '100001', isPalindrome: true },
  { inputString: 'noon', isPalindrome: true },
  { inputString: 'nine', isPalindrome: false },
];

test.each<PalindromeTestCase>(tests.filter(isPalindromeFilter))(
  'checks "$inputString" is a palindrome',
  ({ inputString }) => {
    const result = palindrome(inputString);
    expect(result).toBeTruthy();
  }
);

test.each<PalindromeTestCase>(
  tests.filter((test) => !isPalindromeFilter(test))
)('checks "$inputString" is not a palindrome', ({ inputString }) => {
  const result = palindrome(inputString);
  expect(result).toBeFalsy();
});
