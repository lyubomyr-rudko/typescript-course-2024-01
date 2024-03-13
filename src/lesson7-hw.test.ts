import { describe, expect, it } from '@jest/globals';
import { exercise33 } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
    it('should return the most frequent character in a string', () => {
        const { getMostFrequentCharacter } = exercise33();
        expect(getMostFrequentCharacter('hello world')).toBe('l');
        expect(getMostFrequentCharacter('aaaaaa')).toBe('a');
        expect(getMostFrequentCharacter('')).toBe('');
    });

    it('should handle strings with only one character', () => {
        const { getMostFrequentCharacter } = exercise33();
        expect(getMostFrequentCharacter('a')).toBe('a');
        expect(getMostFrequentCharacter('b')).toBe('b');
        expect(getMostFrequentCharacter('c')).toBe('c');
    });

    it('should handle empty strings', () => {
        const { getMostFrequentCharacter } = exercise33();
        expect(getMostFrequentCharacter('')).toBe('');
    });
});
