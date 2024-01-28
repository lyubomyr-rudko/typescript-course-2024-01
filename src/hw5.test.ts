import { describe, expect, it } from '@jest/globals';
import { padLeft } from './hw5-test';

describe('padLeft function', () => {
  it('should pad the string with spaces if n is a number', () => {
    expect(padLeft('hello', 4)).toBe('    hello');
  });

  it('should pad the string with the given string if n is a string', () => {
    expect(padLeft('hello', 'abc')).toBe('abchello');
  });

  // it('should throw a compile time error if n is neither a number nor a string', () => {
  //   // @ts-expect-error: Testing error case with incorrect type
  //   expect(() => padLeft('hello', true)).toThrowErrorMatchingSnapshot();
  // });
});
