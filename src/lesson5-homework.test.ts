import { describe, expect, it } from '@jest/globals';
import {
  generateArrOfNumAndStr,
  padLeft,
  rockPaperScissorsVins,
  exerciseA,
} from './lesson5-homework';

describe('generateArrOfNumAndStr', () => {
  it('should be defined', () => {
    expect(generateArrOfNumAndStr).toBeDefined();
  });

  it('function should generate array [1, 2, Fizz, 4, Buzz]', () => {
    expect(generateArrOfNumAndStr(5)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });
  it('function should generate array [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]', () => {
    expect(generateArrOfNumAndStr(15)).toStrictEqual([
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
  it('function should generate array [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13]', () => {
    expect(generateArrOfNumAndStr(13)).toStrictEqual([
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
    ]);
  });
  it('function should return empty array when set 0 to argument', () => {
    expect(generateArrOfNumAndStr(0)).toStrictEqual([]);
  });
});

describe('padLeft', () => {
  it('should be defined', () => {
    expect(padLeft).toBeDefined();
  });

  it('adds 2 spaces to the beginning of the  hello', () => {
    expect(padLeft('hello', 2)).toBe('  hello');
  });

  it('adds 5 spaces to the beginning of the  Liza', () => {
    expect(padLeft('Liza', 5)).toBe('     Liza');
  });

  it('adds 0 spaces to the beginning of the  empty string', () => {
    expect(padLeft('', 0)).toBe('');
  });

  it('adds abc  to the beginning of the  hello', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });

  it('adds 123  to the beginning of the  solid', () => {
    expect(padLeft('solid', '123')).toBe('123solid');
  });

  it('return empty string when set two empty strings', () => {
    expect(padLeft('', '')).toBe('');
  });
});

describe('rockPaperScissorsVins', () => {
  it('should be defined', () => {
    expect(rockPaperScissorsVins).toBeDefined();
  });

  it('vin when set rock to scissors', () => {
    expect(rockPaperScissorsVins('rock', 'scissors')).toBe(true);
  });
  it('not vin when set paper to scissors', () => {
    expect(rockPaperScissorsVins('paper', 'scissors')).toBe(false);
  });
  it('me and other vin when set rock to rock', () => {
    expect(rockPaperScissorsVins('rock', 'rock')).toBe(true);
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
