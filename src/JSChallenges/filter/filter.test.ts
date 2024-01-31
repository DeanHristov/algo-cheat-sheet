import { filter } from './filter';

describe('30 Days of JavaScript -> 2634. Filter Elements from Array', () => {
  it('Should be able to return all numbers X > 10', () => {
    const result: number[] = filter([0, 10, 20, 30], (x: number) => x > 10);

    expect(result).toEqual([20, 30]);
  });

  it('Should be able to return only the first item from the collection', () => {
    const result: number[] = filter(
      [1, 2, 3],
      (x: number, idx: number) => idx === 0,
    );

    expect(result).toEqual([1]);
  });

  it('Should be able to only return [-2, 0, 1, 2]', () => {
    const result: number[] = filter([-2, -1, 0, 1, 2], (x: number) => x + 1);

    expect(result).toEqual([-2, 0, 1, 2]);
  });
});
