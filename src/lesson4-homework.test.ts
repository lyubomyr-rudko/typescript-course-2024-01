import { describe, expect, it } from '@jest/globals';
import { excercise13A, excercise13B } from './lesson4-homework';

describe('excercise13A', () => {
  beforeAll(() => {
    Math.random = jest
      .fn()
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.8);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should be defined', () => {
    expect(excercise13A).toBeDefined();
  });

  it('should return some number item from array', () => {
    const arrNum = [12, 2, 7, 123, 56, 23];
    expect(excercise13A(arrNum)).toBe(arrNum[0]);
  });

  it('should return some string item from array', () => {
    const arrStr = ['apple', 'potato', 'orange', 'banana'];
    expect(excercise13A(arrStr)).toBe(arrStr[1]);
  });
  it(`return some object from array ['apple', 'potato', 'orange', 'banana']`, () => {
    const arrObj = [
      { name: 'John', age: 43 },
      { name: 'Smit', age: 18 },
      { name: 'Valery', age: 26 },
      { name: 'Boris', age: 56 },
    ];
    expect(excercise13A(arrObj)).toEqual(arrObj[2]);
  });
  it('should return some false value item from array', () => {
    const arrFalseVal = [false, '', NaN, null, 0, undefined, -0, !1];
    expect(excercise13A(arrFalseVal)).toBe(arrFalseVal[6]);
  });
});

describe('excercise13B', () => {
  it('should be defined', () => {
    expect(excercise13B).toBeDefined();
  });
  it(`return array of arrays of 3 strings`, () => {
    const arrStr = [
      'apple',
      'potato',
      'orange',
      'banana',
      'courgette',
      'milk',
      'mince',
      'aubergine',
      'juice',
    ];
    const arrRes = [
      ['apple', 'potato', 'orange'],
      ['banana', 'courgette', 'milk'],
      ['mince', 'aubergine', 'juice'],
    ];
    expect(excercise13B(arrStr, 3)).toEqual(arrRes);
    expect(excercise13B(arrStr, 3)).toHaveLength(3);
  });
  it(`return array of arrays of 4 numbers`, () => {
    const arrNum = [1, 12, 34, 654, -45, 234, 0, 23, -4, 12, 7, 65];
    const arrRes = [
      [1, 12, 34, 654],
      [-45, 234, 0, 23],
      [-4, 12, 7, 65],
    ];
    expect(excercise13B(arrNum, 4)).toEqual(arrRes);
    expect(excercise13B(arrNum, 4)).toHaveLength(3);
  });
  it(`return array of arrays of 2 objects`, () => {
    const arrObj = [
      { name: 'John', age: 43 },
      { name: 'Smit', age: 18 },
      { name: 'Valery', age: 26 },
      { name: 'Boris', age: 56 },
    ];
    const arrRes = [
      [
        { name: 'John', age: 43 },
        { name: 'Smit', age: 18 },
      ],
      [
        { name: 'Valery', age: 26 },
        { name: 'Boris', age: 56 },
      ],
    ];
    expect(excercise13B(arrObj, 2)).toEqual(arrRes);
    expect(excercise13B(arrObj, 2)).toHaveLength(2);
  });
});
