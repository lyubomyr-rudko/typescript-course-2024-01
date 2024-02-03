import { describe, expect, it } from '@jest/globals';
import { exercise33 } from './lesson7-homework';

const { getMostFrequentCharacter } = exercise33();

describe('getMostFrequentCharacter', () => {
  it('should be defined', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });

  it('must return a most frequent character', () => {
    expect(
      getMostFrequentCharacter('She sells seashells by the seashore.'),
    ).toBe('e');

    expect(getMostFrequentCharacter('aaabbc')).toBe('a');
  });

  it('must return an empty string', () => {
    expect(getMostFrequentCharacter('')).toBe('');
  });
});
