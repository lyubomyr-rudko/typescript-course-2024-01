import { describe, expect, it } from '@jest/globals';
import { sum, max, getRandomNumber } from './index';
import { distance } from './lesson2-homework';

describe('sum', () => {
  it('should be defined', () => {
    expect(sum).toBeDefined();
  });

  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('max', () => {
  it('should be defined', () => {
    expect(max).toBeDefined();
  });

  it('returns 3 for 1, 2, 3', () => {
    expect(max(1, 2, 3)).toBe(3);
  });

  it('returns 0 for 0, 0, 0, 0', () => {
    expect(max(0, 0, 0, 0)).toBe(0);
  });
});

describe('distance', () => {
  it('should be defined', () => {
    expect(distance).toBeDefined();
  });
});

describe('getRandomNumber', () => {
  beforeAll(() => {
    const mock = jest
      .fn()
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.8);

    // for (let i = 0; i < 10; i++) {
    //   mock.mockReturnValueOnce(0.5);
    //   mock.mockReturnValueOnce(0.2);
    //   mock.mockReturnValueOnce(0.8);
    // }

    Math.random = mock;
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should return random number', () => {
    expect(getRandomNumber()).toBe(5);
    expect(getRandomNumber()).toBe(2);
    expect(getRandomNumber()).toBe(8);
  });
});
