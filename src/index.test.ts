import { describe, expect, it } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('returns [1, 2, 3, 4, 5]', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toStrictEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it('must contain 4', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toContain(4);
  });
});

describe('getIntersection', () => {
  it('should be defined', () => {
    expect(getIntersection).toBeDefined();
  });

  it('returns [3, 4]', () => {
    expect(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])).toStrictEqual([
      3, 4,
    ]);
  });

  it('must contain 4', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toContain(4);
  });
});
