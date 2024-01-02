import twoSumInSortedArray from './twoSumInSortedArray';

describe('Arrays -> 167. Two Sum II - Input Array Is Sorted', () => {
  test('Should be pass with input: [2,7,11,15] | target = 9', () => {
    expect(twoSumInSortedArray([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('Should be pass with input: [2, 3, 4] | target = 6', () => {
    expect(twoSumInSortedArray([2, 3, 4], 6)).toEqual([1, 3]);
  });

  test('Should be pass with input: [-1, 0] | target = -1', () => {
    expect(twoSumInSortedArray([-1, 0], -1)).toEqual([1, 2]);
  });

  test('Should be pass with input: [-2, -1, 0] | target = 23', () => {
    expect(twoSumInSortedArray([-2, -1, 0], 23)).toEqual([-1, -1]);
  });
});
