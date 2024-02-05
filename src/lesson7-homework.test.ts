import { describe, it, expect } from '@jest/globals';
import { getMostFrequentCharacter, test } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  const exampleStr1 = 'Hi! How are you today? What are you planning?';
  const exampleStr2 =
    'For achievement a result in studying English you should learn new words every day!';
  const exampleStr3 =
    'The weather is sunny today. The best of time in order to go to sea.';
  const exampleStr4 =
    'I am grateful our teacher Lyubomir Rudko for fetched knowledges on course TypeScript!';
  it('should to be defined', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });
  it(`should return the most frequent character 'a' in string`, () => {
    expect(getMostFrequentCharacter(exampleStr1)).toBe('a');
  });
  it(`should return the most frequent character 'e' in string`, () => {
    expect(getMostFrequentCharacter(exampleStr2)).toBe('e');
  });
  it(`should return the most frequent character 't' in string`, () => {
    expect(getMostFrequentCharacter(exampleStr3)).toBe('t');
  });
  // eslint-disable-next-line jest/no-identical-title
  it(`should return the most frequent character 'e' in string`, () => {
    expect(getMostFrequentCharacter(exampleStr4)).toBe('e');
  });
  it(`should return empty string`, () => {
    expect(getMostFrequentCharacter('')).toBe('');
  });
  it(`should return the most frequent character 't' in '${test}' string`, () => {
    expect(getMostFrequentCharacter(test)).toBe('t');
  });
});
