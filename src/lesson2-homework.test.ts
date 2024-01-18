// npm test -- --testPathPattern=lesson2-homework.test.ts
import { describe, expect, it } from '@jest/globals';
import {
  dist1,
  dist2,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
} from './homework2-test';

describe('dist1', () => {
  it('calculates distance correctly', () => {
    expect(dist1([1, 1], [4, 5])).toBe(5);
    expect(dist1([0, 0], [0, 0])).toBe(0);
    expect(dist1([1, 1], [1, 2])).toBe(1);
  });
});

describe('dist2', () => {
  it('calculates distance correctly for objects', () => {
    expect(dist2({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
    expect(dist2({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
    expect(dist2({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
  });
});

describe('exerciseA', () => {
  it('reverses a string correctly', () => {
    expect(exerciseA('hello')).toBe('olleh');
  });
});

describe('exerciseB', () => {
  it('calculates the sum of numbers correctly', () => {
    expect(exerciseB([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe('exerciseC', () => {
  it('calculates the average of numbers correctly', () => {
    expect(exerciseC([1, 2, 3, 4, 5])).toBe(3);
  });

  it('returns 0 for an empty array', () => {
    expect(exerciseC([])).toBe(0);
  });
});

describe('exerciseD', () => {
  it('returns the longest string correctly', () => {
    expect(exerciseD(['apple', 'banana', 'kiwi', 'strawberry'])).toBe(
      'strawberry',
    );
  });

  it('returns an empty string for an empty array', () => {
    expect(exerciseD([])).toBe('');
  });
});
