import { describe, expect, it } from '@jest/globals';

import {
  padLeft,
  rockPaperSizorsVins,
  printMessagesWithTimeout,
  excerciseB,
} from './hw5-test';

describe('padLeft function', () => {
  it('should pad the string with spaces if n is a number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
  });

  it('should pad the string with the given string if n is a string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });
});

describe('rockPaperSizorsVins function', () => {
  it('should return false when me is "rock" and other is "paper"', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
  });

  it('should return false when me is "paper" and other is "scissors"', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });

  it('should return false when me is "scissors" and other is "rock"', () => {
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });

  it('should return true when me is "rock" and other is "scissors"', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });

  // Additional test cases
  it('should return true when me and other are the same (rock)', () => {
    expect(rockPaperSizorsVins('rock', 'rock')).toBe(true);
  });

  it('should return true when me and other are the same (paper)', () => {
    expect(rockPaperSizorsVins('paper', 'paper')).toBe(true);
  });

  it('should return true when me and other are the same (scissors)', () => {
    expect(rockPaperSizorsVins('scissors', 'scissors')).toBe(true);
  });
});

describe('printMessagesWithTimeout', () => {
  it('should print messages with correct delay', async () => {
    jest.setTimeout(5000);

    const consoleSpy = jest.spyOn(console, 'log');
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setTimeoutSpy.mockImplementation((callback) => {
      callback();
      return 1;
    });

    await printMessagesWithTimeout();

    expect(setTimeoutSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenCalledWith('1');
    expect(consoleSpy).toHaveBeenCalledWith('2');
    expect(consoleSpy).toHaveBeenCalledWith('3');

    consoleSpy.mockRestore();
    setTimeoutSpy.mockRestore();
  });
});

describe('excerciseB', () => {
  it('should generate the correct array for n = 5', () => {
    const result = excerciseB(5);
    expect(result).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('should generate the correct array for n = 15', () => {
    const result = excerciseB(15);
    expect(result).toEqual([
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

  it('should generate an empty array for n = 0', () => {
    const result = excerciseB(0);
    expect(result).toEqual([]);
  });

  it('should generate the correct array for n = 20', () => {
    const result = excerciseB(20);
    expect(result).toEqual([
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
      16,
      17,
      'Fizz',
      19,
      'Buzz',
    ]);
  });
});
