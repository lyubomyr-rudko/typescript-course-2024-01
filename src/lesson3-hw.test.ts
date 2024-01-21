import { describe, expect, it } from '@jest/globals';
import {
    removeAllVowels,
    removeVowelsFromArray,
    isPalindromeString,
    getPolindromesOnly,
    reverseArrayOfStrings,
    generatePhoneNumbers,
} from './lesson3-homework';

describe('removeAllVowels', () => {
    it('should remove all vowels from a string', () => {
        expect(removeAllVowels('exception')).toBe('xcptn');
        expect(removeAllVowels('javascript')).toBe('jvscrpt');
      });
});

describe('removeVowelsFromArray', () => {
    it('should remove all vowels from array', () => {
        expect(removeVowelsFromArray(['abstraction', 'javascript', 'react'])).toEqual(['bstrctn', 'jvscrpt', 'rct']);
    });
});

describe('isPalindromeString', () => {
    it('should check if a string is a palindrome', () => {
      expect(isPalindromeString('abcba')).toBe(true);
      expect(isPalindromeString('abc')).toBe(false);
    });
});

describe('getPolindromesOnly', () => {
    it('should filter out non-palindromic strings', () => {
      expect(getPolindromesOnly('abc', 'def', 'aba')).toEqual(['aba']);
    });
});

describe('reverseArrayOfStrings', () => {
    it('should reverse an array of strings', () => {
        expect(reverseArrayOfStrings(['abc', 'def'])).toEqual(['cba', 'fed']);
    });
});

describe('generatePhoneNumbers', () => {
    it('should generate an array of Kyivstar phone numbers', () => {
      const generatedNumbers = generatePhoneNumbers(5);
  
      generatedNumbers.forEach((phoneNumber) => {
        expect(phoneNumber).toMatch(/^097\d{7}$/);
      });
    });
});
