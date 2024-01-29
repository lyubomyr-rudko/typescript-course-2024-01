import {
  padLeft,
  rockPaperSizorsVins,
  // exerciseA,
  excerciseB,
} from './lesson5-homework';
import { describe, expect, it } from '@jest/globals';

describe('padLeft function', () => {
  it('should pad the string with spaces when n is a number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
    expect(padLeft('world', 2)).toBe('  world');
  });

  it('should pad the string with the given string when n is a string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
    expect(padLeft('world', '123')).toBe('123world');
  });

  it('should throw an error when n is an invalid type', () => {
    // Testing with invalid types
    // expect(() => padLeft('hello', true as string | number)).toThrow(
    //   'Invalid type for padding',
    // );
    // expect(() => padLeft('world', { n: 5 } as string | number)).toThrow(
    //   'Invalid type for padding',
    // );
  });
});

describe('rockPaperSizorsVins function', () => {
  it('should return false for invalid moves', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });

  it('should return true for valid moves', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });

  // it('should not allow invalid move types', () => {
  //   // @ts-expect-error
  //   expect(() => exportedFunction('papapaper', 'scissors')).toThrowError();
  // });
});

// jest.useFakeTimers();

// test('printMessagesWithTimeout prints messages with delay', async () => {
//   const consoleSpy = jest.spyOn(console, 'log');

//   const promise = exerciseA();

//   jest.runAllTimers();

//   await promise;

//   jest.runAllTimers();

//   expect(consoleSpy).toHaveBeenCalledWith('1');
//   expect(consoleSpy).toHaveBeenCalledWith('2');
//   expect(consoleSpy).toHaveBeenCalledWith('3');

//   consoleSpy.mockRestore();
// });

// afterAll(() => {
//   jest.useRealTimers();
// });

test('FizzBuzz for n = 5', () => {
  expect(excerciseB(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
});

test('excerciseB for n = 15', () => {
  expect(excerciseB(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});
