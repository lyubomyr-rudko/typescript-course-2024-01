import { describe, expect, it } from '@jest/globals';
import { exerciseA, exerciseB, exerciseC } from './lesson14-homework';

describe('exerciseA', () => {
  it('should be defined', () => {
    expect(exerciseA()).toBeDefined();
  });
  it('sum of [1, 2, 3] should be 2', () => {
    expect(exerciseA()([1, 2, 3])).toBe(2);
  });
  it('sum of Liza string should be 0', () => {
    expect(exerciseA()('Liza')).toBe(0);
  });
  it('sum of [6, 2, 1, 8, 10] should be 16', () => {
    expect(exerciseA()([6, 2, 1, 8, 10])).toBe(16);
  });
  it('sum of [6, null, 1, 8, 10] should be 0', () => {
    expect(exerciseA()([6, null, 1, 8, 10])).toBe(0);
  });
  it('sum of [1, 1, 11, 11, 2, 3] should be 17', () => {
    expect(exerciseA()([1, 1, 11, 11, 2, 3])).toBe(17);
  });
});

describe('exerciseB', () => {
  it('should be defined', () => {
    expect(exerciseB()).toBeDefined();
  });
  it('result of [1, 2, 3] should be [3, 0]', () => {
    expect(exerciseB()([1, 2, 3])).toStrictEqual([3, 0]);
  });
  it('result of Liza string should be []', () => {
    expect(exerciseB()('Liza')).toStrictEqual([]);
  });
  it('result of [6, 2, 1, 8, -10, 10, -22] should be [5, -22]', () => {
    expect(exerciseB()([6, 2, 1, 8, -10, 10, -22])).toStrictEqual([5, -32]);
  });
  it('result of [6, null, 1, 8, 10] should be []', () => {
    expect(exerciseB()([6, null, 1, 8, 10])).toStrictEqual([]);
  });
  it('result of [1, -1, 11, -11, 2, 3] should be [4, -12]', () => {
    expect(exerciseB()([1, -1, 11, -11, 2, 3])).toStrictEqual([4, -12]);
  });
});

describe('exerciseC', () => {
  it('should be defined', () => {
    expect(exerciseC()).toBeDefined();
  });
  it('result of [10,20] should be [20,10]', () => {
    expect(exerciseC()([10, 20])).toStrictEqual([20, 10]);
  });
  it('result of [1,2,3,4] should be [24,12,8,6]', () => {
    expect(exerciseC()([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
  it('result of [10,3,5,6,2] should be [180,600,360,300,900]', () => {
    expect(exerciseC()([10, 3, 5, 6, 2])).toStrictEqual([
      180, 600, 360, 300, 900,
    ]);
  });
});
