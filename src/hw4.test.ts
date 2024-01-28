import { describe, expect, it } from "@jest/globals";
import { getRandomV, chunkArray } from "./lesson4-homework";

describe('getRandomV', () => {
    it('should be defined', () => {
      expect(getRandomV).toBeDefined();
    });
  });

  describe('getRandomV', () => {
    beforeAll(() => {
      const mock = jest
        .fn()
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(0.2)
        .mockReturnValueOnce(0.1);

      Math.random = mock;
    });
  
    afterAll(() => {
      jest.resetAllMocks();
    });
  
    it('should return random number', () => {
      expect(getRandomV).toBe(5);
      expect(getRandomV).toBe(2);
      expect(getRandomV).toBe(1);
    });
  });


  describe('chunkArray function', () => {
    it('should chunk the array correctly', () => {
      const array = [1, 2, 3, 4, 5];
      const chunkedArray = chunkArray(array, 2);
      expect(chunkedArray).toEqual([[1, 2], [3, 4], [5]]);
    });
  
    it('should handle empty array', () => {
      const array: number[] = [];
      const chunkedArray = chunkArray(array, 2);
      expect(chunkedArray).toEqual([]);
    });
});

let mockLogger: jest.Mock;
beforeAll(() => {
  mockLogger = jest.fn();
  jest.mock('./logger', () => ({ log: mockLogger })); 
});

describe('chunkArray function', () => {
  it('should chunk the array correctly', () => {
  });

  it('should handle empty array', () => {
  });
});

afterAll(() => {
  expect(mockLogger).toHaveBeenCalled();
});
