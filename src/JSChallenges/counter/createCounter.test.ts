import { createCounter } from './createCounter';

describe('30 Days of JavaScript -> 2620. Counter', () => {
  it('Should be able to count properly', () => {
    const counter = createCounter(10);
    let result: number = counter();

    result = counter();
    result = counter();
    expect(result).toEqual(12);
  });
});
