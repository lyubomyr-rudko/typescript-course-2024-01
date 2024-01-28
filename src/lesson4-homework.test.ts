import { describe, expect, it } from '@jest/globals';
import { chunkArray, getRandomItem } from './lesson4-homework';

describe('getRandomItem', () => {
  it('should be defined', () => {
    expect(getRandomItem).toBeDefined();
  });

  it('returns a random item from an array of numbers', () => {
    const numbers = [1, 5, 9, 13, 25];
    const randomNumber = getRandomItem(numbers);
    expect(numbers.includes(randomNumber)).toBe(true);
  });

  it('returns a random item from an array of strings', () => {
    const strings = ['apple', 'banana', 'orange'];
    const randomString = getRandomItem(strings);
    expect(strings.includes(randomString)).toBe(true);
  });

  it('handles arrays of objects', () => {
    const objects = [{ name: 'Alice' }, { name: 'Bob' }];
    const randomObject = getRandomItem(objects);
    expect(objects.includes(randomObject)).toBe(true);
  });
});

describe('chunkArray', () => {
  it('should be defined', () => {
    expect(chunkArray).toBeDefined();
  });

  it('array length should be = size', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
