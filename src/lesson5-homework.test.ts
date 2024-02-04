import { describe, expect, it } from '@jest/globals';
import {
  padLeft,
  rockPaperScissorsVins,
  exerciseA,
  exerciseB,
} from './lesson5-homework';

describe('padLeft', () => {
  it('should be defined', () => {
    expect(padLeft).toBeDefined();
  });

  it('should be pad with spaces when n is a number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
    expect(padLeft('Jack', 6)).toBe('      Jack');
  });

  it('should be pad 0 spaces to the beginning of the  empty string', () => {
    expect(padLeft('', 0)).toBe('');
  });

  it('should concatenate the string when n is a string', () => {
    const result = padLeft('hello', 'abc');
    expect(result).toBe('abchello');
  });
});

describe('rockPaperScissorsVins', () => {
  it('should be defined', () => {
    expect(rockPaperScissorsVins).toBeDefined();
  });

  it('should return true for rock vs scissors', () => {
    expect(rockPaperScissorsVins('rock', 'scissors')).toBe(true);
  });

  it('should return false for paper vs scissors', () => {
    expect(rockPaperScissorsVins('paper', 'scissors')).toBe(false);
  });

  it('should return true for same moves', () => {
    expect(rockPaperScissorsVins('paper', 'paper')).toBe(true);
  });
});

describe('exerciseA', () => {
  it('should be defined', () => {
    expect(exerciseA).toBeDefined();
  });

  it('should print in console 3 times from 1 to 3', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const consoleLogMock = jest.spyOn(console, 'log');
    exerciseA();

    jest.runAllTimers();
    setTimeout(() => {
      expect(consoleLogMock).toHaveBeenCalledWith('1');
      expect(consoleLogMock).toHaveBeenCalledWith('2');
      expect(consoleLogMock).toHaveBeenCalledWith('3');
      consoleLogMock.mockRestore();
    }, 0);
  });
});

describe('exerciseB', () => {
  it('should be defined', () => {
    expect(exerciseB).toBeDefined();
  });

  it('should return correct output for n = 5', () => {
    const result = exerciseB(5);
    expect(result).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('should generate array [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]', () => {
    expect(exerciseB(15)).toStrictEqual([
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

  it('should return empty array when set 0 to argument', () => {
    expect(exerciseB(0)).toStrictEqual([]);
  });
});
