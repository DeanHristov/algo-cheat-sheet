import { once } from './once';

describe('30 Days of JavaScript -> 2666. Allow One Function Call', () => {
  it('Should be able to be called', () => {
    const callback = (a: number, b: number, c: number) => a + b + c;
    const onceFn = once(callback);

    expect(onceFn(1, 2, 3)).toEqual(6);
  });

  it('Should be able to be called once', () => {
    const callback = (a: number, b: number, c: number) => a + b + c;
    const onceFn = once(callback);

    onceFn(1, 2, 3);

    expect(onceFn(1, 2, 3)).toBeUndefined();
  });
});
