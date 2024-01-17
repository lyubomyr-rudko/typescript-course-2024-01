import { describe, expect, it } from '@jest/globals';
import { distanceTest, distanceTest2 } from './lesson2-homework';

describe('distanceTest', () => {
  it('should be defined', () => {
    expect(distanceTest).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distanceTest([1, 1], [4, 5])).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distanceTest([0, 0], [0, 0])).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distanceTest([1, 1], [1, 2])).toBe(1);
  });
});

describe('distanceTest2', () => {
  it('should be defined', () => {
    expect(distanceTest2).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distanceTest2({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distanceTest2({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distanceTest2({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});
