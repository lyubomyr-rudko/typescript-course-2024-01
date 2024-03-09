import {
  exerciseA,
  excerciseB,
  rockPaperSizorsVins,
} from '../lesson5-homework';

describe('exerciseA', () => {
  it('should be defined', () => {
    expect(exerciseA).toBeDefined();
  });
  it('should print in console 3 times from 1 to 3', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const consoleLogMock = jest.spyOn(console, 'log');

    exerciseA();

    jest.runAllTimers();
    setTimeout(() => {
      expect(consoleLogMock).toHaveBeenCalledWith('1');
      expect(consoleLogMock).toHaveBeenCalledWith('2');
      expect(consoleLogMock).toHaveBeenCalledWith('3');
      consoleLogMock.mockRestore();
    }, 0);
  });
});
describe('excerciseB', () => {
  test('it should be correct FizzBuzz array if n = 5', () => {
    expect(excerciseB(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  test('should return the correct FizzBuzz array for n = 15', () => {
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

  test('should return an empty array when n is 0', () => {
    expect(excerciseB(0)).toEqual([]);
  });

  test('should return an empty array when n is negative', () => {
    expect(excerciseB(-5)).toEqual([]);
  });
});

describe('rockPaperSizorsVins', () => {
  it('should return false if me is rock and other is paper', () => {
    expect(rockPaperSizorsVins('rock', 'paper')).toBe(false);
  });

  it('should return false if me is paper and other is scissors', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });

  it('should return false if me is scissors and other is rock', () => {
    expect(rockPaperSizorsVins('scissors', 'rock')).toBe(false);
  });

  it('should return true if me is rock and other is scissors', () => {
    expect(rockPaperSizorsVins('rock', 'scissors')).toBe(true);
  });
});
