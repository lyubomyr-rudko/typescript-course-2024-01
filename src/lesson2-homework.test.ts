import { describe, expect, test } from '@jest/globals';
import { distanceTest, distance2Test } from './lesson2-homework';

// +TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`
// lesson2-homework.test.ts

describe('excercise4', () => {
  test('distance between (1,1) and (4,5) should be 5', () => {
    const result = distanceTest([1, 1], [4, 5]);
    expect(result).toBe(5);
  });

  test('distance between (0,0) and (0,0) should be 0', () => {
    const result = distanceTest([0, 0], [0, 0]);
    expect(result).toBe(0);
  });

  test('distance between (1,1) and (1,2) should be 1', () => {
    const result = distanceTest([1, 1], [1, 2]);
    expect(result).toBe(1);
  });
});

describe('excercise5', () => {
  test('distance between (1,1) and (4,5) should be 5', () => {
    const result = distance2Test({ x: 1, y: 1 }, { x: 4, y: 5 });
    expect(result).toBe(5);
  });

  test('distance between (0,0) and (0,0) should be 0', () => {
    const result = distance2Test({ x: 0, y: 0 }, { x: 0, y: 0 });
    expect(result).toBe(0);
  });

  test('distance between (1,1) and (1,2) should be 1', () => {
    const result = distance2Test({ x: 1, y: 1 }, { x: 1, y: 2 });
    expect(result).toBe(1);
  });
});
