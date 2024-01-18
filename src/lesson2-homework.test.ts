import { describe, expect, test } from '@jest/globals';
import { distance1, distance2 } from './lesson2-homework';

describe('distance1', () => {
  test('distance between (1,1) and (4,5) should be 5', () => {
    expect(distance1([1, 1], [4, 5])).toBe(5);
  });

  test('distance between (0,0) and (0,0) should be 0', () => {
    expect(distance1([0, 0], [0, 0])).toBe(0);
  });

  test('distance between (1,1) and (1,2) should be 1', () => {
    expect(distance1([1, 1], [1, 2])).toBe(1);
  });
});

describe('distance2', () => {
  test('distance between (1,1) and (4,5) should be 5', () => {
    expect(distance2({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
  });

  test('distance between (0,0) and (0,0) should be 0', () => {
    expect(distance2({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
  });

  test('distance between (1,1) and (1,2) should be 1', () => {
    expect(distance2({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});
