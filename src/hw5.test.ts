import { describe, expect, it } from '@jest/globals';
import {
  padLeft,
  rockPaperSizorsVins,
  printMessagesWithTimeout,
  excerciseB,
} from './lesson5-homework';

describe('padLeft', () => {
  it('should pad a string with spaces when n is a number', () => {
    const result = padLeft('hello', 4);
    expect(result).toBe('    hello');
  });

  it('should concatenate the string when n is a string', () => {
    const result = padLeft('hello', 'abc');
    expect(result).toBe('abchello');
  });

  it('should throw an error for invalid n', () => {
    expect(() => {
      padLeft('hello', true);
    }).toThrow('Invalid n'); 
  }); //цей тест відає error
});

describe('rockPaperSizorsVins', () => {
  it('should return false if me is rock and other is paper', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
  });

  it('should return false if me is paper and other is scissors', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });

  it('should return false if me is scissors and other is rock', () => {
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });

  it('should return true if me is rock and other is scissors', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });

  it('should return true if me is scissors and other is paper', () => {
    expect(rockPaperSizorsVins('scissors', 'paper')).toBe(true);
  });

  it('should return true if me is paper and other is rock', () => {
    expect(rockPaperSizorsVins('paper', 'rock')).toBe(true);
  });
});

jest.useFakeTimers();

test('printMessagesWithTimeout prints messages with a delay of 1 second', () => {
  const consoleLog = jest.spyOn(console, 'log');

  printMessagesWithTimeout();

  expect(consoleLog).not.toHaveBeenCalled();
  jest.advanceTimersByTime(1000);
  expect(consoleLog).toHaveBeenCalledWith('1');
  jest.advanceTimersByTime(1000);
  expect(consoleLog).toHaveBeenCalledWith('2');
  jest.advanceTimersByTime(1000);
  expect(consoleLog).toHaveBeenCalledWith('3');

  consoleLog.mockRestore();
});

afterAll(() => {
  jest.useRealTimers(); 
});

describe('excerciseB', () => {
  test('returns correct output for n = 5', () => {
    const result = excerciseB(5);
    expect(result).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  test('returns correct output for n = 15', () => {
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

  test('returns an empty array when n is 0', () => {
    const result = excerciseB(0);
    expect(result).toEqual([]);
  });

  test('returns correct output for n = 30', () => {
    const result = excerciseB(30);
    expect(result[2]).toBe('Fizz');
    expect(result[4]).toBe('Buzz');
    expect(result[8]).toBe('Fizz');
    expect(result[9]).toBe('Buzz');
    expect(result[14]).toBe('FizzBuzz');
    expect(result[29]).toBe('FizzBuzz');
  });
});
