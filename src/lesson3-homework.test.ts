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

  it('returns `xtnsn` for `extension`', () => {
    expect(removeAllVowels('extension')).toBe('xtnsn');
  });
  it('returns `plmrphsm` for `polymorphism`', () => {
    expect(removeAllVowels('polymorphism')).toBe('plmrphsm');
  });
  it('returns `qlbrm` for `eqilibrium`', () => {
    expect(removeAllVowels('eqilibrium')).toBe('qlbrm');
  });
});

describe('removeVowelsFromArray', () => {
  it('should be defined', () => {
    expect(removeAllVowels).toBeDefined();
  });

  it(`returns ['xtnsn', 'plmrphsm', 'qlbrm'] for ['extension', 'polymorphism', 'eqilibrium']`, () => {
    expect(
      removeVowelsFromArray(['extension', 'polymorphism', 'eqilibrium']),
    ).toStrictEqual(['xtnsn', 'plmrphsm', 'qlbrm']);
  });
  it(`returns ['xplct', 'mndtr', 'stkhldrs'] for ['explicity', 'mandatory', 'stakeholders']`, () => {
    expect(
      removeVowelsFromArray(['explicity', 'mandatory', 'stakeholders']),
    ).toStrictEqual(['xplct', 'mndtr', 'stkhldrs']);
  });
  it(`returns ['btfl', 'ccssblt', 'cnstrctn'] for ['beautiful', 'accessibility', 'construction']`, () => {
    expect(
      removeVowelsFromArray(['beautiful', 'accessibility', 'construction']),
    ).toStrictEqual(['btfl', 'ccssblt', 'cnstrctn']);
  });
});

describe('isPalindromeString', () => {
  it('should be defined', () => {
    expect(isPalindromeString).toBeDefined();
  });

  it(`returns true for 'Madam'`, () => {
    expect(isPalindromeString('Madam')).toBe(true);
  });
  it(`returns true for 'Racecar'`, () => {
    expect(isPalindromeString('Racecar')).toBe(true);
  });
  it(`returns false for 'example'`, () => {
    expect(isPalindromeString('example')).toBe(false);
  });
});

describe('getPolindropesOnly', () => {
  it('should be defined', () => {
    expect(getPolindropesOnly).toBeDefined();
  });

  it(`returns ['Madam', 'Mom'] for ('Madam', 'Test', 'Mom')`, () => {
    expect(getPolindropesOnly('Madam', 'Test', 'Mom')).toStrictEqual([
      'Madam',
      'Mom',
    ]);
  });
  it(`returns ['Racecar'] for ('think', 'Racecar', 'potato')`, () => {
    expect(getPolindropesOnly('think', 'Racecar', 'potato')).toStrictEqual([
      'Racecar',
    ]);
  });
  it(`returns ['Civic', 'refer'] for ('Civic', 'establish', 'refer')`, () => {
    expect(getPolindropesOnly('Civic', 'establish', 'refer')).toStrictEqual([
      'Civic',
      'refer',
    ]);
  });
});

describe('reverseArrayOfStrings', () => {
  it('should be defined', () => {
    expect(reverseArrayOfStrings).toBeDefined();
  });

  it(`returns ['rebmem', 'tset', 'olleh'] for ['hello', 'test', 'member']`, () => {
    expect(reverseArrayOfStrings(['hello', 'test', 'member'])).toStrictEqual([
      'rebmem',
      'tset',
      'olleh',
    ]);
  });
  it(`returns ['otatop', 'neerg', 'kniht'] for ['think', 'green', 'potato']`, () => {
    expect(reverseArrayOfStrings(['think', 'green', 'potato'])).toStrictEqual([
      'otatop',
      'neerg',
      'kniht',
    ]);
  });
  it(`returns ['wolley', 'hsilbatse', 'krof'] for ['fork', 'establish', 'yellow']`, () => {
    expect(
      reverseArrayOfStrings(['fork', 'establish', 'yellow']),
    ).toStrictEqual(['wolley', 'hsilbatse', 'krof']);
  });
});

describe('generatePhoneNumbers', () => {
  it('should be defined', () => {
    expect(generatePhoneNumbers).toBeDefined();
  });

  it('returns length 5 for params 5', () => {
    expect(generatePhoneNumbers(5)).toHaveLength(5);
  });
  it('returns length 20 for params 20', () => {
    expect(generatePhoneNumbers(20)).toHaveLength(20);
  });
  it('returns length 2 for params 2', () => {
    expect(generatePhoneNumbers(2)).toHaveLength(2);
  });
});
