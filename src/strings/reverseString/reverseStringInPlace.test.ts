import {
  reverseStringInPlace,
  reverseStringInPlaceII,
} from './reverseStringInPlace';

describe('Strings -> 344. Reverse String', () => {
  test(`Should be able to reverse a string: ["h", "e", "l", "l", "o"] in place`, () => {
    const inputArray: string[] = ['h', 'e', 'l', 'l', 'o'];
    const inputArray1: string[] = ['h', 'e', 'l', 'l', 'o'];

    reverseStringInPlace(inputArray);
    reverseStringInPlaceII(inputArray1);

    expect(inputArray).toEqual(['o', 'l', 'l', 'e', 'h']);
    expect(inputArray1).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  test(`Should be able to reverse a string: ["H", "a", "n", "n", "a", "h"] in place`, () => {
    const inputArray: string[] = ['H', 'a', 'n', 'n', 'a', 'h'];
    const inputArray1: string[] = ['H', 'a', 'n', 'n', 'a', 'h'];

    reverseStringInPlace(inputArray);
    reverseStringInPlaceII(inputArray1);

    expect(inputArray).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
    expect(inputArray1).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
