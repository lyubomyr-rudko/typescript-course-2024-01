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

  it('exception is turning xcptn', () => {
    expect(removeAllVovels('exception')).toBe('xcptn');
  });

  it('javascript is turning jvscrpt', () => {
    expect(removeAllVovels('javascript')).toBe('jvscrpt');
  });
});

describe('removeVowelsFromArray', () => {
  it('should be defined', () => {
    expect(removeVowelsFromArray).toBeDefined();
  });

  it(`[abstraction', 'javascript', 'react'] is turning ['bstrctn', 'jvscrpt', 'rct']`, () => {
    expect(
      removeVowelsFromArray(['abstraction', 'javascript', 'react']),
    ).toStrictEqual(['bstrctn', 'jvscrpt', 'rct']);
  });
});

describe('isPalindromeString', () => {
  it('should be defined', () => {
    expect(isPalindromeString).toBeDefined();
  });

  it(`'abcba' is a palindrome`, () => {
    expect(isPalindromeString('abcba')).toBe(true);
  });
  it(`'abc' is a palindrome`, () => {
    expect(isPalindromeString('abc')).toBe(false);
  });
});

describe('getPolindropesOnly', () => {
  it('should be defined', () => {
    expect(getPolindropesOnly).toBeDefined();
  });

  it(`('abc', 'def', 'aba') -> ['aba']`, () => {
    expect(getPolindropesOnly('abc', 'def', 'aba')).toStrictEqual(['aba']);
  });
});

describe('reverseArrayOfStrings', () => {
  it('should be defined', () => {
    expect(reverseArrayOfStrings).toBeDefined();
  });

  it(`['abc', 'def'] -> ['fed', 'cba']`, () => {
    expect(reverseArrayOfStrings(['abc', 'def'])).toStrictEqual(['fed', 'cba']);
  });
});

describe('generatePhoneNumbers', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('should generate an array of phone numbers with the specified length', () => {
    const phoneNumbers = generatePhoneNumbers(7);
    expect(phoneNumbers).toHaveLength(7);
  });

  it('should generate phone numbers starting with 097', () => {
    const phoneNumbers = generatePhoneNumbers(7);
    phoneNumbers.forEach((phoneNumber) => {
      expect(phoneNumber.startsWith('097')).toBe(true);
    });
  });

  it('should generate unique phone numbers', () => {
    const phoneNumbers = generatePhoneNumbers(3);
    const uniquePhoneNumbers = [...new Set(phoneNumbers)];
    expect(uniquePhoneNumbers).toHaveLength(phoneNumbers.length);
  });
});
