import { anagrams } from './index.ts';

interface AnagramTestCase {
  firstStr: string;
  secondStr: string;
  isAnagram: boolean;
}

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

const tests: AnagramTestCase[] = [
  { firstStr: 'hello', secondStr: 'llohe', isAnagram: true },
  { firstStr: 'one two', secondStr: 'three four', isAnagram: false },
  { firstStr: 'Whoa! Hi!', secondStr: 'Hi! Whoa!', isAnagram: true },
  {
    firstStr: 'A tree, a bench, a dog, a walk',
    secondStr: 'A tree, a life, a dog, a walk',
    isAnagram: false,
  },
];

const isAnagramFilter = (test: AnagramTestCase) => test.isAnagram;

test.each<AnagramTestCase>(tests.filter(isAnagramFilter))(
  'whether $firstStr and $secondStr are anagrams',
  ({ firstStr, secondStr }) => {
    const result = anagrams(firstStr, secondStr);
    expect(result).toBeTruthy();
  }
);

test.each<AnagramTestCase>(tests.filter((test) => !isAnagramFilter(test)))(
  'whether $firstStr and $secondStr are not anagrams',
  ({ firstStr, secondStr }) => {
    const result = anagrams(firstStr, secondStr);
    expect(result).toBeFalsy();
  }
);
