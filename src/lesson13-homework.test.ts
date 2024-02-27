import { it, describe, expect } from '@jest/globals';

import { exercise55 } from './lesson13-homework';

const { getColor } = exercise55();

describe('getColor', () => {
  it('should be defined', () => {
    expect(getColor).toBeDefined();
  });

  it('should return an empty string', () => {
    expect(getColor(0)).toBe('');
  });

  it('should return correct color by bitmask', () => {
    expect(getColor(1)).toBe('Red');
    expect(getColor(2)).toBe('Green');
    expect(getColor(3)).toBe('Red, Green');
    expect(getColor(4)).toBe('Blue');
    expect(getColor(5)).toBe('Red, Blue');
    expect(getColor(6)).toBe('Green, Blue');
    expect(getColor(7)).toBe('Red, Green, Blue');
  });
});
