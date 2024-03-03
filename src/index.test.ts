import { describe, expect, it } from '@jest/globals';
import { excerciseA } from './lesson14-homework';
import { excerciseB } from './lesson14-homework';

const { summNumbers } = excerciseA();
const { countArray } = excerciseB();

describe('summNumbers', () => {
  it('should be defined', () => {
    expect(summNumbers).toBeDefined();
  });
  it('returns 16', () => {
    expect(summNumbers([6, 2, 1, 8, 10])).toBe(16);
  });
  it('returns 6', () => {
    expect(summNumbers([1, 1, 11, 2, 3])).toBe(6);
  });
  it('returns 0', () => {
    expect(summNumbers([1])).toBe(0);
  });
  it('returns 0 too', () => {
    expect(summNumbers([])).toBe(0);
  });
});

describe('countArray', () => {
  it('should be defined', () => {
    expect(countArray).toBeDefined();
  });
  it('returns [10, -65]', () => {
    expect(
      countArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
    ).toHaveLength(2);
  });
  it('returns not null', () => {
    expect(countArray(null)).not.toBe(null);
  });
});
