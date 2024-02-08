import { removeDuplicates, getIntersection } from './lesson8-homework';

describe('removeDuplicates tests:', () => {
  it('removeDuplicates is load', () => {
    expect(removeDuplicates).toBeDefined();
  });
  it('removeDuplicates test [1,2,3,4,5,4,3,2,1,1,1,2,2]', () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1, 1, 1, 2, 2];
    expect(removeDuplicates(input)).toEqual([1, 2, 3, 4, 5]);
  });
  it("removeDuplicates for ['', '_', '/']", () => {
    const input = ['', '_', '/'];
    expect(removeDuplicates(input)).toEqual(['', '_', '/']);
  });
  it('removeDuplicates for []', () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});
//
describe('getIntersection tests:', () => {
  it('getIntersection is load', () => {
    expect(getIntersection).toBeDefined();
  });
  it('getIntersection test [1,2,3,4,5,5,7] & [7,3,1,4]:', () => {
    const input1 = [1, 2, 3, 4, 5, 5, 7];
    const input2 = [7, 3, 1, 4];
    const res = [1, 3, 4, 7];
    expect(getIntersection(input1, input2)).toEqual(res);
  });
  it("getIntersection test charcetr ['b', 'c', 'a'] & ['c', 'B', 'b']:", () => {
    const input1 = ['b', 'c', 'a'];
    const input2 = ['c', 'B', 'b'];
    const res = ['b', 'c'];
    expect(getIntersection(input1, input2)).toEqual(res);
  });
  it('getIntersection for [] []', () => {
    expect(getIntersection([], [])).toEqual([]);
  });
});
