import {
  sortArrayByParity,
  sortArrayByParityII,
  sortArrayByParityIII,
} from './sortArrayByParity';

describe('Arrays -> 905. Sort Array By Parity', () => {
  test('Should pass with input = [3,1,2,4]', () => {
    const inputArray: number[] = [3, 1, 2, 4];
    const inputArray2: number[] = [3, 1, 2, 4];

    expect(sortArrayByParity(inputArray)).toEqual([2, 4, 3, 1]);
    expect(sortArrayByParityII(inputArray)).toEqual([2, 4, 3, 1]);

    sortArrayByParityIII(inputArray2);
    expect(inputArray2).toEqual([2, 4, 3, 1]);
  });

  test('Should pass with input = [0]', () => {
    const inputArray: number[] = [0];
    const inputArray2: number[] = [0];

    expect(sortArrayByParity(inputArray)).toEqual([0]);
    expect(sortArrayByParityII(inputArray)).toEqual([0]);

    sortArrayByParityIII(inputArray2);
    expect(inputArray2).toEqual([0]);
  });

  test('Should pass with input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]', () => {
    const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const inputArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // expect(sortArrayByParity(inputArray)).toEqual([2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11]);
    expect(sortArrayByParityII(inputArray)).toEqual([
      2, 4, 6, 8, 10, 12, 7, 1, 9, 5, 11, 3,
    ]);

    sortArrayByParityIII(inputArray2);
    expect(inputArray2).toEqual([2, 4, 6, 8, 10, 12, 7, 1, 9, 5, 11, 3]);
  });
});
