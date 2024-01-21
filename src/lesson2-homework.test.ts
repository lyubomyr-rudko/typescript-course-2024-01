import {
  distance1,
  excercise4t,
  distance2,
  excercise5t,
} from './lesson2-homework';

// Test for ex4
test('Distance between (1,1) and (4,5) should be 5', () => {
  const result = distance1([1, 1], [4, 5]);
  expect(result).toBe(5);
});

test('Distance between (0,0) and (0,0) should be 0', () => {
  const result = distance1([0, 0], [0, 0]);
  expect(result).toBe(0);
});

test('Distance between (1,1) and (1,2) should be 1', () => {
  const result = distance1([1, 1], [1, 2]);
  expect(result).toBe(1);
});

test('Reverse string "got" should be "tog"', () => {
  const result = excercise4t('got');
  expect(result).toBe('tog');
});

// Test for ex5
test('Distance between (1,1) and (4,5) should be 5 ex5', () => {
  const result = distance2({ x: 1, y: 1 }, { x: 4, y: 5 });
  expect(result).toBe(5);
});

test('Distance between (0,0) and (0,0) should be 0 ex5', () => {
  const result = distance2({ x: 0, y: 0 }, { x: 0, y: 0 });
  expect(result).toBe(0);
});

test('Distance between (1,1) and (1,2) should be 1 ex5', () => {
  const result = distance2({ x: 1, y: 1 }, { x: 1, y: 2 });
  expect(result).toBe(1);
});

test('Reverse string "got" should be "tog" ex5', () => {
  const result = excercise5t('got');
  expect(result).toBe('tog');
});
