import { describe, expect, it } from '@jest/globals';
import {exercise55} from './lesson13-homework';

describe('getColor', () => {
    it('should be defined', () => {
        const { getColor } = exercise55();
        expect(getColor).toBeDefined();
    });
    it('should return empty string when set 0', () => {
        const { getColor } = exercise55();
        expect(getColor(0)).toBe('');
    });
    // it('should return  string -Green- when set 2', () => {
    //     const { getColor } = exercise55();
    //     expect(getColor(2)).toBe('Green');
    // });
    it('should return  string -Red, Blue- when set 5', () => {
        const { getColor } = exercise55();
        expect(getColor(5)).toBe('Red, Blue');
    });
    it('should return  string -Red, Green, Blue- when set 7', () => {
        const { getColor } = exercise55();
        expect(getColor(7)).toBe('Red, Green, Blue');
    });
});
