import { reduce } from './reduce';

describe('30 Days of JavaScript -> 2626. Array Reduce Transformation', () => {
  it('Should be able to sum the amount based on an array of numbers', () => {
    const sum = (accum: number, curr: number): number => accum + curr;
    const result: number = reduce([1, 2, 3, 4], sum, 0);

    expect(result).toEqual(10);
  });

  it('Should be able to sum/multiply the amount based on an array of numbers', () => {
    const sum = (accum: number, curr: number): number => accum + curr * curr;
    const result: number = reduce([1, 2, 3, 4], sum, 100);

    expect(result).toEqual(130);
  });

  it('Should be able to return the initial value', () => {
    const result: number = reduce([], (): number => 0, 25);

    expect(result).toEqual(25);
  });
});
