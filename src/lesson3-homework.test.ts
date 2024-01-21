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
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('exception -> xcptn', () => {
    expect(removeAllVovels('exception')).toBe('xcptn');
  });

  it('javascript -> jvscrpt', () => {
    expect(removeAllVovels('javascript')).toBe('jvscrpt');
  });

  it('sadfabsf -> jvscrpt', () => {
    expect(removeAllVovels('sadfabsf')).toBe('sdfbsf');
  });
});

describe('removeVowelsFromArray', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('[abstraction, javascript, react] -> [bstrctn, jvscrpt, rct]', () => {
    expect(
      removeVowelsFromArray(['abstraction', 'javascript', 'react']),
    ).toStrictEqual(['bstrctn', 'jvscrpt', 'rct']);
  });
});

describe('isPalindromeString', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('abcba is a palindrome', () => {
    expect(isPalindromeString('abcba')).toBe(true);
  });

  it('aba is a palindrome', () => {
    expect(isPalindromeString('aba')).toBe(true);
  });

  it('bob is a palindrome', () => {
    expect(isPalindromeString('bob')).toBe(true);
  });
});

describe('getPolindropesOnly', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it("('abc', 'def', 'aba') -> ['aba']", () => {
    expect(getPolindropesOnly('abc', 'def', 'aba')).toStrictEqual(['aba']);
  });

  it("('bob', 'fiif', 'ababa') -> ['aba']", () => {
    expect(getPolindropesOnly('bob', 'abc', 'ababa')).toStrictEqual([
      'bob',
      'ababa',
    ]);
  });
});

describe('reverseArrayOfStrings', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it("['abc', 'def'] -> ['fed', 'cba']", () => {
    expect(reverseArrayOfStrings(['abc', 'def'])).toStrictEqual(['fed', 'cba']);
  });

  it("['123', 'you'] -> ['uoy', '321']", () => {
    expect(reverseArrayOfStrings(['123', 'you'])).toStrictEqual(['uoy', '321']);
  });
});

describe('generatePhoneNumbers', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('for 2  should return array of 2 phone numbers matches', () => {
    expect(generatePhoneNumbers(2)).toHaveLength(2);
    generatePhoneNumbers(2).forEach((num) => {
      expect(num).toMatch(/^\(097\d{7}\)$/);
    });
  });

  it('for 3  should return array of 3 phone numbers matches', () => {
    expect(generatePhoneNumbers(3)).toHaveLength(3);
    generatePhoneNumbers(3).forEach((num) => {
      expect(num).toMatch(/^\(097\d{7}\)$/);
    });
  });
  it('for 0  should return an empty array', () => {
    expect(generatePhoneNumbers(0)).toHaveLength(0);
    expect(generatePhoneNumbers(0)).toStrictEqual([]);
  });
});
