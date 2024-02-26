import { describe, it, expect } from '@jest/globals';
import { getColor } from './lesson13-homework';

describe(`getColor`, () => {
  it(`should to be defined`, () => {
    expect(getColor).toBeDefined();
  });
  it(`getColor(0) === ''; (empty string, no color), bitmask ( 0 0 0 )`, () => {
    expect(getColor(0)).toBe('');
  });
  it(`getColor(1) === 'Red'; bitmask ( 0 0 1 )`, () => {
    expect(getColor(1)).toBe('Red');
  });
  it(`getColor(2) === 'Green'; bitmask ( 0 1 0 )`, () => {
    expect(getColor(2)).toBe('Green');
  });
  it(`getColor(3) === 'Red, Green'; bitmask ( 0 1 1 )`, () => {
    expect(getColor(3)).toBe('Red, Green');
  });
  it(`getColor(4) === 'Blue'; bitmask ( 1 0 0 )`, () => {
    expect(getColor(4)).toBe('Blue');
  });
  it(`getColor(5) === 'Red, Blue'; bitmask ( 1 0 1 )`, () => {
    expect(getColor(5)).toBe('Red, Blue');
  });
  it(`getColor(6) === 'Green, Blue';  bitmask   ( 1 1 0 )`, () => {
    expect(getColor(6)).toBe('Green, Blue');
  });
  it(`getColor(7) === 'Red, Green, Blue'; bitmask ( 1 1 1 )`, () => {
    expect(getColor(7)).toBe('Red, Green, Blue');
  });
});
