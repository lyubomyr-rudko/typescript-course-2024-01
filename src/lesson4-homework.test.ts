import { describe, expect, it } from '@jest/globals';
import { randomItemFromArray, chunk } from './lesson4-homework';

describe('randomItemFromArray', () => {
  it('should be defined', () => {
    expect(randomItemFromArray).toBeDefined();
  });

  it('return random item from array', () => {
    const arrNumForExample = [1, 2, 3];
    const randomNumFromArrNumForExample = randomItemFromArray(arrNumForExample);
    expect(arrNumForExample.includes(randomNumFromArrNumForExample)).toBe(true);
  });
});

describe('chunk', () => {
  it('should be defined', () => {
    expect(chunk).toBeDefined();
  });

  it('array length should be = size', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
