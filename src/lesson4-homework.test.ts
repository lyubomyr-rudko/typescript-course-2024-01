import { describe, expect, it, beforeAll } from '@jest/globals';
import {
  getRandomItemFromArray,
  getRandomNumberFromArray,
  getRandomObjectFromArray,
  getRandomStringFromArray,
  chunkArray,
} from './lesson4-homework';

describe('getRandomNumberFromArray', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValueOnce(0.7);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(getRandomNumberFromArray).toBeDefined();
  });

  it('getRandomNumberFromArray', () => {
    expect(getRandomNumberFromArray([1, 2, 3, 4, 5])).toBe(4);
    expect(getRandomNumberFromArray([])).toBe(undefined);
  });
});

describe('getRandomStringFromArray', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValueOnce(0.7);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(getRandomStringFromArray).toBeDefined();
  });
  it('getRandomStringFromArray', () => {
    expect(getRandomStringFromArray(['1', '2', '3', '4', '5'])).toBe('4');
    expect(getRandomStringFromArray([])).toBe(undefined);
  });
});

describe('getRandomObjectFromArray', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValueOnce(0.7);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(getRandomObjectFromArray).toBeDefined();
  });
  it('getRandomObjectFromArray', () => {
    expect(
      getRandomObjectFromArray([
        { name: 'artem', age: 26 },
        { name: 'nick', age: 27 },
      ]),
    ).toEqual({ name: 'nick', age: 27 });
    expect(getRandomObjectFromArray([])).toBe(undefined);
  });
});

describe('getRandomItemFromArray', () => {
  beforeAll(() => {
    Math.random = jest
      .fn()
      .mockReturnValueOnce(0.7)
      .mockReturnValueOnce(0.7)
      .mockReturnValueOnce(0.7);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(getRandomItemFromArray).toBeDefined();
  });
  it('getRandomItemFromArray', () => {
    expect(getRandomItemFromArray([1, 2, 3, 4, 5])).toBe(4);
    expect(getRandomStringFromArray(['1', '2', '3', '4', '5'])).toBe('4');
    expect(
      getRandomObjectFromArray([
        { name: 'artem', age: 26 },
        { name: 'nick', age: 27 },
      ]),
    ).toEqual({ name: 'nick', age: 27 });
    expect(getRandomItemFromArray([])).toBe(undefined);
  });
});

describe('chunkArray', () => {
  it('should be defined', () => {
    expect(getRandomNumberFromArray).toBeDefined();
  });

  it('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
