import { memoize } from './memoize';

describe('30 Days of JavaScript -> 2623. Memoize', () => {
  it('Should be able to calc a sum', () => {
    const memoizedFn = memoize((a, b) => a + b);

    expect(memoizedFn(2, 3)).toEqual(5);
  });

  it('Should be able to return the memoized version of the result', () => {
    let callCount = 0;
    const memoizedFn = memoize((a, b) => {
      callCount += 1;
      return a + b;
    });

    memoizedFn(2, 3);
    memoizedFn(2, 3);

    expect(callCount).toEqual(1);
  });
});
