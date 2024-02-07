import { describe, expect, it } from '@jest/globals';
import { getIntersection, removeDuplicates } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should remove duplicate elements from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 4, 1];
    const expected = [1, 2, 3, 4];
    expect(removeDuplicates(arr)).toEqual(expected);
  });

  it('should remove duplicate elements from an array of strings', () => {
    const arr = ['a', 'b', 'b', 'c', 'a', 'd'];
    const expected = ['a', 'b', 'c', 'd'];
    expect(removeDuplicates(arr)).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const arr: number[] = [];
    const expected: number[] = [];
    expect(removeDuplicates(arr)).toEqual(expected);
  });

  it('should preserve the original array order', () => {
    const arr = [3, 1, 2, 1, 4];
    const expected = [3, 1, 2, 4];
    expect(removeDuplicates(arr)).toEqual(expected);
  });
});

describe('getIntersection', () => {
  it('should return the intersection of two arrays with different data types', () => {
    const arr1 = [1, 2, 3, 'a', 'b'];
    const arr2 = [2, 3, 'a', 'c'];
    const expected = [2, 3, 'a'];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });

  it('should handle duplicate elements correctly', () => {
    const arr1 = [1, 2, 2, 3, 4];
    const arr2 = [2, 3, 3, 4, 5];
    const expected = [2, 3, 4];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });

  it('should be case-insensitive for strings', () => {
    const arr1 = ['A', 'B', 'C'];
    const arr2 = ['b', 'c', 'A'];
    expect(getIntersection(arr1, arr2)).toEqual(['A']);
  });
});
