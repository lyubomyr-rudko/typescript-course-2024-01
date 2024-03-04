import { sumArray, count, arrayIntegers } from './lesson14-homework';
describe('exerciseA', () => {
  it('should be defined', () => {
    expect(sumArray).toBeDefined();
  });

  it('sum of [6, 2, 1, 8, 10] should be 16', () => {
    expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
  });
  it('sum of [1, 1, 11, 11, 2, 3] should be 17', () => {
    expect(sumArray([1, 1, 11, 11, 2, 3])).toBe(17);
  });
});

describe('exerciseB', () => {
  it('should be defined', () => {
    expect(count).toBeDefined();
  });
  it('result of [1, 2, 3] should be [3, 0]', () => {
    expect(count([1, 2, 3])).toStrictEqual([3, 0]);
  });
  it('result of [6, 2, 1, 8, -10, 10, -22] should be [5, -22]', () => {
    expect(count([6, 2, 1, 8, -10, 10, -22])).toStrictEqual([5, -32]);
  });
});

describe('exerciseC', () => {
  it('should be defined', () => {
    expect(arrayIntegers).toBeDefined();
  });
  it('result of [10,20] should be [20,10]', () => {
    expect(arrayIntegers([10, 20])).toStrictEqual([20, 10]);
  });
  it('result of [10,3,5,6,2] should be [180,600,360,300,900]', () => {
    expect(arrayIntegers([10, 3, 5, 6, 2])).toStrictEqual([
      180, 600, 360, 300, 900,
    ]);
  });
});
