import { describe, expect } from '@jest/globals';
import { excerciseA, excerciseB, excerciseC } from './lesson14-homework';

describe('excerciseA', () => {
  test('should return sum of all numbers except highest and lowest', () => {
    expect(excerciseA([6, 2, 1, 8, 10])).toBe(16);
    expect(excerciseA([1, 1, 11, 2, 3])).toBe(6);
  });

  test('should return 0 for empty input', () => {
    expect(excerciseA([])).toBe(0);
    expect(excerciseA([1])).toBe(0);
    expect(excerciseA(null)).toBe(0);
    expect(excerciseA(undefined)).toBe(0);
  });
});

describe('exerciseB function', () => {
  test('should return count of positives and sum of negatives', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    const expectedOutput = [10, -65];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });

  test('should handle array with only positive numbers', () => {
    const input = [1, 2, 3];
    const expectedOutput = [3, 0];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });

  test('should handle array with only negative numbers', () => {
    const input = [-1, -2, -3];
    const expectedOutput = [0, -6];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });

  test('should handle array with zeroes', () => {
    const input = [0, 0, 0];
    const expectedOutput = [0, 0];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });
});

describe('excerciseC function', () => {
  it('should return correct product array for [10, 20]', () => {
    expect(excerciseC([10, 20])).toEqual([20, 10]);
  });

  it('should return correct product array for [1, 2, 3, 4]', () => {
    expect(excerciseC([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('should return correct product array for [1, 5, 2]', () => {
    expect(excerciseC([1, 5, 2])).toEqual([10, 2, 5]);
  });

  it('should return correct product array for [10, 3, 5, 6, 2]', () => {
    expect(excerciseC([10, 3, 5, 6, 2])).toEqual([180, 600, 360, 300, 900]);
  });

  it('should handle empty array', () => {
    expect(excerciseC([])).toEqual([]);
  });

  it('should handle array with one element', () => {
    expect(excerciseC([5])).toEqual([1]);
  });
});
