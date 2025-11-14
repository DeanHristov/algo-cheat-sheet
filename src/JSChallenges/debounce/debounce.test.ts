import { debounce } from './debounce';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('30 Days of JavaScript -> 2627. Debounce', () => {
  it('Should not to be able to call the function', () => {
    const mockCallBack = jest.fn();
    const log = debounce(mockCallBack, 100);

    log(1);
    expect(mockCallBack).not.toHaveBeenCalled();
  });

  it('Should be able to call the function', () => {
    const mockCallBack = jest.fn();
    const log = debounce(mockCallBack, 100);

    log(1);
    jest.runAllTimers();

    expect(mockCallBack).toHaveBeenCalled();
    expect(mockCallBack).toHaveBeenCalledWith(1);
  });

  it('Should be able to call the function once', () => {
    const mockCallBack = jest.fn();
    const log = debounce(mockCallBack, 100);

    log(1);
    log(2);
    log(3);
    jest.runAllTimers();

    expect(mockCallBack).toHaveBeenCalledTimes(1);
    expect(mockCallBack).toHaveBeenCalledWith(3);
  });
});
