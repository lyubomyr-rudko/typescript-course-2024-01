import { expect } from '@jest/globals';
import { chunkArray, getRandomNumber } from '../lesson4-homework';

describe('chunkArray', () => {
  it('returns undefined if the array is empty', () => {
    expect(chunkArray).toBeDefined();
  });
  it('should chunk the array into subarrays of given size', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle empty array', () => {
    expect(chunkArray([], 2)).toEqual([]);
  });

  it('should handle n greater than array length', () => {
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });
});

describe('getRandomNumber', () => {
  it('should be defined', () => {
    expect(getRandomNumber).toBeDefined();
  });
  it('returns a random number from an array of numbers', () => {
    const result = getRandomNumber<number>([1, 2, 3]);
    expect([1, 2, 3]).toContain(result);
  });

  it('returns a random string from an array of strings', () => {
    const result = getRandomNumber<string>(['1', '2', '3']);
    expect(['1', '2', '3']).toContain(result);
  });

  interface TPerson {
    name: string;
    age: number;
  }

  it('returns a random person from an array of objects', () => {
    const persons: TPerson | undefined = getRandomNumber([
      { name: 'Nikita', age: 21 },
      { name: 'Ostap', age: 23 },
      { name: 'Oksana', age: 19 },
    ]);
    expect(persons).toMatchObject({
      name: expect.any(String),
      age: expect.any(Number),
    });
  });
});
