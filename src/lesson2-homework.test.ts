import { describe, expect, it } from '@jest/globals';
import { distance4, distance5 } from './lesson2-homework';

describe('distance4', () => {
  it('should be defined', () => {
    expect(distance4).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distance4([1, 1], [4, 5])).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distance4([0, 0], [0, 0])).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distance4([1, 1], [1, 2])).toBe(1);
  });
});

describe('distance5', () => {
  it('should be defined', () => {
    expect(distance5).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distance5({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distance5({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distance5({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});
