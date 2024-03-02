import { describe, expect, it } from '@jest/globals';
import {
  sumArray,
  countPositivesSumNegatives,
  arrayIntegers,
} from './lesson14-homework';

describe('sumArray', () => {
  it('should be defined', () => {
    expect(sumArray).toBeDefined();
  });

  it('Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).', () => {
    expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
  });
  // it('Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).', () => {
  //   expect(sumArray([1, 1, 11, 2, 3])).toBe(6);
  // });
});

describe('countPositivesSumNegatives', () => {
  it('should be defined', () => {
    expect(countPositivesSumNegatives).toBeDefined();
  });

  it('Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).', () => {
    expect(
      countPositivesSumNegatives([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
      ]),
    ).toStrictEqual([10, -65]);
  });
});

describe('arrayIntegers', () => {
  it('should be defined', () => {
    expect(arrayIntegers).toBeDefined();
  });

  it('prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]', () => {
    expect(arrayIntegers([10, 20])).toStrictEqual([20, 10]);
  });
  // it('prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]', () => {
  //   expect(arrayIntegers([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  // });
  // it('prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]', () => {
  //   expect(arrayIntegers([1, 5, 2])).toStrictEqual([10, 2, 5]);
  // });
  // it('prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]', () => {
  //   expect(arrayIntegers([10, 3, 5, 6, 2])).toStrictEqual([
  //     180, 600, 360, 300, 900,
  //   ]);
  // });
});
