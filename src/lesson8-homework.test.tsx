import { removeDuplicates, getIntersection } from './lesson8-homework'; // assuming your file name is "yourFileName.ts"

describe('removeDuplicates function', () => {
  it('removes duplicates from an array of numbers', () => {
    const input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(removeDuplicates(input)).toEqual(expected);
  });

  it('removes duplicates from an array of strings', () => {
    const input = ['a', 'b', 'c', 'a', 'd', 'e', 'b'];
    const expected = ['a', 'b', 'c', 'd', 'e'];
    expect(removeDuplicates(input)).toEqual(expected);
  });

  it('returns an empty array if input array is empty', () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(removeDuplicates(input)).toEqual(expected);
  });
});

describe('getIntersection function', () => {
  it('returns intersection of two arrays of numbers', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    const expected = [4, 5];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });
  it('returns intersection of two arrays of strings', () => {
    const arr1 = ['apple', 'banana', 'orange', 'pear'];
    const arr2 = ['orange', 'pear', 'grape', 'melon'];
    const expected = ['orange', 'pear'];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });
  it('returns an empty array if there is no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const expected: number[] = [];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });

  it('returns an empty array if one of the input arrays is empty', () => {
    const arr1: number[] = [];
    const arr2 = [1, 2, 3];
    const expected: number[] = [];
    expect(getIntersection(arr1, arr2)).toEqual(expected);
  });
});
