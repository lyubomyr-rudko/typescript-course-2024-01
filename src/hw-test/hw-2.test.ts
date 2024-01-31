import { describe, expect, it } from '@jest/globals';
import { distance, distanceObject } from '../lesson2-homework';

describe('distanceTurple', () => {
  it('should be defined', () => {
    expect(distance).toBeDefined();
  });

  it('should calculate the distance correctly', () => {
    const point1: [number, number] = [1, 1];
    const point2: [number, number] = [4, 5];
    const result = distance(point1, point2);
    expect(result).toBe(5);
  });
});

describe('distanceObject', () => {
  it('should be defined', () => {
    expect(distanceObject).toBeDefined();
  });

  it('should calculate the distance correctly', () => {
    const point1 = { x: 1, y: 1 };
    const point2 = { x: 4, y: 5 };
    const result = distanceObject(point1, point2);
    expect(result).toBe(5);
  });
});
