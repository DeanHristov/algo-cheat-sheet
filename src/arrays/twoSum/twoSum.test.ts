import { twoSumBruteForce, twoSumOptimal } from './twoSum';

describe('Arrays -> 1. Two Sum', () => {
  describe('twoSumBruteForce()', () => {
    test('Should pass with input = [2,7,11,15] | target = 9', () => {
      const inputArray: number[] = [2, 7, 11, 15];
      const result: number[] = [0, 1];

      expect(twoSumBruteForce(inputArray, 9)).toEqual(result);
    });

    test('Should pass with input = [3,2,4] | target = 6', () => {
      const inputArray: number[] = [3, 2, 4];
      const result: number[] = [1, 2];

      expect(twoSumBruteForce(inputArray, 6)).toEqual(result);
    });

    test('Should pass with input = [3, 3] | target = 6', () => {
      const inputArray: number[] = [3, 3];
      const result: number[] = [0, 1];

      expect(twoSumBruteForce(inputArray, 6)).toEqual(result);
    });

    test("Shouldn't pass the with input = [2,7,11,15] | target = 36", () => {
      const inputArray: number[] = [2, 7, 11, 15];
      const result: number[] = [-1, -1];

      expect(twoSumBruteForce(inputArray, 36)).toEqual(result);
    });
  });

  describe('Running twoSumOptimal()', () => {
    test('Should pass with input = [2,7,11,15] | target = 9', () => {
      const inputArray: number[] = [2, 7, 11, 15];
      const result: number[] = [0, 1];

      expect(twoSumOptimal(inputArray, 9)).toEqual(result);
    });

    test('Should pass with input = [3,2,4] | target = 6', () => {
      const inputArray: number[] = [3, 2, 4];
      const result: number[] = [1, 2];

      expect(twoSumOptimal(inputArray, 6)).toEqual(result);
    });

    test('Should pass with input = [3, 3] | target = 6', () => {
      const inputArray: number[] = [3, 3];
      const result: number[] = [0, 1];

      expect(twoSumOptimal(inputArray, 6)).toEqual(result);
    });

    test("Shouldn't pass the with input = [2,7,11,15] | target = 36", () => {
      const inputArray: number[] = [2, 7, 11, 15];
      const result: number[] = [-1, -1];

      expect(twoSumOptimal(inputArray, 36)).toEqual(result);
    });
  });
});
