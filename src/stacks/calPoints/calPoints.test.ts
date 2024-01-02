import calPoints from './calPoints';

describe('Stack -> 682. Baseball Game', () => {
  test('Should pass with input: ["5","2","C","D","+"] | Sum = 30 ', () => {
    expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
  });

  test('Should pass with input: ["5","-2","4","C","D","9","+","+"] | Sum = 27 ', () => {
    expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
  });

  test('Should pass with input: ["1","C"] | Sum = 0 ', () => {
    expect(calPoints(['1', 'C'])).toBe(0);
  });
});
