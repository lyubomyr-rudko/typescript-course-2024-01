import { describe, expect, it } from '@jest/globals';
import {
  excerciseB,
  padLeft,
  rockPaperSizorsVins,
  printMessagesWithTimeout,
} from './lesson5-homework';

describe('padLeft', () => {
  it('pads with spaces when n is a number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
    expect(padLeft('world', 10)).toBe('          world');
  });

  it('pads with the given string when n is a string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
    expect(padLeft('test', 'xyz!')).toBe('xyz!test');
  });
});

describe('rockPaperScissorsWins', () => {
  it('returns true for rock vs scissors', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });

  it('returns false for paper vs scissors', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });

  it('returns true for same moves', () => {
    expect(rockPaperSizorsVins('rock', 'rock')).toBe(true);
    expect(rockPaperSizorsVins('paper', 'paper')).toBe(true);
    expect(rockPaperSizorsVins('scissors', 'scissors')).toBe(true);
  });
});

describe('with mock timers', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should print 1, 2, 3', async () => {
    const mock = jest.spyOn(console, 'log').mockImplementation();

    printMessagesWithTimeout();

    await jest.advanceTimersByTime(1000);
    expect(mock).toHaveBeenCalledWith('1');

    await jest.advanceTimersByTime(1000);
    expect(mock).toHaveBeenCalledWith('2');

    await jest.advanceTimersByTime(1000);
    expect(mock).toHaveBeenCalledWith('3');

    mock.mockRestore();
  });
});

describe('fizzbuzz', () => {
  it('generates the correct sequence for n = 5', () => {
    expect(excerciseB(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('generates the correct sequence for n = 15', () => {
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

  it('handles numbers divisible by both 3 and 5', () => {
    expect(excerciseB(15)[14]).toBe('FizzBuzz');
  });

  it('handles numbers divisible by 3', () => {
    expect(excerciseB(3)[2]).toBe('Fizz');
  });

  it('handles numbers divisible by 5', () => {
    expect(excerciseB(5)[4]).toBe('Buzz');
  });

  it('handles numbers not divisible by 3 or 5', () => {
    expect(excerciseB(1)[0]).toBe(1);
  });
});
