import { capitalize } from './index.ts';

interface CapitalizeTestCase {
  initial: string;
  expected: string;
}

test('capitalize function exists', () => {
  expect(typeof capitalize).toEqual('function');
});

test.each<CapitalizeTestCase>([
  { initial: 'a lazy fox', expected: 'A Lazy Fox' },
  {
    initial: 'hi there, how is it going?',
    expected: 'Hi There, How Is It Going?',
  },
  { initial: 'a hOT sUMMER dAY', expected: 'A HOT SUMMER DAY' },
])('capitalizes the first letter of every word', ({ initial, expected }) => {
  const capitalized = capitalize(initial);
  expect(capitalized).toEqual(expected);
});
