import { describe, expect, it } from '@jest/globals';
import { padLeft, rockPaperSizorsVins, excerciseB } from './lesson5-homework';

describe('padLeft', () => {
  it('should be defined', () => {
    expect(padLeft).toBeDefined();
  });
  it('padLeft', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });
});

describe('rockPaperSizorsVins', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });
  it('rockPaperSizorsVins', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });
});

// describe('later', () => {
//   jest.useFakeTimers();
//   it('should be defined', () => {
//     expect(rockPaperSizorsVins).toBeDefined();
//   });
//   it('later', () => {
//     expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
//     expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
//     expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
//     expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
//   });
// });

describe('excerciseB', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });
  it('excerciseB', () => {
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
