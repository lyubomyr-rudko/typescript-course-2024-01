import { describe, expect, it } from '@jest/globals';
import { excercise13A, excercise13B} from './lesson4-homework';


describe('getRandomNumber', () => {
    it('should return a random number from the array', () => {
      const { getRandomNumber } = excercise13A();
      const numbers = [1, 2, 3, 4, 5];
      const result = getRandomNumber(numbers);
      console.log('Random Number:', result);
      expect(numbers).toContain(result);
    });
});

describe('getRandomString', () => {
    it('should return a random string from the array', () => {
      const { getRandomString } = excercise13A();
      const strings = ['apple', 'banana', 'orange', 'grape'];
      const result = getRandomString(strings);
      expect(strings).toContain(result);
    });
});

describe('getRandomObject', () => {
    it('should return a random object from the array', () => {
      const { getRandomObject } = excercise13A();
      const objects = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }];
      const result = getRandomObject(objects);
      expect(objects).toContain(result);
    });
});

describe('getRandomItem', () => {
    it('should return a random item from the array', () => {
      const { getRandomItem } = excercise13A();
      const items = [1, 'hello', { key: 'value' }];
      const result = getRandomItem(items);
      expect(items).toContain(result);
    });
});

describe('chunkArray', () => {
  it('should correctly chunk the array into subarrays of specified size', () => {
    // Test Case 1
    const { chunkArray } = excercise13B();
    const result1 = chunkArray([1, 2, 3, 4, 5], 2);
    expect(result1).toEqual([[1, 2], [3, 4], [5]]);

    // Test Case 2
    const result2 = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    expect(result2).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  it('should handle an empty array correctly', () => {
    const { chunkArray } = excercise13B();
    const result = chunkArray([], 3);
    expect(result).toEqual([]);
  });

  it('should handle chunk size larger than array length correctly', () => {
    const { chunkArray } = excercise13B();
    const result = chunkArray([1, 2, 3, 4, 5], 10);
    expect(result).toEqual([[1, 2, 3, 4, 5]]);
  });

});