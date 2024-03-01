import {excerciseA, excerciseB, excerciseC} from './lesson14-homework';
import { describe, expect, it } from '@jest/globals';

describe('excerciseA function', () => {
    it('Sum of array [6, 2, 1, 8, 10] should be 16', () => {
        expect(excerciseA([6, 2, 1, 8, 10])).toBe(16);
    });

    it('Sum of array [1, 1, 11, 2, 3] should be 6', () => {
        expect(excerciseA([1, 1, 11, 2, 3])).toBe(6);
    });

    it('Empty array should return 0', () => {
        expect(excerciseA([])).toBe(0);
    });

    it('Array with one element should return 0', () => {
        expect(excerciseA([5])).toBe(0);
    });

});

describe('excerciseB function', () => {
    it('Array with positive and negative numbers', () => {
        expect(excerciseB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
    });

    it('Empty array should return [0, 0]', () => {
        expect(excerciseB([])).toEqual([0, 0]);
    });

});

describe('excerciseC function', () => {
    it('should return the product array', () => {
        expect(excerciseC([10, 20])).toEqual([20, 10]);
        expect(excerciseC([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
        expect(excerciseC([1, 5, 2])).toEqual([10, 2, 5]);
        expect(excerciseC([10, 3, 5, 6, 2])).toEqual([180, 600, 360, 300, 900]);
    });
});
