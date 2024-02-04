import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter function', () => {
  it('should return "s" for the string "She sells seashells by the seashore."', () => {
    const str = 'She sells seashells by the seashore.';
    expect(getMostFrequentCharacter(str)).toBe('s');
  });

  it('should return "a" for the string "banana"', () => {
    const str = 'banana';
    expect(getMostFrequentCharacter(str)).toBe('a');
  });

  it('should return "t" for the string "test"', () => {
    const str = 'test';
    expect(getMostFrequentCharacter(str)).toBe('t');
  });
});
