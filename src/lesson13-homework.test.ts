import { exercise55Test } from './lesson13-homework';

describe('sum', () => {
  const getColor = exercise55Test();

  it('should be defined', () => {
    expect(getColor).toBeDefined();
  });

  it('Test input color 0', () => {
    expect(getColor(0)).toBe('None');
  });

  it('Test input color 1', () => {
    expect(getColor(1)).toBe('Red');
  });

  it('Test input color 2', () => {
    expect(getColor(2)).toBe('Green');
  });

  it('Test input color 3', () => {
    expect(getColor(3)).toBe('Red, Green');
  });

  it('Test input color 4', () => {
    expect(getColor(4)).toBe('Blue');
  });

  it('Test input color 5', () => {
    expect(getColor(5)).toBe('Red, Blue');
  });

  it('Test input color 6', () => {
    expect(getColor(6)).toBe('Green, Blue');
  });

  it('Test input color 7', () => {
    expect(getColor(7)).toBe('Red, Green, Blue');
  });
});
