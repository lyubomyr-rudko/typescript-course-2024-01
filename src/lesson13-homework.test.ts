import { describe, expect } from '@jest/globals';
import { getColor } from './lesson13-homework';

describe('sum', () => {
  it('should be defined', () => {
    expect(getColor).toBeDefined();
  });
  // it('check color', () => {
  //   let value: number;
  //   let expected;
  //   if ((value = 0)) {
  //     expected = '';
  //   }
  //   if ((value = 1)) {
  //     expected = 'Red';
  //   }
  //   if ((value = 2)) {
  //     expected = 'Green';
  //   }
  //   if ((value = 3)) {
  //     expected = 'Green, Blue';
  //   }
  //   if ((value = 4)) {
  //     expected = 'Blue';
  //   }
  //   if ((value = 5)) {
  //     expected = 'Red, Blue';
  //   }
  //   if ((value = 6)) {
  //     expected = 'Red, Green';
  //   }
  //   if ((value = 7)) {
  //     expected = 'Red, Green, Blue';
  //   }

  //   expect(getColor(value)).toBe(expected);
  // });
  it('check color if value 0', () => {
    expect(getColor(0)).toBe('');
  });
  it('check color if value 1', () => {
    expect(getColor(1)).toBe('Red');
  });
  it('check color if value 2', () => {
    expect(getColor(2)).toBe('Green');
  });
  it('check color if value 3', () => {
    expect(getColor(3)).toBe('Red, Green'); // getColor(3) === "Green, Blue" error
  });
  it('check color if value 4', () => {
    expect(getColor(4)).toBe('Blue');
  });
  it('check color if value 5', () => {
    expect(getColor(5)).toBe('Red, Blue');
  });
  it('check color if value 6', () => {
    expect(getColor(6)).toBe('Green, Blue'); // getColor(6) === "Red, Green" error
  });
  it('check color if value 7', () => {
    expect(getColor(7)).toBe('Red, Green, Blue');
  });
});
// getColor(0) === """ (empty string, no color), bitmask ( 0 0 0 )
// getColor(1) === "Red" // bitmask ( 0 0 1 )
// getColor(2) === "Green // bitmask ( 0 1 0 )
// getColor(3) === "Green, Blue" // bitmask ( 0 1 1 )
// getColor(4) === "Blue" bitmask ( 1 0 0 )
// getColor(5) === "Red, Blue" // bitmask ( 1 0 1 )
// getColor(6) === "Red, Green" // bitmask   ( 1 1 0 )
// getColor(7) === "Red, Green, Blue" // bitmask ( 1 1 1 )
