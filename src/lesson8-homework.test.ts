import { describe, expect, it } from '@jest/globals';

import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('should remove duplicates from array of numbers', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it('should remove duplicates from array of strings', () => {
    expect(
      removeDuplicates(['a', 'b', 'c', 'a', 'a', 'b', 'c', 'e', 'y']),
    ).toEqual(['a', 'b', 'c', 'e', 'y']);
  });

  it('should return empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});

describe('getIntersection', () => {
  it('should be defined', () => {
    expect(getIntersection).toBeDefined();
  });

  it('should get intersection of two arrays of numbers', () => {
    expect(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])).toEqual([3, 4]);
  });

  it('should get intersection of two arrays of strings', () => {
    expect(getIntersection(['a', 'v', 'r', 'e'], ['a', 't', 'e', 'q'])).toEqual(
      ['a', 'e'],
    );
  });

  it('should return empty array', () => {
    expect(getIntersection([], [])).toEqual([]);
  });
});
