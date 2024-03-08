import {
  excerciseATest as sum,
  excerciseBTest as sort,
  excerciseCTest as productGenerator,
} from './lesson14-homework';

describe('excerciseATest', () => {
  it('sum is load:', () => {
    expect(sum).toBeDefined();
  });
  //
  it('sum([6, 2, 1, 8, 10]) should return 16:', () => {
    expect(sum([6, 2, 1, 8, 10])).toBe(16);
  });
  //
  it('sum([ 1, 1, 11, 2, 3 ]) should return 6:', () => {
    expect(sum([1, 1, 11, 2, 3])).toBe(6);
  });
  //
  it('sum([1]) should return 0:', () => {
    expect(sum([1])).toBe(0);
  });
  //
  it('sum([]) should return 0:', () => {
    expect(sum([])).toBe(0);
  });
  //
  it('sum("") should return 0:', () => {
    expect(sum('')).toBe(0);
  });
  //
  it('sum(null) should return 0:', () => {
    expect(sum(null)).toBe(0);
  });
});

//
describe('excerciseBTest', () => {
  it('sort is load:', () => {
    expect(sort).toBeDefined();
  });
  //
  it('sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -21, -22, -23, -24, -25]) should return [11, - 115]:', () => {
    expect(
      sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -21, -22, -23, -24, -25]),
    ).toEqual([11, -115]);
  });
  //
  it('sort(null) should return []:', () => {
    expect(sort(null)).toEqual([]);
  });
  //
  it('sort([]) should return []:', () => {
    expect(sort([])).toEqual([]);
  });
});

//
describe('excerciseCTest', () => {
  it('productGenerator is load:', () => {
    expect(productGenerator).toBeDefined();
  });
  //
  it('productGenerator([10,20]) should return [20,10]:', () => {
    expect(productGenerator([10, 20])).toEqual([20, 10]);
  });
  //
  it('productGenerator([1,2,3,4]) should return [24,12,8,6]:', () => {
    expect(productGenerator([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
  //
  it('productGenerator([1,5,2]) should return [10,2,5]:', () => {
    expect(productGenerator([1, 5, 2])).toEqual([10, 2, 5]);
  });
  //
  it('productGenerator([10,3,5,6,2]) should return [180,600,360,300,900]:', () => {
    expect(productGenerator([10, 3, 5, 6, 2])).toEqual([
      180, 600, 360, 300, 900,
    ]);
  });
  //
  it('productGenerator([1]) should return ["Array length should be more 2"]:', () => {
    expect(productGenerator([1])).toEqual(['Array length should be more 2']);
  });
});
