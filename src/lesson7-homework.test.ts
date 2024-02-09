import { getMostFrequentCharacter } from './lesson7-homework';

describe('getMostFrequentCharacter', () => {
  it('should be defined', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });

  it('should return -s- for She sells seashells by the seashore. string', () => {
    expect(
      getMostFrequentCharacter('She sells seashells by the seashore.'),
    ).toBe('s');
  });
  it('should return empty string for empty string', () => {
    expect(getMostFrequentCharacter('')).toBe('');
  });
});
