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
  it('removeAllVovels', () => {
    expect(removeAllVovels).toBeDefined();
  });
  it('removeAllVovels1', () => {
    expect(removeAllVovels('Under pressure')).toBe('ndr prssr');
  });
  it('removeAllVovels2', () => {
    expect(removeAllVovels('Orkostan')).toBe('rkstn');
  });
});

describe('removeVowelsFromArray', () => {
  it('removeVowelsFromArray', () => {
    expect(removeVowelsFromArray).toBeDefined();
  });
  it('removeVowelsFromArray1', () => {
    expect(removeVowelsFromArray(['Mask', 'Tramp'])).toEqual(['Msk', 'Trmp']);
  });
  it('removeVowelsFromArray2', () => {
    expect(removeVowelsFromArray(['Russia', 'must', 'die'])).toEqual([
      'Rss',
      'mst',
      'd',
    ]);
  });
});

describe('isPalindromeString', () => {
  it('isPalindromeString', () => {
    expect(isPalindromeString).toBeDefined();
  });
  it('isPalindromeString1', () => {
    expect(isPalindromeString('tenizzinet')).toBe(true);
  });

  it('isPalindromeString2', () => {
    expect(isPalindromeString('teniznet')).toBe(false);
  });
});

describe('getPolindropesOnly', () => {
  it('getPolindropesOnly', () => {
    expect(getPolindropesOnly).toBeDefined();
  });
  it('getPolindropesOnly1', () => {
    expect(getPolindropesOnly('tenizzinet', 'abba', 'asdsa', 'qwe')).toEqual([
      'tenizzinet',
      'abba',
      'asdsa',
    ]);
  });

  it('getPolindropesOnly2', () => {
    expect(getPolindropesOnly('123321', 'asd')).toEqual(['123321']);
  });
});

describe('reverseArrayOfStrings', () => {
  it('reverseArrayOfStrings', () => {
    expect(reverseArrayOfStrings).toBeDefined();
  });
  it('reverseArrayOfStrings1', () => {
    expect(reverseArrayOfStrings(['first', 'second', 'next', 'last'])).toEqual([
      'last',
      'next',
      'second',
      'first',
    ]);
  });
  it('reverseArrayOfStrings2', () => {
    expect(reverseArrayOfStrings(['1', '2', '3'])).toEqual(['3', '2', '1']);
  });
});

describe('generatePhoneNumbers', () => {
  it('generatePhoneNumbers', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  const count: number = 10;
  let phoneNumbers: string[] = [];

  beforeAll(() => {
    phoneNumbers = generatePhoneNumbers(count);
  });

  it('test some count generated', () => {
    expect(phoneNumbers).toHaveLength(count);
  });

  it('check correct phone numbers format', () => {
    phoneNumbers.forEach((phone) => {
      expect(phone).toMatch(/^(097|098|096)\d{7}$/);
    });
  });

  it('Test unic phone number without duplicates', () => {
    const uniqueNumbers = new Set(phoneNumbers);
    expect(uniqueNumbers.size).toEqual(phoneNumbers.length);
  });
});
