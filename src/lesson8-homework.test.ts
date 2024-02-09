import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('from an array of numbers', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 1])).toEqual([1, 2, 3, 4]);
  });

  it('from an array of strings', () => {
    const arr = ['a', 'b', 'b', 'c', 'a', 'd'];
    const expected = ['a', 'b', 'c', 'd'];
    expect(removeDuplicates(arr)).toEqual(expected);
  });
});

describe('getIntersection', () => {
  it('should be defined', () => {
    expect(getIntersection).toBeDefined();
  });

  it('different data types', () => {
    expect(getIntersection([1, 2, 3, 'a', 'b'], [3, 'a', 'c'])).toEqual([
      3,
      'a',
    ]);
  });

  it('should return []', () => {
    expect(getIntersection(['a', 'b'], ['c', 'd', 'e'])).toEqual([]);
  });
});
