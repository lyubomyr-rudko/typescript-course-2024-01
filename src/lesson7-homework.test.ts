// lesson7-homework.test.ts
import { describe, expect, it } from '@jest/globals';
import { exercise33 } from './lesson7-homework';

const getMostFrequentCharacter = exercise33();

describe('getMostFrequentCharacter', () => {
  it('returns the most frequent character in a string', () => {
    const result = getMostFrequentCharacter(
      'She sells seashells by the seashore.',
    );
    expect(result).toEqual('s');
  });
});
