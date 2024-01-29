import { describe, expect, it } from '@jest/globals';
import {
  padLeft,
  rockPaperSizorsVins,
  excerciseB,
  exerciseA,
} from './lesson5-homework';

describe('padLeft', () => {
  it('should be defined', () => {
    expect(padLeft).toBeDefined();
  });
  it('padLeft string + number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
  });
  it('padLeft string + string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });
});

describe('rockPaperSizorsVins', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });
  it('rock  and paper', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
  });
  it('paper  and scissors', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });
  it('scissors  and rock', () => {
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });
  it('rock  and scissors', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });
});

describe('exerciseA', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });

  it('should print  in console 3 times from 1 to 3', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const consoleLogMok = jest.spyOn(console, 'log');
    exerciseA();
    setTimeout(() => {
      expect(consoleLogMok).toHaveBeenCalledWith('1');
      expect(consoleLogMok).toHaveBeenCalledWith('2');
      expect(consoleLogMok).toHaveBeenCalledWith('3');
      consoleLogMok.mockRestore();
    }, 0);
  });
});

describe('excerciseB', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });
  it('should array generate', () => {
    expect(excerciseB(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
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
});
