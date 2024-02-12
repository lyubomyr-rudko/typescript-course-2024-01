import { describe, expect, it } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should remove duplicates from an array of numbers', () => {
    const result = removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should remove duplicates from an array of strings', () => {
    const result = removeDuplicates([
      'apple',
      'orange',
      'banana',
      'apple',
      'kiwi',
    ]);
    expect(result).toEqual(['apple', 'orange', 'banana', 'kiwi']);
  });

  it('should handle an empty array', () => {
    const result = removeDuplicates([]);
    expect(result).toEqual([]);
  });
});
describe('getIntersection', () => {
  it('should find the intersection of two arrays of numbers', () => {
    const result = getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3]);
    expect(result).toEqual([3, 4]);
  });

  it('should find the intersection of two arrays of strings', () => {
    const result = getIntersection(
      ['apple', 'orange', 'banana'],
      ['banana', 'kiwi', 'apple'],
    );
    expect(result).toEqual(['apple', 'banana']);
  });

  it('should handle empty arrays', () => {
    const result = getIntersection([], []);
    expect(result).toEqual([]);
  });

  it('should handle arrays with no intersection', () => {
    const result = getIntersection([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
  });
});
