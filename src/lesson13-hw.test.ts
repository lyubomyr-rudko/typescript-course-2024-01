import { getColorTest } from './lesson13-homework'; // Adjust the path according to your project structure

describe('getColorTest function', () => {
  test('getColor(0) return an empty string', () => {
    expect(getColorTest(0)).toBe('');
  });

  test('getColorTest(1) return "Red"', () => {
    expect(getColorTest(1)).toBe('Red');
  });

  test('getColorTest(2) return "Green"', () => {
    expect(getColorTest(2)).toBe('Green');
  });

  test('getColorTest(3) return "Green, Blue"', () => {
    expect(getColorTest(3)).toBe('Green, Blue');
  });

  test('getColorTest(4) return "Blue"', () => {
    expect(getColorTest(4)).toBe('Blue');
  });

  test('getColorTest(5) return "Red, Blue"', () => {
    expect(getColorTest(5)).toBe('Red, Blue');
  });

  test('getColorTest(6) return "Red, Green"', () => {
    expect(getColorTest(6)).toBe('Red, Green');
  });

  test('getColorTest(7) return "Red, Green, Blue"', () => {
    expect(getColorTest(7)).toBe('Red, Green, Blue');
  });
});

// TODO: add unit tests for getColor function
// getColor(0) === """ (empty string, no color), bitmask ( 0 0 0 )
// getColor(1) === "Red" // bitmask ( 0 0 1 )
// getColor(2) === "Green // bitmask ( 0 1 0 )
// getColor(3) === "Green, Blue" // bitmask ( 0 1 1 )
// getColor(4) === "Blue" bitmask ( 1 0 0 )
// getColor(5) === "Red, Blue" // bitmask ( 1 0 1 )
// getColor(6) === "Red, Green" // bitmask   ( 1 1 0 )
// getColor(7) === "Red, Green, Blue" // bitmask ( 1 1 1 )
