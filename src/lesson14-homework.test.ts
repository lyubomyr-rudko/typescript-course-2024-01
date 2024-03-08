import { describe, expect, it } from '@jest/globals';
import { excerciseA, excerciseB, excerciseC } from './lesson14-homework';

const calculateSum = excerciseA();
const getSum = excerciseB();
const getProductArr = excerciseC();

describe('exerciseA', () => {
  it('should return the correct sum for a valid array', () => {
    expect(calculateSum([6, 2, 1, 8, 10])).toBe(16);
  });

  it('should return 0 if null is given instead of an array', () => {
    expect(calculateSum(null)).toBe(0);
  });

  it('should return 0 if an empty array is given', () => {
    expect(calculateSum([])).toBe(0);
  });

  it('should return 0 if a list with only one element is given', () => {
    expect(calculateSum([5])).toBe(0);
  });
  it('should return the correct sum with duplicate values', () => {
    expect(calculateSum([1, 1, 11, 2, 3])).toBe(6);
  });
});

describe('excerciseB', () => {
  it('should return [10, -65] for the provided input array', () => {
    expect(
      getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
    ).toEqual([10, -65]);
  });

  it('should return an empty array for null input', () => {
    expect(getSum(null)).toEqual([]);
  });

  it('should return an empty array for an empty array input', () => {
    expect(getSum([])).toEqual([]);
  });

  it('should return [0, -15] for an array with only negative numbers', () => {
    expect(getSum([-1, -2, -3, -4, -5])).toEqual([0, -15]);
  });

  it('should return [5, 0] for an array with only positive numbers', () => {
    expect(getSum([1, 2, 3, 4, 5])).toEqual([5, 0]);
  });

  it('should return [0, 0] for an array with only zeros', () => {
    expect(getSum([0, 0, 0])).toEqual([0, 0]);
  });
});

describe('exerciseC', () => {
  it('should return [20, 10] for the input [10, 20]', () => {
    expect(getProductArr([10, 20])).toStrictEqual([20, 10]);
  });

  it('should return [24, 12, 8, 6] for the input [1, 2, 3, 4]', () => {
    expect(getProductArr([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });

  it('should return [10, 2, 5] for the input [1, 5, 2]', () => {
    expect(getProductArr([1, 5, 2])).toStrictEqual([10, 2, 5]);
  });

  it('should return [180, 600, 360, 300, 900] for the input [10, 3, 5, 6, 2]', () => {
    expect(getProductArr([10, 3, 5, 6, 2])).toStrictEqual([
      180, 600, 360, 300, 900,
    ]);
  });
});
