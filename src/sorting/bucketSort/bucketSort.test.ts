import { bucketSort, bucketSortII } from './bucketSort';

describe('Sorting - Bucket sort', () => {
  test('Should pass with input: [8, 5, 2, 9, 5, 6, 3]', () => {
    const inputArray: number[] = [8, 5, 2, 9, 5, 6, 3];
    const inputArray1: number[] = [8, 5, 2, 9, 5, 6, 3];

    bucketSort(inputArray, 5);
    bucketSortII(inputArray1);

    expect(inputArray).toEqual([2, 3, 5, 5, 6, 8, 9]);
    expect(inputArray1).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });

  test('Should pass with input: [3, 2, 1]', () => {
    const inputArray: number[] = [3, 2, 1];
    const inputArray1: number[] = [3, 2, 1];

    bucketSort(inputArray, 1);
    bucketSortII(inputArray1);

    expect(inputArray).toEqual([1, 2, 3]);
    expect(inputArray1).toEqual([1, 2, 3]);
  });
});
