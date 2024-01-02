import validParentheses from './validParentheses';

describe('Stack -> 20. Valid Parentheses', () => {
  test(`Should pass with input: "()"`, () => {
    expect(validParentheses('()')).toBeTruthy();
  });

  test(`Should pass with input: "()[]{}"`, () => {
    expect(validParentheses('()[]{}')).toBeTruthy();
  });

  test(`Should pass with input: "((({{{}}})))[[[]]]"`, () => {
    expect(validParentheses('((({{{}}})))[[[]]]')).toBeTruthy();
  });

  test(`Should not pass with input: "(]"`, () => {
    expect(validParentheses('(]')).toBeFalsy();
  });

  test(`Should not with input: "((({{{}})))[[[]]]"`, () => {
    expect(validParentheses('((({{{}})))[[[]]]')).toBeFalsy();
  });
});
