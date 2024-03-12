import { removeDuplicates, getIntersection } from '../lesson8-homework';
import { describe, expect } from '@jest/globals';

describe('removeDuplicates', () => {
  it('removes duplicates from tge arr of numbers', () => {
    const input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(removeDuplicates(input)).toEqual(expected);
  });

  it('removes duplicates from an array of strings', () => {
    const input = ['z', 'x', 'c', 'v', 'z', 'x', 'c'];
    const result = ['z', 'x', 'c', 'v'];
    expect(removeDuplicates(input)).toEqual(result);
  });

  it('returns undefined for an empty input array', () => {
    const input: unknown[] = [];
    const result = removeDuplicates(input);
    expect(result).toBeUndefined();
  });
});

describe('getIntersection', () => {
  it('returns the intersection of two arrays of numbers', () => {
    const arr1 = [8, 3, 2, 4, 2];
    const arr2 = [7, 3, 4, 5, 3];
    const expected = [3, 4];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });

  it('returns the intersection of two arrays of strings', () => {
    const arr1 = ['apple', 'orange', 'banana'];
    const arr2 = ['banana', 'kiwi', 'orange'];
    const expected = ['orange', 'banana'];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });

  it('returns an empty array for arrays with no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const result = getIntersection(arr1, arr2);
    expect(result).toEqual([]);
  });
});
