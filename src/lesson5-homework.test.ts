import {
  padLeft,
  rockPaperSizorsVins,
  printMessageWithAsync,
  excerciseB,
} from './lesson5-homework';

describe('padLeft', () => {
  it('should to be defined', () => {
    expect(padLeft).toBeDefined();
  });
  it(`gain 'hello', 'pre ' and return 'pre hello'`, () => {
    expect(padLeft('hello', 'pre ')).toBe('pre hello');
  });
  it(`gain 'Spain', 5 and return '{{5 spaces}} Spain'`, () => {
    expect(padLeft('Spain', 5)).toBe('     Spain');
  });
  it(`gain 'German', '5' and return '5German'`, () => {
    expect(padLeft('German', '5')).toBe('5German');
  });
  it(`gain 'Ukraine', 10 and return '          Ukraine'`, () => {
    expect(padLeft('Ukraine', 10)).toBe('          Ukraine');
  });
});

describe('rockPaperSizorsVins', () => {
  it('should to be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });
  it(`gain 'scissors', 'rock' return false`, () => {
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });
  it(`gain 'paper', 'rock' return true`, () => {
    expect(rockPaperSizorsVins('paper', 'rock')).toBe(true);
  });
  it(`gain 'rock', 'paper' return false`, () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
  });
  it(`gain 'scissors', 'scissors' return 'standoff'`, () => {
    expect(rockPaperSizorsVins('scissors', 'scissors')).toBe('standoff');
  });
});

describe('excerciseB', () => {
  it('should to be defined', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });

  it(`gain 3 and return [1, 2, 'Fizz']`, () => {
    expect(excerciseB(3)).toEqual([1, 2, 'Fizz']);
  });
  it(`gain 10 and return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']`, () => {
    expect(excerciseB(10)).toEqual([
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
    ]);
  });
  it(`gain 15 and return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']`, () => {
    expect(excerciseB(15)).toEqual([
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
  it(`gain 20 and return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'FizzBuzz']`, () => {
    expect(excerciseB(20)).toEqual([
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
      16,
      17,
      'Fizz',
      19,
      'Buzz',
    ]);
  });
});

describe('printMessageWithAsync', () => {
  it('should be defined', () => {
    expect(printMessageWithAsync).toBeDefined();
  });
});
