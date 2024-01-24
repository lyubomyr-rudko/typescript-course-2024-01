// const randomFromArrayNumbers = require('../lib/lesson4-homework');
// const excercise13A = require('../lib/lesson4-homework');
import { moduleTest1 } from './lesson4-homework';

describe('Get random data from array:', () => {
  const {
    randomFromArrayNumbers,
    randomFromArrayStrings,
    randomObjectFromArray,
    randomDataFromArray,
  } = moduleTest1;

  it('randomFromArrayNumbers', () => {
    expect(randomFromArrayNumbers).toBeDefined();
  });
  const a1 = [2, 7, 4, 3, 6, 9, 1, 20, 8, 31];

  test('Should return data from input array:', () => {
    const randNumber = randomFromArrayNumbers(a1);
    expect(a1).toContain(randNumber);
  });

  test('Should return type number from input array:', () => {
    const randNumber = randomFromArrayNumbers(a1);
    expect(typeof randNumber).toBe('number');
  });

  test('Should correct handle empty input array:', () => {
    const randNumber = randomFromArrayNumbers([]);
    expect(randNumber).toBeUndefined();
  });
});
