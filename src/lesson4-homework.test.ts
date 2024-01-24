import { describe, expect, it } from '@jest/globals';
import { getRandom, chunkedArr } from './lesson4-homework';

describe('getRandom', () => {
  it('should be defined', () => {
    expect(getRandom).toBeDefined();
  }); //i don`t understand why this test passed when my function can return undefined
  beforeEach(() => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.9);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });
  it('should return random element from array', () => {
    expect(
      getRandom([{ id: 7 }, { id: 4 }, { id: 5 }, { id: 5 }]),
    ).toStrictEqual({
      id: 7,
    });
    expect(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(4);
    expect(getRandom(['apple', 'banana', 'apricot', 'cucumber'])).toBe(
      'apricot',
    );
    expect(getRandom([true])).toBe(true);
    expect(getRandom([])).toBe(undefined);
  });
});

describe('chunkedArr', () => {
  it('should be defined', () => {
    expect(chunkedArr).toBeDefined();
  });

  it('should return chunked array of numbers sorted in array by 4 elements', () => {
    expect(chunkedArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toStrictEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10],
    ]);
  });
  it('should return chunked array of objects sorted in array by 2 elements', () => {
    expect(
      chunkedArr([{ id: 7 }, { id: 4 }, { id: 5 }, { id: 5 }], 2),
    ).toStrictEqual([
      [{ id: 7 }, { id: 4 }],
      [{ id: 5 }, { id: 5 }],
    ]);
  });
  it('should return chunked array of strings sorted in array by 1 element', () => {
    expect(
      chunkedArr(['apple', 'banana', 'apricot', 'cucumber'], 1),
    ).toStrictEqual([['apple'], ['banana'], ['apricot'], ['cucumber']]);
  });
  it('should return empty array when set empty array to arguments', () => {
    expect(chunkedArr([], 10)).toStrictEqual([]);
  });
});
