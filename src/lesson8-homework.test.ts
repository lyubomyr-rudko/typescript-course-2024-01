import { describe, expect, it } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('remove the duplicates from the array', () => {
    const received = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(removeDuplicates(received)).toEqual(expected);
  });
});

describe('getIntersection', () => {
  it('should be defined', () => {
    expect(getIntersection).toBeDefined();
  });

  it('returns an intersection of two arrays', () => {
    const expected = [3, 4];
    expect(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])).toEqual(expected);
  });
});
