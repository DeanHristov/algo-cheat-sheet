import removeElement from './removeElement';

describe('Arrays -> 27. Remove Element', () => {
  test('Should pass with input = [3,2,2,3] | k = 3', () => {
    const inputArray: number[] = [3, 2, 2, 3];

    const k: number = removeElement(inputArray, 3);

    expect(k).toEqual(2);
  });

  test('Should pass with input = [0,1,2,2,3,0,4,2] | k = 2', () => {
    const inputArray: number[] = [0, 1, 2, 2, 3, 0, 4, 2];

    const k: number = removeElement(inputArray, 2);

    expect(k).toEqual(5);
  });
});
