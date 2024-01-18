import { describe, expect, it } from '@jest/globals';
import { dist1, dist2 } from './homework2-test';

describe('dist1', () => {
  it('calculates distance correctly', () => {
    const result1 = dist1([1, 1], [4, 5]);
    const result2 = dist1([0, 0], [0, 0]);
    const result3 = dist1([1, 1], [1, 2]);

    expect(result1).toBe(5);
    expect(result2).toBe(0);
    expect(result3).toBe(1);
  });
});

describe('dist2', () => {
  it('calculates distance correctly for objects', () => {
    const result1 = dist2({ x: 1, y: 1 }, { x: 4, y: 5 });
    const result2 = dist2({ x: 0, y: 0 }, { x: 0, y: 0 });
    const result3 = dist2({ x: 1, y: 1 }, { x: 1, y: 2 });

    expect(result1).toBe(5);
    expect(result2).toBe(0);
    expect(result3).toBe(1);
  });
});
