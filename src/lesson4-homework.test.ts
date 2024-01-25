// const randomFromArrayNumbers = require('../lib/lesson4-homework');
// const excercise13A = require('../lib/lesson4-homework');
import { excercise13ATest, excercise13BTest } from './lesson4-homework';

describe('Get random data from array:', () => {
  const {
    randomFromArrayNumbers,
    randomFromArrayStrings,
    randomObjectFromArray,
    randomDataFromArray,
  } = excercise13ATest;

  // NUMBERs
  const a1 = [2, 7, 4, 3, 6, 9, 1, 20, 8, 31];
  it('randomFromArrayNumbers', () => {
    expect(randomFromArrayNumbers).toBeDefined();
  });

  test('Should return data from input array a1:', () => {
    const randNumber = randomFromArrayNumbers(a1);
    expect(a1).toContain(randNumber);
  });

  test('Should return type number from input array: a1', () => {
    const randNumber = randomFromArrayNumbers(a1);
    expect(typeof randNumber).toBe('number');
  });

  test('Should correct handle empty input array a1:', () => {
    const randNumber = randomFromArrayNumbers([]);
    expect(randNumber).toBeUndefined();
  });

  // STRINGs

  const a2 = ['apple', 'milk', 'banana'];
  it('randomFromArrayStrings', () => {
    expect(randomFromArrayStrings).toBeDefined();
  });

  test('Should return data from input array a2:', () => {
    const randString = randomFromArrayStrings(a2);
    expect(a2).toContain(randString);
  });

  test('Should return type string from input array a2:', () => {
    const randString = randomFromArrayStrings(a2);
    expect(typeof randString).toBe('string');
  });

  test('Should correct handle empty input array a2:', () => {
    const randString = randomFromArrayStrings([]);
    expect(randString).toBeUndefined();
  });

  // OBJECTs

  const a3 = [{ name: 'Stan' }, { name: 'Helga' }, { name: 'Alex' }];
  it('randomObjectFromArray', () => {
    expect(randomObjectFromArray).toBeDefined();
  });

  test('Should return data from input array a3:', () => {
    const randObject = randomObjectFromArray(a3);
    expect(a3).toContain(randObject);
  });

  test('Should return type string from input array a3:', () => {
    const randObject = randomObjectFromArray(a3);
    expect(typeof randObject).toBe('object');
  });

  test('Should correct handle empty input array a3:', () => {
    const randObject = randomObjectFromArray([]);
    expect(randObject).toBeUndefined();
  });

  // ANY input type <T>

  it('randomDataFromArray any types', () => {
    expect(randomDataFromArray).toBeDefined();
  });
  const a41 = [2, 7, 4, 3, 6, 9, 1, 20, 8, 31];
  const a42 = ['apple', 'milk', 'banana'];
  const a43 = [{ name: 'Stan' }, { name: 'Helga' }, { name: 'Alex' }];

  test('Should return data from input array 41:', () => {
    const randObject = randomDataFromArray(a41);
    expect(a41).toContain(randObject);
  });

  test('Should return data from input array 42:', () => {
    const randObject = randomDataFromArray(a42);
    expect(a42).toContain(randObject);
  });

  test('Should return data from input array 43:', () => {
    const randObject = randomDataFromArray(a43);
    expect(a43).toContain(randObject);
  });

  test('Should correct handle empty input array any type:', () => {
    const randObject = randomDataFromArray([]);
    expect(randObject).toBeUndefined();
  });
});

describe('Split array data to subarrays:', () => {
  const genChanks = excercise13BTest;
  const inputData = [1, 2, 3, 4, 8, 5, 0, 8, 3, 6, 7, 0, 2, 0, 4, 8];

  it('randomFromArrayNumbers', () => {
    expect(genChanks).toBeDefined();
  });

  test('Should split to arrays with lenght 2:', () => {
    expect(genChanks(inputData, 2)).toStrictEqual([
      [1, 2],
      [3, 4],
      [8, 5],
      [0, 8],
      [3, 6],
      [7, 0],
      [2, 0],
      [4, 8],
    ]);
  });

  test('Should split to arrays with lenght 3:', () => {
    expect(genChanks(inputData, 3)).toStrictEqual([
      [1, 2, 3],
      [4, 8, 5],
      [0, 8, 3],
      [6, 7, 0],
      [2, 0, 4],
      [8],
    ]);
  });

  test('Should be clear array:', () => {
    expect(genChanks([], 10)).toStrictEqual([]);
  });
});
