import { jest } from '@jest/globals';
import { pyramid } from './index.ts';

let log: jest.Spied<typeof console.log>;

test('fizzBuzz function exists', () => {
  expect(pyramid).toBeDefined();
});

describe('pyramid tests', () => {
  beforeEach(() => {
    log = jest.spyOn(console, 'log').mockImplementation((message) => message);
  });

  afterEach(() => {
    log.mockRestore();
  });

  test('prints a pyramid for n = 1', () => {
    const n = 1;

    pyramid(n);
    expect(log.mock.calls.length).toEqual(n);
    expect(log.mock.calls[0]?.[0]).toEqual('#');
  });

  test('prints a pyramid for n = 2', () => {
    const n = 2;

    pyramid(n);
    expect(log.mock.calls.length).toEqual(n);
    expect(log.mock.calls[0]?.[0]).toEqual('#');
    expect(log.mock.calls[1]?.[0]).toEqual('##');
  });

  test('prints a pyramid for n = 3', () => {
    const n = 3;

    pyramid(n);
    expect(log.mock.calls.length).toEqual(n);
    expect(log.mock.calls[0]?.[0]).toEqual('#');
    expect(log.mock.calls[1]?.[0]).toEqual('##');
    expect(log.mock.calls[2]?.[0]).toEqual('###');
  });

  test('prints a pyramid for n = 7', () => {
    const n = 7;

    pyramid(n);

    expect(log.mock.calls.length).toEqual(n);
    expect(log.mock.calls[0]?.[0]).toEqual('#');
    expect(log.mock.calls[1]?.[0]).toEqual('##');
    expect(log.mock.calls[2]?.[0]).toEqual('###');
    expect(log.mock.calls[3]?.[0]).toEqual('####');
    expect(log.mock.calls[4]?.[0]).toEqual('#####');
    expect(log.mock.calls[5]?.[0]).toEqual('######');
    expect(log.mock.calls[6]?.[0]).toEqual('#######');
  });
});
