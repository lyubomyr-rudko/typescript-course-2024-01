import { describe, expect, it } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('removes duplicates from an array', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it('works with arrays containing strings', () => {
    expect(
      removeDuplicates([
        'apple',
        'banana',
        'orange',
        'banana',
        'kiwi',
        'apple',
      ]),
    ).toEqual(['apple', 'banana', 'orange', 'kiwi']);
  });

  it('works with arrays containing mixed types', () => {
    expect(removeDuplicates([1, 'apple', true, 'apple', 2, true])).toEqual([
      1,
      'apple',
      true,
      2,
    ]);
  });

  it('returns an empty array if input array is empty', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('returns the same array if there are no duplicates', () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('getIntersection', () => {
  it('should be defined', () => {
    expect(getIntersection).toBeDefined();
  });

  it('returns intersection of two arrays', () => {
    expect(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])).toEqual([3, 4]);
  });

  it('returns empty array if no intersection', () => {
    expect(getIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('returns empty array if one or both arrays are empty', () => {
    expect(getIntersection([], [1, 2, 3])).toEqual([]);
    expect(getIntersection([1, 2, 3], [])).toEqual([]);
    expect(getIntersection([], [])).toEqual([]);
  });

  it('works with arrays of strings', () => {
    expect(
      getIntersection(
        ['apple', 'banana', 'orange'],
        ['banana', 'kiwi', 'orange'],
      ),
    ).toEqual(['banana', 'orange']);
  });
});
