import { describe, expect, it } from '@jest/globals';
import {
  removeAllVowels,
  removeVowelsFromArray,
  isPalindromeString,
  getPolindropesOnly,
  reverseArrayOfStrings,
  generatePhoneNumbers,
} from './lesson3-homework';

describe('removeAllVowels', () => {
  it('should be defined', () => {
    expect(removeAllVowels).toBeDefined();
  });
  it('remove vowels from exception should be xcptn', () => {
    expect(removeAllVowels('exception')).toBe('xcptn');
  });
  it('remove vowels from cucumber should be ccmbr', () => {
    expect(removeAllVowels('cucumber')).toBe('ccmbr');
  });
  it('remove vowels from electronic should be lctrnc', () => {
    expect(removeAllVowels('electronic')).toBe('lctrnc');
  });
});

describe('removeVowelsFromArray', () => {
  it('should be defined', () => {
    expect(removeVowelsFromArray).toBeDefined();
  });

  it('remove vowels from [abstraction, javascript, react] should be [bstrctn, jvscrpt, rct]', () => {
    expect(
      removeVowelsFromArray(['abstraction', 'javascript', 'react']),
    ).toStrictEqual(['bstrctn', 'jvscrpt', 'rct']);
  });

  it('remove vowels from [cucumber, electronic, exception] should be [ccmbr, lctrnc, xcptn]', () => {
    expect(
      removeVowelsFromArray(['cucumber', 'electronic', 'exception']),
    ).toStrictEqual(['ccmbr', 'lctrnc', 'xcptn']);
  });
});

describe('isPalindromeString', () => {
  it('should be defined', () => {
    expect(isPalindromeString).toBeDefined();
  });
  it('for abcba should return true', () => {
    expect(isPalindromeString('abcba')).toBe(true);
  });
  it('for abc should return false', () => {
    expect(isPalindromeString('abc')).toBe(false);
  });
  it('for asdsa should return true', () => {
    expect(isPalindromeString('asdsa')).toBe(true);
  });
});

describe('getPolindropesOnly', () => {
  it('should be defined', () => {
    expect(getPolindropesOnly).toBeDefined();
  });

  it('for (abc, def, aba) should return [aba]', () => {
    expect(getPolindropesOnly('abc', 'def', 'aba')).toStrictEqual(['aba']);
  });

  it('for (com, creon, hello, aba, remer) should return [aba]', () => {
    expect(
      getPolindropesOnly('com', 'creon', 'hello', 'aba', 'remer'),
    ).toStrictEqual(['aba', 'remer']);
  });
});

describe('reverseArrayOfStrings', () => {
  it('should be defined', () => {
    expect(reverseArrayOfStrings).toBeDefined();
  });

  it('for [abc, def]  should return [fed, cba]', () => {
    expect(reverseArrayOfStrings(['abc', 'def'])).toStrictEqual(['fed', 'cba']);
  });
  it('for [loc, mel, liza]  should return [azil, lem, col]', () => {
    expect(reverseArrayOfStrings(['loc', 'mel', 'liza'])).toStrictEqual([
      'azil',
      'lem',
      'col',
    ]);
  });
  it('for []  should return []', () => {
    expect(reverseArrayOfStrings([])).toStrictEqual([]);
  });
});

describe('generatePhoneNumbers', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('for 5  should return array of 5 phone numbers matches /^(097d{7})$/', () => {
    expect(generatePhoneNumbers(5)).toHaveLength(5);
    generatePhoneNumbers(5).forEach((num) => {
      expect(num).toMatch(/^\(097\d{7}\)$/);
    });
  });

  it('for 1  should return array of 1 phone numbers matches /^(097d{7})$/', () => {
    expect(generatePhoneNumbers(1)).toHaveLength(1);
    generatePhoneNumbers(1).forEach((num) => {
      expect(num).toMatch(/^\(097\d{7}\)$/);
    });
  });
  it('for 0  should return an empty array', () => {
    expect(generatePhoneNumbers(0)).toHaveLength(0);
    expect(generatePhoneNumbers(0)).toStrictEqual([]);
  });
});
