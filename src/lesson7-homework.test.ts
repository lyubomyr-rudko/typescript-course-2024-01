import { describe, expect, it } from '@jest/globals';
import { getMostFrequentCharacter } from './lesson7-ex33';

describe('getMostFrequentCharacter', () => {
  it('returns the most frequent character in a string', () => {
    const result = getMostFrequentCharacter(
      'She sells seashells by the seashore.',
    );
    expect(result).toEqual('s');
  });
});
