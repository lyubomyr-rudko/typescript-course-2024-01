import {
  removeAllVovels,
  removeVowelsFromArray,
  isPalindromeString,
  getPolindropesOnly,
  reverseArrayOfStrings,
  generatePhoneNumbers,
} from '../lesson3-homework';

describe('removeAllVovels', () => {
  it('should remove all vowels from the string', () => {
    const result = removeAllVovels('asdf');
    expect(result).toBe('sdf');
  });
  it('should remove all vowels(also UpperCase) from the string', () => {
    const result = removeAllVovels('HeLLO WoRld');
    expect(result).toBe('HLL WRld');
  });
  it('should handle an empty string', () => {
    const result = removeAllVovels('');
    expect(result).toBe('');
  });
  it('should handle a string with only vowels', () => {
    const result = removeAllVovels('aeiouAEIOU');
    expect(result).toBe('');
  });
});

describe('removeVowelsFromArray', () => {
  it('should should remove all vowels from the array', () => {
    const inputArray = ['abstraction', 'javascript', 'Angular'];
    const expectedArray = ['bstrctn', 'jvscrpt', 'nglr'];

    const result = removeVowelsFromArray(inputArray);
    expect(result).toEqual(expectedArray);
  });
  it('should handle an array with empty strings', () => {
    const inputArray = ['', '', ''];
    const expectedArray = ['', '', ''];

    const result = removeVowelsFromArray(inputArray);

    expect(result).toEqual(expectedArray);
  });
  it('should handle an array with no vowels', () => {
    const inputArray = ['bcd', 'xyz', '123'];
    const expectedArray = ['bcd', 'xyz', '123'];

    const result = removeVowelsFromArray(inputArray);

    expect(result).toEqual(expectedArray);
  });
  it('should handle an empty array', () => {
    const inputArray: string[] = [];
    const expectedArray: string[] = [];

    const result = removeVowelsFromArray(inputArray);

    expect(result).toEqual(expectedArray);
  });
});

describe('isPalindromeString', () => {
  it('should return true for a palindrome string', () => {
    const palindromeString = 'abbcbba';
    const result = isPalindromeString(palindromeString);
    expect(result).toBe(true);
  });
  it('should return true for a palindrome string with spaces', () => {
    const palindromeString = 'is level si';

    const result = isPalindromeString(palindromeString);
    expect(result).toBe(true);
  });
  it('should return false for a non-palindrome string', () => {
    const nonPalindromeString = 'hello';

    const result = isPalindromeString(nonPalindromeString);

    expect(result).toBe(false);
  });
  it('should handle an empty string', () => {
    const emptyString = '';

    const result = isPalindromeString(emptyString);

    expect(result).toBe(true);
  });
  describe('getPolindropesOnly', () => {
    it('should return an array with palindrome strings only', () => {
      const result = getPolindropesOnly('abc', 'def', 'aba');
      expect(result).toEqual(['aba']);
    });
    it('should handle an array with no palindrome strings', () => {
      const result = getPolindropesOnly('hello', 'world', 'openai');

      expect(result).toEqual([]);
    });
    it('should handle an array with a mix of palindrome and non-palindrome strings', () => {
      const result = getPolindropesOnly('abc', 'level', 'def', 'madam');

      expect(result).toEqual(['level', 'madam']);
    });
    it('should handle an array with empty strings', () => {
      const result = getPolindropesOnly('', '', '');

      expect(result).toEqual([]);
    });
  });
});

describe('reverseArrayOfStrings', () => {
  it('should reverse an array of strings', () => {
    const inputArray = ['abc', 'def', 'ghi'];
    const expectedArray = ['ihg', 'fed', 'cba'];

    const result = reverseArrayOfStrings(inputArray);

    expect(result).toEqual(expectedArray);
  });
  it('should handle an array with empty strings', () => {
    const inputArray = ['', '', ''];
    const expectedArray = ['', '', ''];

    const result = reverseArrayOfStrings(inputArray);

    expect(result).toEqual(expectedArray);
  });
  it('should reverse each string in an array with mixed lengths', () => {
    const inputArray = ['abc', 'defgh', 'ijklmnop'];
    const expectedArray = ['ponmlkji', 'hgfed', 'cba'];

    const result = reverseArrayOfStrings(inputArray);

    expect(result).toEqual(expectedArray);
  });
});

describe('generatePhoneNumbers', () => {
  it('should generate an array of phone numbers with the specified length', () => {
    const numberOfPhoneNumbers = 5;
    const result = generatePhoneNumbers(numberOfPhoneNumbers);

    expect(Array.isArray(result)).toBe(true);

    expect(result.length).toBe(numberOfPhoneNumbers);

    result.forEach((phoneNumber) => {
      expect(typeof phoneNumber).toBe('string');
    });

    const phoneNumberPattern = /^097-\d{7}$/;
    result.forEach((phoneNumber) => {
      expect(phoneNumber).toMatch(phoneNumberPattern);
    });
  });

  it('should handle generating an empty array', () => {
    const result = generatePhoneNumbers(0);

    expect(result).toEqual([]);
  });
});
