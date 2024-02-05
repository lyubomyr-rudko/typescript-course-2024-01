import { describe, expect, it } from '@jest/globals';
import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  it('should be defined', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });

  it('should return empty string for empty string', () => {
    expect(getMostFrequentCharacter('')).toBe('');
  });

  it('should return a most frequent character', () => {
    expect(getMostFrequentCharacter('aaabbcd')).toBe('a');
  });

  it('should return "t" for the string "test"', () => {
    expect(getMostFrequentCharacter('test')).toBe('t');
  });
});
