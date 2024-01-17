import { describe, expect, it } from '@jest/globals';
import { distanceArr, distanceObj } from './lesson2-homework';

describe('distanceArr', () => {
  it('should be defined', () => {
    expect(distanceArr).toBeDefined();
  });
  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distanceArr([1, 1], [4, 5])).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distanceArr([0, 0], [0, 0])).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distanceArr([1, 1], [1, 2])).toBe(1);
  });
});

describe('distanceOdj', () => {
  it('should be defined', () => {
    expect(distanceObj).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distanceObj({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distanceObj({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distanceObj({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});
