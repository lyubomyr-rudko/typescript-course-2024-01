import { describe, expect, it } from '@jest/globals';
import { chunkArray, getRandomItemFromArray } from './lesson4-homework';

describe('getRandomItemFromArray', () => {
  it('returns a random item from an array of numbers', () => {
    const numbers = [1, 5, 8, 12, 23];
    const randomNumber = getRandomItemFromArray(numbers);
    expect(numbers.includes(randomNumber)).toBe(true);
  });

  it('returns a random item from an array of strings', () => {
    const strings = ['apple', 'banana', 'cherry'];
    const randomString = getRandomItemFromArray(strings);
    expect(strings.includes(randomString)).toBe(true);
  });

  it('handles arrays of objects', () => {
    const objects = [{ name: 'Alice' }, { name: 'Bob' }];
    const randomObject = getRandomItemFromArray(objects);
    expect(objects.includes(randomObject)).toBe(true);
  });
});

describe('chunkArray', () => {
  it('chunks an odd array of numbers correctly', () => {
    const numbers = [1, 2, 3, 4, 5];
    const chunkedNumbers = chunkArray(numbers, 2);
    expect(chunkedNumbers).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('chunks an even array of numbers correctly', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const chunkedNumbers = chunkArray(numbers, 2);
    expect(chunkedNumbers).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it('chunks an array of strings correctly', () => {
    const strings = ['apple', 'banana', 'cherry', 'orange'];
    const chunkedStrings = chunkArray(strings, 3);
    expect(chunkedStrings).toEqual([['apple', 'banana', 'cherry'], ['orange']]);
  });

  it('chunks an array of objects correctly', () => {
    const objects = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
    const chunkedObjects = chunkArray(objects, 2);
    expect(chunkedObjects).toEqual([
      [{ name: 'Alice' }, { name: 'Bob' }],
      [{ name: 'Charlie' }],
    ]);
  });
});
