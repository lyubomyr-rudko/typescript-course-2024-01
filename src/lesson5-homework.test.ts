import {
  padLeft,
  rockPaperSizorsVins,
  exerciseA,
  exerciseB,
} from './lesson5-homework';

describe('padLeft', () => {
  it('should be defined', () => {
    expect(padLeft).toBeDefined();
  });

  it('if n is a number, pad the string with spaces', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
  });

  it('if n is a string, pad the string with the given string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });
});

describe('rockPaperSizorsVins', () => {
  it('should be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });

  it('if me is rock and other is paper', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
  });
  it('if me is paper and other is scissors', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });
  it('if me is scissors and other is rock', () => {
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });
  it('if me is rock and other is scissors', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });
});

describe('exersizeA', () => {
  it('should be defined', () => {
    expect(exerciseA).toBeDefined();
  });
  it('should resolve after specified delay', async () => {
    const delay = 1000;
    const startTime = Date.now();
    await exerciseA(delay);
    const endTime = Date.now();
    const elapsed = endTime - startTime;
    expect(elapsed).toBeGreaterThanOrEqual(delay);
  });
});

describe('excerciseB', () => {
  it('should be defined', () => {
    expect(exerciseB).toBeDefined();
  });

  it('should return the correct FizzBuzz array when n is 5', () => {
    const expected = [1, 2, 'Fizz', 4, 'Buzz'];
    expect(exerciseB(5)).toEqual(expect.arrayContaining(expected));
  });

  it('should return the correct FizzBuzz array when n is 15', () => {
    expect(exerciseB(15)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ]);
  });
});
