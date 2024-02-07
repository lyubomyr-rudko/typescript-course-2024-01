import { describe, expect, it } from '@jest/globals';
import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('should return [ 1, 2, 3, 4, 5 ] from [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toStrictEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it('should return [ Valera, John, Liza] from [Valera, John, Liza, John, Liza, Valera, Valera]', () => {
    expect(
      removeDuplicates([
        'Valera',
        'John',
        'Liza',
        'John',
        'Liza',
        'Valera',
        'Valera',
      ]),
    ).toStrictEqual(['Valera', 'John', 'Liza']);
  });
  it('should return [true, false] from [true, true, false, true, false, true, false]', () => {
    expect(
      removeDuplicates([true, true, false, true, false, true, false]),
    ).toStrictEqual([true, false]);
  });
});

describe('getIntersection', () => {
  it('should be defined', () => {
    expect(getIntersection).toBeDefined();
  });

  it('should return [3, 4] from arrays [8, 3, 2, 4, 2], [7, 3, 4, 5, 3]', () => {
    expect(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])).toStrictEqual([
      3, 4,
    ]);
  });
  it('should return [John] from arrays [Valera, John, Nikolai], [John, Liza, Tolik]', () => {
    expect(
      getIntersection(['Valera', 'John', 'Nikolai'], ['John', 'Liza', 'Tolik']),
    ).toStrictEqual(['John']);
  });
  it('should return [] from arrays [Valera, Nikolai], [John, Liza, Tolik]', () => {
    expect(
      getIntersection(['Valera', 'Nikolai'], ['John', 'Liza', 'Tolik']),
    ).toStrictEqual([]);
  });
});
