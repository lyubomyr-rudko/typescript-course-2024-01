import { describe, it, expect } from '@jest/globals';

import { excerciseA, excerciseB, excerciseC } from './lesson14-homework';

const { cqList } = excerciseA();
const { countElements } = excerciseB();
const { productArrayConstructor } = excerciseC();

describe('cqList', () => {
  it('should be defined', () => {
    expect(cqList).toBeDefined();
  });

  it('should return correct result', () => {
    expect(cqList([6, 2, 1, 8, 10])).toBe(16);
    expect(cqList([1, 1, 11, 2, 3])).toBe(6);
  });

  it('should return 0', () => {
    expect(cqList(null)).toBe(0);
    expect(cqList(undefined)).toBe(0);
    expect(cqList([])).toBe(0);
    expect(cqList([12])).toBe(0);
  });
});

describe('countElements', () => {
  it('should be defined', () => {
    expect(countElements).toBeDefined();
  });

  it('should return correct result', () => {
    expect(
      countElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
    ).toEqual([10, -65]);
  });

  it('should return an empty array', () => {
    expect(countElements(null)).toEqual([]);
    expect(countElements([])).toEqual([]);
  });
});

describe('productArrayConstructor', () => {
  it('should be defined', () => {
    expect(productArrayConstructor).toBeDefined();
  });

  it('should return correct result', () => {
    expect(productArrayConstructor([10, 20])).toEqual([20, 10]);
    expect(productArrayConstructor([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(productArrayConstructor([10, 3, 5, 6, 2])).toEqual([
      180, 600, 360, 300, 900,
    ]);
  });
});
