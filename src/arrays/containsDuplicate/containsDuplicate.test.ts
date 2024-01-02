import {
  containsDuplicate,
  containsDuplicateBruteForce,
  containsDuplicateOptimal,
  containsDuplicateWithSort,
} from './containsDuplicate';

describe('Arrays -> 217. Contains Duplicate', () => {
  describe('Contains duplicates - Brute-force approach', () => {
    test('Should pass with input = [1, 2, 3, 1]', () => {
      const inputArray: number[] = [1, 2, 3, 1];

      expect(containsDuplicateBruteForce(inputArray)).toBeTruthy();
    });

    test('Should pass with input = [1, 2, 3, 4]', () => {
      const inputArray: number[] = [1, 2, 3, 4];

      expect(containsDuplicateBruteForce(inputArray)).toBeFalsy();
    });

    test('Should pass with input = [1,1,1,3,3,4,3,2,4,2]', () => {
      const inputArray: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

      expect(containsDuplicateBruteForce(inputArray)).toBeTruthy();
    });

    test('Should pass with input = []', () => {
      const inputArray: number[] = [];

      expect(containsDuplicateBruteForce(inputArray)).toBeFalsy();
    });
  });

  describe('Contains duplicates - Using  auxiliary DS ', () => {
    test('Should pass with input = [1, 2, 3, 1]', () => {
      const inputArray: number[] = [1, 2, 3, 1];

      expect(containsDuplicate(inputArray)).toBeTruthy();
    });

    test('Should pass with input = [1, 2, 3, 4]', () => {
      const inputArray: number[] = [1, 2, 3, 4];

      expect(containsDuplicate(inputArray)).toBeFalsy();
    });

    test('Should pass with input = [1,1,1,3,3,4,3,2,4,2]', () => {
      const inputArray: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

      expect(containsDuplicate(inputArray)).toBeTruthy();
    });

    test('Should pass with input = []', () => {
      const inputArray: number[] = [];

      expect(containsDuplicate(inputArray)).toBeFalsy();
    });
  });

  describe('Contains duplicates - using non-negative values ', () => {
    test('Should pass with input = [2, 1, 5, 2, 3, 3, 4]', () => {
      const inputArray: number[] = [2, 1, 5, 2, 3, 3, 4];

      expect(containsDuplicateOptimal(inputArray)).toBeTruthy();
    });

    test('Should pass with input = []', () => {
      const inputArray: number[] = [];

      expect(containsDuplicateOptimal(inputArray)).toBeFalsy();
    });

    test('Should pass with input = [1]', () => {
      const inputArray: number[] = [1];

      expect(containsDuplicateOptimal(inputArray)).toBeFalsy();
    });

    test('Should pass with input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]', () => {
      const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];

      expect(containsDuplicateOptimal(inputArray)).toBeTruthy();
    });
  });

  describe('Contains duplicates - with sorting of the array first ', () => {
    test('Should pass with input = [2, 1, 5, 2, 3, 3, 4]', () => {
      const inputArray: number[] = [2, 1, 5, 2, 3, 3, 4];

      expect(containsDuplicateWithSort(inputArray)).toBeTruthy();
    });

    test('Should pass with input = []', () => {
      const inputArray: number[] = [];

      expect(containsDuplicateWithSort(inputArray)).toBeFalsy();
    });

    test('Should pass with input = [1]', () => {
      const inputArray: number[] = [1];

      expect(containsDuplicateWithSort(inputArray)).toBeFalsy();
    });

    test('Should pass with input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]', () => {
      const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];

      expect(containsDuplicateWithSort(inputArray)).toBeTruthy();
    });

    test('Should pass with input = [1, 2, 3, 4]', () => {
      const inputArray: number[] = [1, 2, 3, 4];

      expect(containsDuplicateWithSort(inputArray)).toBeFalsy();
    });
  });
});
