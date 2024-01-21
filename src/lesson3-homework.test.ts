import { describe, expect, it } from '@jest/globals';
import {
  removeAllVowels,
  removeVowelsFromArray,
  isPalindromeString,
  getPalindromesOnly,
  reverseArrayOfStrings,
  generatePhoneNumbers,
} from './lesson3-homework';

describe(`removeAllVowels`, () => {
  it(`should be defined`, () => {
    expect(removeAllVowels).toBeDefined();
  });
  it(`'exception' should be 'xcptn'`, () => {
    expect(removeAllVowels('exception')).toBe('xcptn');
  });
  it(`'javascript' should be 'jvscrpt'`, () => {
    expect(removeAllVowels('javascript')).toBe('jvscrpt');
  });
});

describe(`removeVowelsFromArray`, () => {
  it(`should be defined`, () => {
    expect(removeVowelsFromArray).toBeDefined();
  });
  it(`['function', 'javascript', 'react'] should be ['fnctn', 'jvscrpt', 'rct']`, () => {
    expect(
      removeVowelsFromArray(['abstraction', 'javascript', 'react']),
    ).toStrictEqual(['bstrctn', 'jvscrpt', 'rct']);
  });
});

describe(`isPalindromeString`, () => {
  it(`should be defined`, () => {
    expect(removeVowelsFromArray).toBeDefined();
  });
  it(`'abcba' should be true`, () => {
    expect(isPalindromeString('abcba')).toBe(true);
  });
  it(`'abc' should be true`, () => {
    expect(isPalindromeString('abc')).toBe(false);
  });
});

describe(`getPalindromesOnly`, () => {
  it(`should be defined`, () => {
    expect(getPalindromesOnly).toBeDefined();
  });
  it(`'abc', 'def', 'aba' should be ['aba]`, () => {
    expect(getPalindromesOnly('abc', 'def', 'aba')).toStrictEqual(['aba']);
  });
});

describe(`reverseArrayOfStrings`, () => {
  it(`should be defined`, () => {
    expect(reverseArrayOfStrings).toBeDefined();
  });
  it(`['abc', 'def'] should be ['fed', 'cba']`, () => {
    expect(reverseArrayOfStrings(['abc', 'def'])).toStrictEqual(['fed', 'cba']);
  });
});

describe(`generatePhoneNumbers`, () => {
  it(`should be defined`, () => {
    expect(generatePhoneNumbers).toBeDefined();
  });
  it(`generates phone numbers with the correct format`, () => {
    const phoneNumbers = generatePhoneNumbers(5);
    phoneNumbers.forEach((phoneNumber) => {
      expect(phoneNumber).toMatch(/^097\d{7}$/);
    });
  });
});
