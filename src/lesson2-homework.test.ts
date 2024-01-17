import { describe, expect, it } from '@jest/globals';
import { distanceArr, distanceOdj } from './lesson2-homework';

// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1

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
    expect(distanceArr).toBeDefined();
  });

  it('distance between (1,1) and (4,5) should be 5', () => {
    expect(distanceOdj({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
  });

  it('distance between (0,0) and (0,0) should be 0', () => {
    expect(distanceOdj({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
  });

  it('distance between (1,1) and (1,2) should be 1', () => {
    expect(distanceOdj({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});

// 4. run the tests with `npm run test`
