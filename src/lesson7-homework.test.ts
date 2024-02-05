import { expect, describe, it } from '@jest/globals';
import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  it('check for function presence getMostFrequentCharacter', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });
  it('test string with value "hello world"', () => {
    expect(getMostFrequentCharacter('hello world ')).toBe('l');
  });
});
