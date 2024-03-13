import { describe, expect, it } from '@jest/globals';
import { exercise21, exerciseA, exerciseB } from './lesson5-homework';

describe('rockPaperScissorsWins', () => {
  it('returns true for rock vs scissors', () => {
    const { rockPaperSizorsVins } = exercise21();
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });

  it('returns false for paper vs scissors', () => {
    const { rockPaperSizorsVins } = exercise21();
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });

  it('returns true for same moves', () => {
    const { rockPaperSizorsVins } = exercise21();
    expect(rockPaperSizorsVins('rock', 'rock')).toBe(true);
    expect(rockPaperSizorsVins('paper', 'paper')).toBe(true);
    expect(rockPaperSizorsVins('scissors', 'scissors')).toBe(true);
  });
});

describe('exersizeA', () => {
  it('should be defined', () => {
    expect(exerciseA).toBeDefined();
  });
  it('should resolve after specified delay', async () => {
    const delay = 1000;
    const startTime = Date.now();
    await exerciseA(delay);
    const endTime = Date.now();
    const elapsed = endTime - startTime;
    expect(elapsed).toBeGreaterThanOrEqual(delay);
  });
});

describe('excerciseB', () => {
  it('should be defined', () => {
    expect(exerciseB).toBeDefined();
  });

  it('should return the correct FizzBuzz array when n is 5', () => {
    const expected = [1, 2, 'Fizz', 4, 'Buzz'];
    expect(exerciseB(5)).toEqual(expect.arrayContaining(expected));
  });

  it('should return the correct FizzBuzz array when n is 15', () => {
    expect(exerciseB(15)).toEqual([
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
