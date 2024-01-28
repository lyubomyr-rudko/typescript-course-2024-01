// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  exercise20Test,
  exercise21Test,
  TMove,
  exerciseATest,
  excerciseB,
} from './lesson5-homework';

describe('exercise20Test', () => {
  const padLeft = exercise20Test;

  it('padLeft is load', () => {
    expect(padLeft).toBeDefined();
  });

  it('padLeft pads string with spaces when second param is a number', () => {
    expect(padLeft('123', 4)).toBe('    123');
  });

  it('padLeft appends string when second param is a string', () => {
    expect(padLeft('Prefix', 'use_')).toBe('use_Prefix');
  });

  it('throws a TypeScript error when second param is a boolean', () => {
    // @ts-expect-error: This is a temporary workaround for a specific issue that needs further investigation.
    expect(() => padLeft('error', true)).toThrow();
  });
});

//
describe('exercise21Test', () => {
  const { rockPaperSizorsVins } = exercise21Test;

  it('rockPaperSizorsVins is load', () => {
    expect(rockPaperSizorsVins).toBeDefined();
  });

  it('rockPaperSizorsVins if win', () => {
    expect(rockPaperSizorsVins('paper', 'rock')).toBe(true);
  });

  it('rockPaperSizorsVins if lose', () => {
    expect(rockPaperSizorsVins('paper', 'scissors')).toBe(false);
  });

  it('rockPaperSizorsVins if incorrect string type', () => {
    expect(() =>
      rockPaperSizorsVins('papers' as TMove, 'scissor' as TMove),
    ).toThrow();
  });

  it('rockPaperSizorsVins if incorrect any type', () => {
    // @ts-expect-error: for test not currect input data
    expect(() => rockPaperSizorsVins(1 as TMove, true as TMove)).toThrow(
      'Invalid input: Arguments must be of type TMove',
    );
  });
});

//
describe('exerciseATest', () => {
  const printMessagesWithTimeout = exerciseATest;

  it('printMessagesWithTimeout is load', () => {
    expect(printMessagesWithTimeout).toBeDefined();
  });

  test('should print 3 console.log messages', async () => {
    const logSpy = jest.spyOn(console, 'log'); // .mockImplementation(() => {})
    await printMessagesWithTimeout();
    expect(logSpy).toHaveBeenCalledTimes(3);
    logSpy.mockRestore();
  });

  test('should print correct data in console.log', async () => {
    const logSpy = jest.spyOn(console, 'log'); // .mockImplementation(() => {})
    await printMessagesWithTimeout();
    // Assert the data printed in console.log
    expect(logSpy.mock.calls[0][0]).toBe('1');
    expect(logSpy.mock.calls[1][0]).toBe('2');
    expect(logSpy.mock.calls[2][0]).toBe('3');

    logSpy.mockRestore();
  });

  test('should use mock setTimeout', async () => {
    const setTimeoutMock = jest
      .fn()
      .mockReturnValueOnce('11')
      .mockReturnValueOnce('12')
      .mockReturnValueOnce('13');

    expect(setTimeoutMock()).toBe('11');
    expect(setTimeoutMock()).toBe('12');
    expect(setTimeoutMock()).toBe('13');
  }, 5000);
});

//
describe('excerciseBTest', () => {
  it('excerciseB is load', () => {
    expect(excerciseB).toBeDefined();
  });

  it('excerciseB lenth for n=10', () => {
    expect(excerciseB(10)).toHaveLength(10);
  });

  it('excerciseB for n=30', () => {
    expect(excerciseB(30)).toEqual([
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
      'Fizz',
      22,
      23,
      'Fizz',
      'Buzz',
      26,
      'Fizz',
      28,
      29,
      'FizzBuzz',
    ]);
  });
});
