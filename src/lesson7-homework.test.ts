import { getMostFrequentCharacter } from './lesson7-homework';

test('getMostFrequentCharacter returns the most frequent character', () => {
  expect(getMostFrequentCharacter('She sells seashells by the seashore.')).toBe(
    'e',
  );
  expect(getMostFrequentCharacter('abbbcccc')).toBe('c');
  expect(getMostFrequentCharacter('abc')).toBe('a');
});
