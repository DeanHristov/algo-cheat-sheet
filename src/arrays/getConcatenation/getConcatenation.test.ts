import {
  getConcatenation,
  getConcatenationII,
  getConcatenationIII,
} from './getConcatenation';

describe('Arrays -> 1929. Concatenation of Array', () => {
  test('Should pass with input = [1,2,1]', () => {
    const inputArray: number[] = [1, 2, 1];
    const ouputResult1: number[] = getConcatenation(inputArray);
    const ouputResult2: number[] = getConcatenationII(inputArray);
    const ouputResult3: number[] = getConcatenationIII(inputArray);

    expect(ouputResult1).toEqual([1, 2, 1, 1, 2, 1]);
    expect(ouputResult2).toEqual([1, 2, 1, 1, 2, 1]);
    expect(ouputResult3).toEqual([1, 2, 1, 1, 2, 1]);
  });

  test('Should pass with input = []', () => {
    const inputArray: number[] = [];
    const ouputResult1: number[] = getConcatenation(inputArray);
    const ouputResult2: number[] = getConcatenationII(inputArray);
    const ouputResult3: number[] = getConcatenationIII(inputArray);

    expect(ouputResult1).toEqual([]);
    expect(ouputResult2).toEqual([]);
    expect(ouputResult3).toEqual([]);
  });

  test('Should pass with input = [1,3,2,1]', () => {
    const inputArray: number[] = [1, 3, 2, 1];
    const ouputResult1: number[] = getConcatenation(inputArray);
    const ouputResult2: number[] = getConcatenationII(inputArray);
    const ouputResult3: number[] = getConcatenationIII(inputArray);

    expect(ouputResult1).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
    expect(ouputResult2).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
    expect(ouputResult3).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
