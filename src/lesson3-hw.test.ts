import { describe, expect, it } from '@jest/globals';
import {
  removeAllVowels,
  removeVowelsFromArray,
  isPalindromeString,
  getPalindromesOnly,
  reverseArrayOfStrings,
  generatePhoneNumbers,
} from './lesson3-homework';

describe('Lesson 3 Homework Tests', () => {
  it('should remove all vowels from a string', () => {
    expect(removeAllVowels('exception')).toBe('xcptn');
    expect(removeAllVowels('javascript')).toBe('jvscrpt');
  });

  it('should remove vowels from an array of strings', () => {
    const inputArray = ['abstraction', 'javascript', 'react'];
    const expectedArray = ['bstrctn', 'jvscrpt', 'rct'];
    expect(removeVowelsFromArray(inputArray)).toEqual(expectedArray);
  });

  it('should check if a string is a palindrome', () => {
    expect(isPalindromeString('abcba')).toBe(true);
    expect(isPalindromeString('abc')).toBe(false);
  });

  it('should filter palindromes from an array of strings', () => {
    const inputArray = ['abc', 'def', 'aba'];
    const expectedArray = ['aba'];
    expect(getPalindromesOnly(...inputArray)).toEqual(expectedArray);
  });

  it('should reverse an array of strings', () => {
    const inputArray = ['abc', 'def'];
    const expectedArray = ['fed', 'cba'];
    expect(reverseArrayOfStrings(inputArray)).toEqual(expectedArray);
  });

  it('should generate phone numbers with the specified prefix', () => {
    const numberOfPhoneNumbers = 5;
    const randomKyivstarNumbers = generatePhoneNumbers(numberOfPhoneNumbers);

    expect(randomKyivstarNumbers).toHaveLength(numberOfPhoneNumbers);
    expect(
      randomKyivstarNumbers.every((number) => number.startsWith('097')),
    ).toBe(true);
  });
});
