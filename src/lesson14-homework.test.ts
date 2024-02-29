import { describe, expect, it } from '@jest/globals';
import { excerciseA, excerciseB, excerciseC } from './lesson14-homework';

describe('excerciseA', () => {
  it('should return the sum of all numbers except the highest and lowest', () => {
    expect(excerciseA([6, 2, 1, 8, 10])).toBe(16);
    expect(excerciseA([1, 1, 11, 2, 3])).toBe(6);
  });

  it('should return 0 for empty array or array with one element', () => {
    expect(excerciseA([])).toBe(0);
    expect(excerciseA([5])).toBe(0);
  });

  it('should return 0 for null input', () => {
    expect(excerciseA(null)).toBe(0);
  });
});

describe('excerciseB', () => {
  it('should return count of positive numbers and sum of negative numbers', () => {
    expect(excerciseB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
  });

  it('should return [0, 0] for empty array', () => {
    expect(excerciseB([])).toEqual([0, 0]);
  });

  it('should return [0, 0] for null input', () => {
    expect(excerciseB(null)).toEqual([0, 0]);
  });
});

describe('excerciseC', () => {
  it('should return the product array', () => {
    expect(excerciseC([10, 20])).toEqual([20, 10]);
    expect(excerciseC([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(excerciseC([1, 5, 2])).toEqual([10, 2, 5]);
    expect(excerciseC([10, 3, 5, 6, 2])).toEqual([180, 600, 360, 300, 900]);
  });
});
