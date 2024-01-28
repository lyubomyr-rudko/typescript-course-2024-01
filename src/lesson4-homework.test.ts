import { describe, expect, it } from '@jest/globals';

import { excercise13A, excercise13B } from './lesson4-homework';

const { getRandomItem } = excercise13A();
const { chunkArray } = excercise13B();

describe('getRandomNumber', () => {
  const mock = jest.spyOn(global.Math, 'random');

  beforeEach(() => {
    mock
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
      getRandomItem([
        { name: 'Ann' },
        { name: 'Alex' },
        { name: 'Sam' },
        { name: 'John' },
      ]),
    ).toStrictEqual({ name: 'Ann' });
    expect(getRandomItem([1, 2, 3, 4, 5])).toBe(2);
    expect(getRandomItem(['a', 'b', 'c', 'd'])).toBe('c');
    expect(getRandomItem([true])).toBe(true);
    expect(getRandomItem([])).toBe(undefined);
  });
});

describe('chunk', () => {
  it('should be defined', () => {
    expect(chunkArray).toBeDefined();
  });

  it('should chunk array by 3 element', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it('should chunk array by 2 element', () => {
    expect(chunkArray([{ id: 7 }, { id: 4 }, { id: 5 }, { id: 5 }], 2)).toEqual(
      [
        [{ id: 7 }, { id: 4 }],
        [{ id: 5 }, { id: 5 }],
      ],
    );
  });

  it('should chunk array by 1 element', () => {
    expect(chunkArray(['Anna', 'Pitter', 'John', 'Sarah'], 1)).toEqual([
      ['Anna'],
      ['Pitter'],
      ['John'],
      ['Sarah'],
    ]);
  });

  it('empty arguments - empty array', () => {
    expect(chunkArray([], 5)).toStrictEqual([]);
  });
});
