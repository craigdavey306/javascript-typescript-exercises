import { jest } from '@jest/globals';
import { fizzBuzz } from './index.ts';

let log: jest.Spied<typeof console.log>;

test('fizzBuzz function exists', () => {
  expect(fizzBuzz).toBeDefined();
});

describe('fizzBuzz tests', () => {
  beforeEach(() => {
    log = jest.spyOn(console, 'log').mockImplementation((message) => message);
  });

  afterEach(() => {
    log.mockRestore();
  });

  test('Calling fizzBuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);
    expect(log.mock.calls.length).toEqual(5);
  });

  test('Calling fizzBuzz with 15 prints out the correct values', () => {
    fizzBuzz(15);

    expect(log.mock.calls[0]?.[0]).toEqual(1);
    expect(log.mock.calls[1]?.[0]).toEqual(2);
    expect(log.mock.calls[2]?.[0]).toEqual('fizz');
    expect(log.mock.calls[3]?.[0]).toEqual(4);
    expect(log.mock.calls[4]?.[0]).toEqual('buzz');
    expect(log.mock.calls[5]?.[0]).toEqual('fizz');
    expect(log.mock.calls[6]?.[0]).toEqual(7);
    expect(log.mock.calls[7]?.[0]).toEqual(8);
    expect(log.mock.calls[8]?.[0]).toEqual('fizz');
    expect(log.mock.calls[9]?.[0]).toEqual('buzz');
    expect(log.mock.calls[10]?.[0]).toEqual(11);
    expect(log.mock.calls[11]?.[0]).toEqual('fizz');
    expect(log.mock.calls[12]?.[0]).toEqual(13);
    expect(log.mock.calls[13]?.[0]).toEqual(14);
    expect(log.mock.calls[14]?.[0]).toEqual('fizzbuzz');
  });
});
