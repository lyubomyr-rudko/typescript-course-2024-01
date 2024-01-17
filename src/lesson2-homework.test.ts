import { describe, expect, it } from '@jest/globals';
import { distArr, distOdj } from './lesson2-homework';

// 3. create a test for each function for this cases
// - distance between (1,1) and (4,5) should be 5
// - distance between (0,0) and (0,0) should be 0
// - distance between (1,1) and (1,2) should be 1

describe('distanceArr', () => {
  it('should be defined', () => {
    expect(distArr).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distArr([1, 1], [4, 5])).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distArr([0, 0], [0, 0])).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distArr([1, 1], [1, 2])).toBe(1);
  });
});

describe('distanceOdj', () => {
  it('should be defined', () => {
    expect(distArr).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distOdj({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distOdj({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distOdj({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});

// 4. run the tests with `npm run test`
