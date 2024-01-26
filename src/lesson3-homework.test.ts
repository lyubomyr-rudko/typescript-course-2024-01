import { describe, expect, it } from '@jest/globals';
import {
  removeAllVovels,
  removeVowelsFromArray,
  isPalindromeString,
  getPolindropesOnly,
  reverseArrayOfStrings,
  generatePhoneNumbers,
} from './lesson3-homework';

describe('removeAllVovels', () => {
  it('should be defined', () => {
    expect(removeAllVovels).toBeDefined();
  });

  it('returns a string with all vowels removed exception -> xcptn', () => {
    expect(removeAllVovels('exception')).toBe('xcptn');
  });

  it('returns a string with all vowels removed javascript -> jvscrpt', () => {
    expect(removeAllVovels('javascript')).toBe('jvscrpt');
  });
});

describe('removeVowelsFromArray', () => {
  it('should be defined', () => {
    expect(removeVowelsFromArray).toBeDefined();
  });

  it('takes an array of strings and returns the array of strings with all vowels removed', () => {
    expect(
      removeVowelsFromArray(['abstraction', 'javascript', 'react']),
    ).toEqual(['bstrctn', 'jvscrpt', 'rct']);
  });
});

describe('isPalindromeString', () => {
  it('should be defined', () => {
    expect(isPalindromeString).toBeDefined();
  });

  it('checks if a string is a palindrome abcba->true', () => {
    expect(isPalindromeString('abcba')).toBe(true);
  });
  it('checks if a string is a palindrome abc-> false', () => {
    expect(isPalindromeString('abc')).toBe(false);
  });
});

describe('getPolindropesOnly', () => {
  it('should be defined', () => {
    expect(getPolindropesOnly).toBeDefined();
  });

  it('takes any number of strings and returns array of strings that are polindromes abc, def, aba', () => {
    expect(getPolindropesOnly('abc', 'def', 'aba')).toEqual(['aba']);
  });
  it('takes any number of strings and returns array of strings that are polindromes abc, def, abn', () => {
    expect(getPolindropesOnly('abc', 'def', 'abn')).toEqual([]);
  });
});

describe('reverseArrayOfStrings', () => {
  it('should be defined', () => {
    expect(getPolindropesOnly).toBeDefined();
  });

  it('takes an array of strings and returns the reversed array of reversed strings [abc, def] -> [fed, cba]', () => {
    expect(reverseArrayOfStrings(['abc', 'def'])).toEqual(['fed', 'cba']);
  });
});

describe('generatePhoneNumbers', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('takes n param, and generates a list of n random kyivstar phone numbers 097XXXXXXX', () => {
    const n = 2;
    const result = generatePhoneNumbers(n);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length === n).toBe(true);

    result.forEach((number) => {
      expect(number.startsWith('097')).toBe(true);
      expect(number.length == 10).toBe(true);
    });
  });
});
