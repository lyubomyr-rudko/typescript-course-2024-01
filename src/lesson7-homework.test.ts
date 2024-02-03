import { describe, expect, it } from '@jest/globals';
import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  it('should be defined', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });

  it('should return -s- for She sells seashells by the seashore. string', () => {
    expect(
      getMostFrequentCharacter('She sells seashells by the seashore.'),
    ).toBe('s');
  });
  it('should return empty string for empty string', () => {
    expect(getMostFrequentCharacter('')).toBe('');
  });
  it('should return -b- for Bambbaleylo', () => {
    expect(getMostFrequentCharacter('Bambbaleylo')).toBe('b');
  });
  it('should return -s- for Twas the night before Christmas', () => {
    expect(getMostFrequentCharacter('Twas the night before Christmas')).toBe(
      't',
    );
  });
});
