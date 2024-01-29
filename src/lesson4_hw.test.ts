import { getRandomItem } from './lesson4-homework';
import { describe, expect, it } from '@jest/globals';

import chunkArray from './lesson4-homework';

// excercise13A

describe('getRandomItem function', () => {
  it('returns a random number from the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(typeof getRandomItem(numbers)).toBe('number');
  });

  it('returns a random string from the array', () => {
    const strings = ['apple', 'banana', 'orange'];
    expect(typeof getRandomItem(strings)).toBe('string');
  });

  it('returns a random object from the array', () => {
    const objects = [{ name: 'John' }, { name: 'Jane' }, { name: 'Doe' }];
    expect(typeof getRandomItem(objects)).toBe('object');
  });

  it('returns undefined for an empty array', () => {
    const emptyArray: number[] = [];
    expect(getRandomItem(emptyArray)).toBeUndefined();
  });
});

// excercise13B

describe('chunkArray function', () => {
  it('chunks an array into subarrays of specified size', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = chunkArray(inputArray, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('chunks an array into subarrays of specified size (larger array)', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = chunkArray(inputArray, 3);
    expect(result).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it('throws an error for chunk size less than or equal to 0', () => {
    const inputArray = [1, 2, 3, 4, 5];
    expect(() => chunkArray(inputArray, 0)).toThrow(
      'Chunk size must be greater than 0',
    );
  });

  it('chunks an array with a single element into a single subarray', () => {
    const inputArray = [42];
    const result = chunkArray(inputArray, 1);
    expect(result).toEqual([[42]]);
  });

  it('returns an empty array for an empty input array', () => {
    const inputArray: number[] = [];
    const result = chunkArray(inputArray, 2);
    expect(result).toEqual([]);
  });
});
