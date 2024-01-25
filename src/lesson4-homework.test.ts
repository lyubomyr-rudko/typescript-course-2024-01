import { randomItemFromArray, chunk } from './lesson4-homework';

describe('randomItemFromArray', () => {
  it('should be defined', () => {
    expect(randomItemFromArray).toBeDefined();
  });

  it('returns undefined for an empty array', () => {
    const emptyArray: number[] = [];
    expect(randomItemFromArray(emptyArray)).toBeUndefined();
  });

  it('returns a random number from the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(typeof randomItemFromArray(numbers)).toBe('number');
  });

  it('returns a random string from the array', () => {
    const strings = ['a', 'b', 'c'];
    expect(typeof randomItemFromArray(strings)).toBe('string');
  });

  it('returns a random object from the array', () => {
    const objects = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
    expect(typeof randomItemFromArray(objects)).toBe('object');
  });
});
describe('chunk', () => {
  it('should be defined', () => {
    expect(chunk).toBeDefined();
  });

  it('should chunk the array correctly', () => {
    const array = [1, 2, 3, 4, 5];
    const chunkedArray = chunk(array, 2);
    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5]]);
  });
});
