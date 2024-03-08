import { describe, expect, it } from '@jest/globals';
import { exerciseA, exerciseB, exerciseC } from './lesson14-homework';

const calculateSum = exerciseA();
const calcPositivesAndNegatives = exerciseB();
const calculateProductArray = exerciseC();

describe('calculateSum', () => {
  it('returns 0 for null or empty array', () => {
    expect(calculateSum(null)).toBe(0);
    expect(calculateSum([])).toBe(0);
  });
  it('returns the sum of all elements except the highest and lowest', () => {
    expect(calculateSum([3, 8, 5, 12, 7])).toBe(20);
    expect(calculateSum([2, 9, 4, 7, 6])).toBe(17);
  });
  it('returns the single element for an array with a single element', () => {
    expect(calculateSum([8])).toBe(0);
  });
});
describe('calcPositivesAndNegatives', () => {
  it('returns the count of positives and sum of negatives', () => {
    expect(
      calcPositivesAndNegatives([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
      ]),
    ).toEqual([10, -65]);
  });

  it('returns an empty array for null or empty array', () => {
    expect(calcPositivesAndNegatives(null)).toEqual([]);
    expect(calcPositivesAndNegatives([])).toEqual([]);
  });

  it('returns zeros for an array with only zeros', () => {
    expect(calcPositivesAndNegatives([0, 0, 0])).toEqual([0, 0]);
  });

  it('returns zeros for an array with no negatives', () => {
    expect(calcPositivesAndNegatives([1, 2, 3, 4, 5])).toEqual([5, 0]);
  });
});

describe('calculateProductArray', () => {
  it('returns the product array for a given array', () => {
    expect(calculateProductArray([10, 20])).toEqual([20, 10]);
    expect(calculateProductArray([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(calculateProductArray([1, 5, 2])).toEqual([10, 2, 5]);
    expect(calculateProductArray([10, 3, 5, 6, 2])).toEqual([
      180, 600, 360, 300, 900,
    ]);
  });

  it('returns an empty array for an empty array', () => {
    expect(calculateProductArray([])).toEqual([]);
  });

  it('returns [1] for an array with a single element', () => {
    expect(calculateProductArray([8])).toEqual([1]);
  });
});
