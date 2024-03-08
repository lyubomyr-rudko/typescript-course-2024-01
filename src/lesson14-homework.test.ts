import { describe, expect, it } from '@jest/globals';
import { excerciseA, excerciseB, excerciseC } from './lesson14-homework';

describe('exerciseA', () => {
  it('returns 0 for empty array', () => {
    expect(excerciseA([])).toEqual(0);
  });

  it('returns 0 for array with one element', () => {
    expect(excerciseA([1])).toEqual(0);
  });

  it('calculates sum correctly for valid array', () => {
    expect(excerciseA([6, 2, 1, 8, 10])).toEqual(16); // 2 + 1 + 8 = 11
  });

  it('calculates sum correctly with duplicate values', () => {
    expect(excerciseA([1, 1, 11, 2, 3])).toEqual(6); // 2 + 3 = 5
  });

  it('handles negative numbers correctly', () => {
    expect(excerciseA([-1, 2, 5])).toEqual(2); // 2 + 5 = 7
  });
});

describe('excerciseB', () => {
  it('returns empty array for empty array or null input', () => {
    expect(excerciseB([])).toEqual([]);
  });

  it('calculates counts and sums correctly', () => {
    expect(excerciseB([1, 2, 3, 4, 5, -11, -12, -13])).toEqual([5, -36]);
  });

  it('handles zero correctly', () => {
    expect(excerciseB([0, 1, -2])).toEqual([1, -2]);
  });

  it('works correctly with duplicate values', () => {
    expect(excerciseB([1, 1, 2, -2, -2, -3])).toEqual([3, -7]);
  });
});

describe('excerciseC', () => {
  it('throws an error for arrays with less than 2 elements', () => {
    expect(() => excerciseC([])).toThrow('Array size must be at least 2.');
    expect(() => excerciseC([1])).toThrow('Array size must be at least 2.');
  });

  it('throws an error for arrays with non-positive elements', () => {
    expect(() => excerciseC([1, 0])).toThrow(
      'Array elements must be positive numbers.',
    );
    expect(() => excerciseC([1, -2])).toThrow(
      'Array elements must be positive numbers.',
    );
  });

  it('calculates products correctly for valid arrays', () => {
    expect(excerciseC([10, 20])).toEqual([20, 10]);
    expect(excerciseC([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(excerciseC([1, 5, 2])).toEqual([10, 2, 5]);
    expect(excerciseC([10, 3, 5, 6, 2])).toEqual([180, 600, 360, 300, 900]);
  });

  it('handles arrays with duplicate elements', () => {
    expect(excerciseC([2, 2, 2])).toEqual([4, 4, 4]);
    expect(excerciseC([1, 3, 3, 1])).toEqual([9, 3, 3, 9]);
  });
});
