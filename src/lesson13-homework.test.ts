import { describe, expect, it } from '@jest/globals';
import { getColor } from './lesson13-homework';

describe('getColor function', () => {
  const testCases = [
    { input: 0, expected: '' },
    { input: 1, expected: 'Red' },
    { input: 2, expected: 'Green' },
    { input: 3, expected: 'Red, Green' },
    { input: 4, expected: 'Blue' },
    { input: 5, expected: 'Red, Blue' },
    { input: 6, expected: 'Green, Blue' },
    { input: 7, expected: 'Red, Green, Blue' },
  ];

  it('test all colors', () => {
    testCases.forEach(({ input, expected }) => {
      expect(getColor(input)).toBe(expected);
    });
  });
});
