import { excerciseA, excerciseB, excerciseC } from './lesson14-homework';

describe('excerciseA', () => {
  it('returns 0 for null input', () => {
    expect(excerciseA(null)).toBe(0);
  });

  it('returns 0 for undefined input', () => {
    expect(excerciseA(undefined)).toBe(0);
  });

  it('returns 0 for an empty array', () => {
    expect(excerciseA([])).toBe(0);
  });

  it('returns 0 for an array with one element', () => {
    expect(excerciseA([5])).toBe(0);
  });

  it('returns the sum of all elements except the highest and lowest', () => {
    expect(excerciseA([6, 2, 1, 8, 10])).toBe(16);
    expect(excerciseA([1, 1, 11, 2, 3])).toBe(6);
    expect(excerciseA([1, 2, 3, 4, 5])).toBe(9);
  });
});

describe('excerciseB', () => {
  it('returns [10, -65] for the example input array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    const expectedOutput = [10, -65];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });

  it('returns [0, 0] for null input', () => {
    const input: number[] | null = null;
    const expectedOutput: number[] = [];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });

  it('returns [0, 0] for undefined input', () => {
    const input: number[] | undefined = undefined;
    const expectedOutput: number[] = [];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });

  it('returns the correct count of positive numbers and sum of negative numbers for a random array', () => {
    const input = [1, -2, 3, -4, 5, -6];
    const expectedOutput = [3, -12];
    expect(excerciseB(input)).toEqual(expectedOutput);
  });
});

describe('excerciseC', () => {
  it('returns [20, 10] for input [10, 20]', () => {
    const input = [10, 20];
    const expectedOutput = [20, 10];
    expect(excerciseC(input)).toEqual(expectedOutput);
  });

  it('returns [24, 12, 8, 6] for input [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [24, 12, 8, 6];
    expect(excerciseC(input)).toEqual(expectedOutput);
  });

  it('returns [10, 2, 5] for input [1, 5, 2]', () => {
    const input = [1, 5, 2];
    const expectedOutput = [10, 2, 5];
    expect(excerciseC(input)).toEqual(expectedOutput);
  });

  it('returns [180, 600, 360, 300, 900] for input [10, 3, 5, 6, 2]', () => {
    const input = [10, 3, 5, 6, 2];
    const expectedOutput = [180, 600, 360, 300, 900];
    expect(excerciseC(input)).toEqual(expectedOutput);
  });
});
