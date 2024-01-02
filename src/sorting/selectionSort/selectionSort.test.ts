import selectionSort from './selectionSort';

describe('Sorting -> Selection sort', () => {
  test('Should pass with input: [8, 5, 2, 9, 5, 6, 3]', () => {
    const inputArray: number[] = [8, 5, 2, 9, 5, 6, 3];

    selectionSort(inputArray);

    expect(inputArray).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });

  test('Should pass with input: [3, 2, 1]', () => {
    const inputArray: number[] = [3, 2, 1];

    selectionSort(inputArray);

    expect(inputArray).toEqual([1, 2, 3]);
  });

  test('Should pass with input: [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]', () => {
    const inputArray: number[] = [
      -7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8,
    ];

    selectionSort(inputArray);

    expect(inputArray).toEqual([
      -10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10,
    ]);
  });

  test('Should pass with input: [-1]', () => {
    const inputArray: number[] = [-1];

    selectionSort(inputArray);

    expect(inputArray).toEqual([-1]);
  });

  test('Should pass with input: [-2, 45, 0, 11, -9]', () => {
    const inputArray: number[] = [-2, 45, 0, 11, -9];

    selectionSort(inputArray);

    expect(inputArray).toEqual([-9, -2, 0, 11, 45]);
  });
});
