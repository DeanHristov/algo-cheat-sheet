import {
  rotateArray,
  rotateArrayInPlace,
  rotateArrayInPlaceII,
} from './rotateArray';

describe('Arrays -> 189. Rotate Array', () => {
  describe('Rotating the array to the right', () => {
    test('Should pass with input = [] | K = 123', () => {
      const inputArray: number[] = [];
      const outputArray: number[] = [];

      expect(rotateArray(inputArray, 123)).toEqual(outputArray);
    });

    test('Should pass with input = [1,2,3,4,5,6,7] | K = 3', () => {
      const inputArray = [1, 2, 3, 4, 5, 6, 7];
      const outputArray = [5, 6, 7, 1, 2, 3, 4];

      expect(rotateArray(inputArray, 3)).toEqual(outputArray);
    });

    test('Should pass with input = [-1,-100,3,99] | K = 2', () => {
      const inputArray = [-1, -100, 3, 99];
      const outputArray = [3, 99, -1, -100];

      expect(rotateArray(inputArray, 2)).toEqual(outputArray);
    });

    test('Should pass with input = [3,99] | K = 22', () => {
      const inputArray = [3, 99];
      const outputArray = [3, 99];

      expect(rotateArray(inputArray, 22)).toEqual(outputArray);
    });
  });

  describe('Rotating the array to the right in-place', () => {
    test('Should pass with input = [] | K = 123', () => {
      const inputArray: number[] = [];
      const outputArray: number[] = [];

      rotateArrayInPlace(inputArray, 123);

      expect(inputArray).toEqual(outputArray);
    });

    test('Should pass with input = [1,2,3,4,5,6,7] | K = 3', () => {
      const inputArray = [1, 2, 3, 4, 5, 6, 7];
      const outputArray = [5, 6, 7, 1, 2, 3, 4];

      rotateArrayInPlace(inputArray, 3);

      expect(inputArray).toEqual(outputArray);
    });

    test('Should pass with input = [-1,-100,3,99] | K = 2', () => {
      const inputArray = [-1, -100, 3, 99];
      const outputArray = [3, 99, -1, -100];

      rotateArrayInPlace(inputArray, 2);

      expect(inputArray).toEqual(outputArray);
    });

    test('Should pass with input = [3,99] | K = 22', () => {
      const inputArray = [3, 99];
      const outputArray = [3, 99];

      rotateArrayInPlace(inputArray, 22);

      expect(inputArray).toEqual(outputArray);
    });
  });

  describe('Rotating the array to the right in-place II', () => {
    test('Should pass with input = [] | K = 123', () => {
      const inputArray: number[] = [];
      const outputArray: number[] = [];

      rotateArrayInPlaceII(inputArray, 123);

      expect(inputArray).toEqual(outputArray);
    });

    test('Should pass with input = [1,2,3,4,5,6,7] | K = 3', () => {
      const inputArray = [1, 2, 3, 4, 5, 6, 7];
      const outputArray = [5, 6, 7, 1, 2, 3, 4];

      rotateArrayInPlaceII(inputArray, 3);

      expect(inputArray).toEqual(outputArray);
    });

    test('Should pass with input = [-1,-100,3,99] | K = 2', () => {
      const inputArray = [-1, -100, 3, 99];
      const outputArray = [3, 99, -1, -100];

      rotateArrayInPlaceII(inputArray, 2);

      expect(inputArray).toEqual(outputArray);
    });

    test('Should pass with input = [3,99] | K = 22', () => {
      const inputArray = [3, 99];
      const outputArray = [3, 99];

      rotateArrayInPlaceII(inputArray, 22);

      expect(inputArray).toEqual(outputArray);
    });
  });
});
