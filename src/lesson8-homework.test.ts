import { expect, it, describe } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('function check removeDuplicates', () => {
    expect(removeDuplicates).toBeDefined();
  });
  it('removes duplicates from an array of strings', () => {
    const input = ['apple', 'banana', 'apple', 'orange', 'banana'];
    expect(removeDuplicates(input)).toEqual(['apple', 'banana', 'orange']);
  });
  it('returns an empty array when given an empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});

describe('getIntersection', () => {
  it('function check getIntersection', () => {
    expect(getIntersection).toBeDefined();
  });
  it('should return intersection of two arrays', () => {
    expect(getIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  it('should return empty array if there is no intersection', () => {
    expect(getIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should handle arrays with different types', () => {
    expect(getIntersection([1, 2, 3], ['3', '4', 3])).toEqual([3]);
  });

  it('should return empty array if one or both arrays are empty', () => {
    expect(getIntersection([], [1, 2, 3])).toEqual([]);
    expect(getIntersection([1, 2, 3], [])).toEqual([]);
    expect(getIntersection([], [])).toEqual([]);
  });
});
