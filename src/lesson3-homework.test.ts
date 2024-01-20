import { describe, expect, it } from '@jest/globals';
import {
  generatePhoneNumbers,
  getPolindropesOnly,
  isPalindromeString,
  removeAllVovels,
  removeVowelsFromArray,
  reverseArrayOfStrings,
} from './lesson3-homework';

describe(`removeAllVovels`, () => {
  it(`should be defined`, () => {
    expect(removeAllVovels).toBeDefined();
  });
  it(`'exception' should be 'xcptn'`, () => {
    expect(removeAllVovels('exception')).toBe('xcptn');
  });
  it(`'javascript' should be 'jvscrpt'`, () => {
    expect(removeAllVovels('javascript')).toBe('jvscrpt');
  });
});

describe(`removeVowelsFromArray`, () => {
  it(`should be defined`, () => {
    expect(removeVowelsFromArray).toBeDefined();
  });
  it(`['abstraction', 'javascript', 'react'] should be ['bstrctn', 'jvscrpt', 'rct']`, () => {
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

describe(`getPolindropesOnly`, () => {
  it(`should be defined`, () => {
    expect(getPolindropesOnly).toBeDefined();
  });
  it(`'abc', 'def', 'aba' should be ['aba]`, () => {
    expect(getPolindropesOnly('abc', 'def', 'aba')).toStrictEqual(['aba']);
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
  it(`generates the correct number of phone numbers`, () => {
    const count = 5;
    const phoneNumbers = generatePhoneNumbers(count);
    expect(phoneNumbers.length).toBe(count);
  });
  it(`generates phone numbers with the correct format`, () => {
    const phoneNumbers = generatePhoneNumbers(10);
    phoneNumbers.forEach((phoneNumber) => {
      expect(phoneNumber).toMatch(/^097\d{7}$/);
    });
  });
});
