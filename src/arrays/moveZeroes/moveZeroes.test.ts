import { moveZeroes } from './moveZeroes';

describe('Arrays -> 283. Move Zeroes', () => {
  test('Should pass with input = [0,1,0,3,12]', () => {
    const inputArray: number[] = [0, 1, 0, 3, 12];
    moveZeroes(inputArray);

    expect(inputArray).toEqual([1, 3, 12, 0, 0]);
  });

  test('Should pass with input = [0]', () => {
    const inputArray: number[] = [0];
    moveZeroes(inputArray);

    expect(inputArray).toEqual([0]);
  });
});
