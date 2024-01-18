import { describe, expect, it } from '@jest/globals';
import { sum, max } from './index';

describe('sum', () => {
  it('should be defined', () => {
    expect(sum).toBeDefined();
  });

  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('max', () => {
  it('should be defined', () => {
    expect(max).toBeDefined();
  });

  it('returns 3 for 1, 2, 3', () => {
    expect(max(1, 2, 3)).toBe(3);
  });

  it('returns 0 for 0, 0, 0, 0', () => {
    expect(max(0, 0, 0, 0)).toBe(0);
  });
});
