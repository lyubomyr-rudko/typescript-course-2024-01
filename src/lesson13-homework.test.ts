import { describe, expect, it } from '@jest/globals';
import { getColor } from './lesson13-homework';

describe('getColor', () => {
  it('should be defined', () => {
    expect(getColor).toBeDefined();
  });

  it('should return empty string for getColor(0)', () => {
    expect(getColor(0)).toBe('');
  });
  it('should return string Red" for getColor(1)', () => {
    expect(getColor(1)).toBe('Red');
  });

  it('should return string "Green" for getColor(2)', () => {
    expect(getColor(2)).toBe('Green');
  });

  it('should return string "Red, Green" for getColor(3)', () => {
    expect(getColor(3)).toBe('Red, Green');
  });

  it('should return string "Blue" for getColor(4)', () => {
    expect(getColor(4)).toBe('Blue');
  });

  it('should return string "Red, Blue" for getColor(5)', () => {
    expect(getColor(5)).toBe('Red, Blue');
  });

  it('should return string "Green, Blue" for getColor(6)', () => {
    expect(getColor(6)).toBe('Green, Blue');
  });

  it('should return string "Red, Green, Blue" for getColor(7)', () => {
    expect(getColor(7)).toBe('Red, Green, Blue');
  });
});
