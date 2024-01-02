import isPalindrome from './isPalindrome';

describe('String -> 125. Valid Palindrome', () => {
  test(`Should be pass with input: "A man, a plan, a canal: Panama"`, () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  test(`Should be pass with input: "race a car"`, () => {
    expect(isPalindrome('race a car')).toBeFalsy();
  });

  test(`Should be pass with input: " "`, () => {
    expect(isPalindrome(' ')).toBeTruthy();
  });
});
