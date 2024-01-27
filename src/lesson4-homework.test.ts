import { describe, expect, it } from '@jest/globals';
import { excercise13A, excercise13B } from './lesson4-homework';

describe('excercise13A', () => {
  it('should be defined', () => {
    expect(excercise13A).toBeDefined();
  });
  //   it(`return some string from array ['apple', 'potato', 'orange', 'banana']`, () => {
  //     expect(excercise13A(['apple', 'potato', 'orange', 'banana'])).toContain();
  //   });
});

describe('excercise13B', () => {
  it('should be defined', () => {
    expect(excercise13B).toBeDefined();
  });
  it(`return array of arrays of 3 strings`, () => {
    expect(
      excercise13B(
        [
          'apple',
          'potato',
          'orange',
          'banana',
          'courgette',
          'milk',
          'mince',
          'aubergine',
          'juice',
        ],
        3,
      ),
    ).toEqual([
      ['apple', 'potato', 'orange'],
      ['banana', 'courgette', 'milk'],
      ['mince', 'aubergine', 'juice'],
    ]);
  });
  it(`return array of arrays of 4 numbers`, () => {
    expect(
      excercise13B([1, 12, 34, 654, -45, 234, 0, 23, -4, 12, 7, 65], 4),
    ).toEqual([
      [1, 12, 34, 654],
      [-45, 234, 0, 23],
      [-4, 12, 7, 65],
    ]);
  });
  it(`return array of arrays of 2 objects`, () => {
    expect(
      excercise13B(
        [
          { name: 'John', age: 43 },
          { name: 'Smit', age: 18 },
          { name: 'Valery', age: 26 },
          { name: 'Boris', age: 56 },
        ],
        2,
      ),
    ).toEqual([
      [
        { name: 'John', age: 43 },
        { name: 'Smit', age: 18 },
      ],
      [
        { name: 'Valery', age: 26 },
        { name: 'Boris', age: 56 },
      ],
    ]);
  });
});
