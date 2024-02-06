import { describe, expect, it } from '@jest/globals';
import { removeDuplicates } from "./lesson8-homework";
import { getIntersection } from './lesson8-homework';

describe('removeDuplicates function', () => {
    it('removes duplicates from an array of numbers', () => {
        const input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(removeDuplicates(input)).toEqual(expectedOutput);
    });

    it('returns an empty array when given an empty array', () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];
        expect(removeDuplicates(input)).toEqual(expectedOutput);
    });

    it('removes duplicates from an array of strings', () => {
        const input = ['a', 'b', 'c', 'a', 'b'];
        const expectedOutput = ['a', 'b', 'c'];
        expect(removeDuplicates(input)).toEqual(expectedOutput);
    });
});


describe('getIntersection function', () => {
    it('returns the intersection of two arrays of numbers', () => {
        const arr1 = [8, 3, 2, 4, 2];
        const arr2 = [7, 3, 4, 5, 3];
        const expectedOutput = [3, 4];
        expect(getIntersection(arr1, arr2)).toEqual(expectedOutput);
    });

    it('returns an empty array when one of the input arrays is empty', () => {
        const arr1: number[] = [];
        const arr2 = [7, 3, 4, 5, 3];
        const expectedOutput: number[] = [];
        expect(getIntersection(arr1, arr2)).toEqual(expectedOutput);
    });

    it('returns an empty array when there are no common elements in the input arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const expectedOutput: number[] = [];
        expect(getIntersection(arr1, arr2)).toEqual(expectedOutput);
    });
});

