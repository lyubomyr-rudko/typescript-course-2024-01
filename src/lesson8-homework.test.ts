import { describe, it, expect } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it(`should be defined`, () => {
    expect(removeDuplicates).toBeDefined();
  });
  it(`return array of numbers without duplicate`, () => {
    const arrNum = [23, 1, 1, 2, 54, 5000, 23, 4, 45, 4, 4, 4, 4, 8, 89, 12];
    const result = [23, 1, 2, 54, 5000, 4, 45, 8, 89, 12];

    expect(removeDuplicates(arrNum)).toEqual(result);
  });
  it(`return array of strings without duplicate`, () => {
    const arrStr = [
      'Hello',
      'Hi',
      'Hi',
      'Good afternoon',
      'Good Afternoon',
      'How?',
      'Hello',
      'How?',
      'Why?',
      'Hello',
    ];
    const result = [
      'Hello',
      'Hi',
      'Good afternoon',
      'Good Afternoon',
      'How?',
      'Why?',
    ];

    expect(removeDuplicates(arrStr)).toEqual(result);
  });
  it(`return array of boolean without duplicate`, () => {
    const arrBool = [
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
    ];
    const result = [true, false];

    expect(removeDuplicates(arrBool)).toEqual(result);
  });
  it(`return array of different types without duplicate`, () => {
    const arrNum = [
      23,
      1,
      true,
      2,
      '54',
      'Hello',
      23,
      4,
      45,
      4,
      null,
      4,
      4,
      'Hello',
      4,
      null,
      8,
      89,
      12,
      undefined,
      false,
      false,
    ];
    const result = [
      23,
      1,
      true,
      2,
      '54',
      'Hello',
      4,
      45,
      null,
      8,
      89,
      12,
      undefined,
      false,
    ];

    expect(removeDuplicates(arrNum)).toEqual(result);
  });
  it(`return empty array`, () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});

describe('getIntersection', () => {
  it(`should be defined`, () => {
    expect(getIntersection).toBeDefined();
  });
  it(`return array of an intersection of two arrays of numbers`, () => {
    const arrNum1 = [23, 12, 2, 4, 45, 56, 34];
    const arrNum2 = [3, 576, 23, 2, 22, 46, 56];
    const result = [23, 2, 56];

    expect(getIntersection(arrNum1, arrNum2)).toEqual(result);
  });

  it(`return array of an intersection of two arrays of strings`, () => {
    const arrStr1 = [
      'greeting',
      'hello',
      'some',
      'something',
      'world',
      'java',
      'JavaScript',
    ];
    const arrStr2 = [
      'Python',
      'JavaScript',
      'programming',
      'greeting',
      'developer',
      'user',
      'world',
    ];
    const result = ['greeting', 'world', 'JavaScript'];

    expect(getIntersection(arrStr1, arrStr2)).toEqual(result);
  });
  it(`return empty array`, () => {
    const arrNum = [1, 2, 3];

    expect(getIntersection([], [])).toEqual([]);
    expect(getIntersection(arrNum, [])).toEqual([]);
  });
});
