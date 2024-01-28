import { describe, expect, it } from '@jest/globals';
import { padLeft, rockPaperSizorsVins } from './hw5-test';

describe('padLeft function', () => {
  it('should pad the string with spaces if n is a number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
  });

  it('should pad the string with the given string if n is a string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });

  // it('should throw a compile time error if n is neither a number nor a string', () => {
  //   // @ts-expect-error: Testing error case with incorrect type
  //   expect(() => padLeft('hello', true)).toThrowErrorMatchingSnapshot();
  // });
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
