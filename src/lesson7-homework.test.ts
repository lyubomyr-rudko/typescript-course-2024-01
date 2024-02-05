import { describe, expect, it } from '@jest/globals';
import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  it('should be defined', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });
  it('returns a most frequent character', () => {
    expect(
      getMostFrequentCharacter('She sells seashells by the seashore.'),
    ).toBe('s');
  });
});
