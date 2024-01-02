import removeDuplicates from './removeDuplicates';

describe('Arrays -> 26. Remove Duplicates from Sorted Array', () => {
  test('Should pass with input = [1,1,2]', () => {
    const inputArray: number[] = [1, 1, 2];
    const ouputResult: number = removeDuplicates(inputArray);

    expect(ouputResult).toEqual(2);
  });

  test('Should pass with input = []', () => {
    const inputArray: number[] = [];
    const ouputResult: number = removeDuplicates(inputArray);

    expect(ouputResult).toEqual(0);
  });

  test('Should pass with input = [0,0,1,1,1,2,2,3,3,4]', () => {
    const inputArray: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const ouputResult: number = removeDuplicates(inputArray);

    expect(ouputResult).toEqual(5);
  });
});
