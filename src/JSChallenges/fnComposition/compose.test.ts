import { compose } from './compose';

describe('30 Days of JavaScript -> 2629. Function Composition', () => {
  it('Should multiply the sum properly when the X=4 ', () => {
    const functions = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x,
    ];
    expect(compose(functions)(4)).toEqual(65);
  });

  it('Should multiply the sum properly when the X=1 ', () => {
    const functions = [
      (x: number) => 10 * x,
      (x: number) => 10 * x,
      (x: number) => 10 * x,
    ];
    expect(compose(functions)(1)).toEqual(1000);
  });

  it('Should be able to to composition of zero functions', () => {
    expect(compose([])(42)).toEqual(42);
  });
});
