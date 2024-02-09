import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates', () => {
  it('removes duplicate elements from an array of numbers', () => {
    const inputArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    const expectedResult = [1, 2, 3, 4, 5];
    expect(removeDuplicates(inputArray)).toEqual(expectedResult);
  });

  it('removes duplicate elements from an array of strings', () => {
    const inputArray = ['apple', 'banana', 'orange', 'apple', 'banana'];
    const expectedResult = ['apple', 'banana', 'orange'];
    expect(removeDuplicates(inputArray)).toEqual(expectedResult);
  });

  it('does not modify the original array', () => {
    const inputArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    removeDuplicates(inputArray);
    expect(inputArray).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]); 
  });

  it('returns an empty array if the input array is empty', () => {
    const inputArray: number[] = [];
    expect(removeDuplicates(inputArray)).toEqual([]);
  });

  it('returns the same array if it contains unique elements', () => {
    const inputArray = [1, 2, 3, 4, 5];
    expect(removeDuplicates(inputArray)).toEqual(inputArray);
  });
});


describe('getIntersection', () => {
  it('returns the intersection of two arrays with common elements', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    const intersection = getIntersection(arr1, arr2);
    expect(intersection).toEqual(expect.arrayContaining([4, 5])); 
  });

  it('returns an empty array if there are no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const intersection = getIntersection(arr1, arr2);
    expect(intersection).toHaveLength(0); 
  });

  it('returns an empty array if one or both arrays are empty', () => {
    const arr1: number[] = [];
    const arr2 = [4, 5, 6];
    const intersection = getIntersection(arr1, arr2);
    expect(intersection).toHaveLength(0); 

    const arr3 = [1, 2, 3];
    const arr4: number[] = [];
    const intersection2 = getIntersection(arr3, arr4);
    expect(intersection2).toHaveLength(0); 
  });

  it('handles arrays with duplicate elements correctly', () => {
    const arr1 = [1, 2, 2, 3, 3, 4, 5];
    const arr2 = [3, 3, 4, 4, 5, 5, 6];
    const intersection = getIntersection(arr1, arr2);
    expect(intersection).toEqual(expect.arrayContaining([3, 4, 5])); 
  });
});
