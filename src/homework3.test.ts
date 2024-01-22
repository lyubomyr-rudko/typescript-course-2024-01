import { describe, expect, it } from '@jest/globals';
import {
  removeAllVovels,
  removeVowelsFromArray,
  isPalindromeString,
  getPolindropesOnly,
  reverseArrayOfStrings,
  generatePhoneNumbers,
} from './lesson3-homework';

describe('String manipulation functions', () => {
  it('removeAllVovels removes vowels from a string', () => {
    expect(removeAllVovels('exception')).toBe('xcptn');
    expect(removeAllVovels('javascript')).toBe('jvscrpt');
  });

  it('removeVowelsFromArray removes vowels from an array of strings', () => {
    expect(
      removeVowelsFromArray(['abstraction', 'javascript', 'react']),
    ).toEqual(['bstrctn', 'jvscrpt', 'rct']);
  });

  it('isPalindromeString checks if a string is a palindrome', () => {
    expect(isPalindromeString('abcba')).toBe(true);
    expect(isPalindromeString('abc')).toBe(false);
  });

  it('getPolindropesOnly returns an array of palindromes', () => {
    expect(getPolindropesOnly('abc', 'def', 'aba')).toEqual(['aba']);
  });
});

describe('Array manipulation functions', () => {
  it('reverseArrayOfStrings reverses an array of strings', () => {
    expect(reverseArrayOfStrings(['abc', 'def'])).toEqual(['cba', 'fed']);
  });
});

describe('Utility functions', () => {
  it('generatePhoneNumbers generates n random Kyivstar phone numbers', () => {
    const phoneNumbers = generatePhoneNumbers(3);
    expect(phoneNumbers).toHaveLength(3);
    phoneNumbers.forEach((phoneNumber) => {
      expect(phoneNumber).toMatch(/^097\d{7}$/);
    });
  });
});
