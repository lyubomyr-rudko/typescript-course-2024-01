import { describe, expect, it } from '@jest/globals';
import {
  exercise20,
  exercise21,
  exerciseA,
  excerciseB,
} from './lesson5-homework';

const { padLeft } = exercise20();
const { rockPaperSizorsVins } = exercise21();
const { printMessagesWithTimeout } = exerciseA();
const { fizzBuzz } = excerciseB();

describe('padLeft', () => {
  it('should be defined', () => {
    expect(padLeft).toBeDefined();
  });

  it('if n is a number, pad the string with spaces', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
    expect(padLeft('apple', 0)).toBe('apple');
    expect(padLeft('', 0)).toBe('');
    expect(padLeft('', 5)).toBe('     ');
  });

  it('if n is a string, pad the string with the given string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
    expect(padLeft('', 'abc')).toBe('abc');
    expect(padLeft('', '111')).toBe('111');
    expect(padLeft('', '')).toBe('');
  });
});

describe('rockPaperSizorsVins', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });

  it('if me is rock and other is paper or me is paper and other is scissors or me is scissors and other is rock --> return false', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });

  it('if me is rock and other is scissors or me is scissors and other is paper or me is paper and other is rock --> return true', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
    expect(rockPaperSizorsVins('scissors', 'paper')).toBe(true);
    expect(rockPaperSizorsVins('paper', 'rock')).toBe(true);
  });
});

// describe('printMessagesWithTimeout', () => {
//   jest.useFakeTimers();

//   it('should print to console "1", "2", "3"', async () => {
//     jest.spyOn(global, 'setTimeout');
//     const consoleLogSpy = jest.spyOn(console, 'log');

//     printMessagesWithTimeout(3);

//     expect(consoleLogSpy).not.toHaveBeenCalledWith('1');

//     jest.advanceTimersByTime(1000);

//     expect(consoleLogSpy).toHaveBeenCalledWith('1');

//     jest.runAllTimers();

//     setTimeout(() => {
//       expect(consoleLogSpy).toHaveBeenCalledWith('2');
//       expect(consoleLogSpy).toHaveBeenCalledWith('3');
//       consoleLogSpy.mockRestore();
//     }, 0);
//   });
// });
describe('printMessagesWithTimeout', () => {
  jest.useFakeTimers();

  it('should print to console "1", "2", "3"', async () => {
    jest.spyOn(global, 'setTimeout');
    const consoleLogSpy = jest.spyOn(console, 'log');

    printMessagesWithTimeout(3);

    jest.runAllTimers();

    expect(printMessagesWithTimeout(3)).resolves.toEqual('1');
    expect(printMessagesWithTimeout(3)).resolves.toEqual('2');
    expect(printMessagesWithTimeout(3)).resolves.toEqual('3');
  });
});

describe('fizzBuzz', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });

  it('3 --> "Fizz", 5 --> "Buzz", 15 --> "FizzBuzz"', () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    expect(fizzBuzz(15)).toEqual([
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
    expect(fizzBuzz(0)).toEqual([]);
  });
});
