import { describe, expect, it } from '@jest/globals';
import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  it('should return the most frequent character in a string', () => {
    const str = 'hello world';
    expect(getMostFrequentCharacter(str)).toBe('l');
  });

  it('should handle multiple equally frequent characters', () => {
    const str = 'abba';
    expect(getMostFrequentCharacter(str)).toBe('a');
  });

  it('should return an empty string for an empty string', () => {
    expect(getMostFrequentCharacter('')).toBe('');
  });

  it('should be case-insensitive', () => {
    const str = 'HeLlO';
    expect(getMostFrequentCharacter(str)).toBe('l');
  });

  it('should ignore non-alphanumeric characters', () => {
    const str = 'Hello, world!';
    expect(getMostFrequentCharacter(str)).toBe('l');
  });
});
