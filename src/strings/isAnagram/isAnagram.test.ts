import { isAnagram, isAnagramII } from './isAnagram';

describe('String -> 242. Valid Anagram', () => {
  test(`Should past with inputs: s1 = "anagram" | s2 = "nagaram"`, () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    expect(isAnagramII('anagram', 'nagaram')).toBeTruthy();
  });

  test(`Should past with inputs: s1 = "rat" | s2 = "car"`, () => {
    expect(isAnagram('rat', 'car')).toBeFalsy();
    expect(isAnagramII('rat', 'car')).toBeFalsy();
  });

  test(`Should not past if the input strings has diff length:  s1 = "rat" | s2 = "carq"`, () => {
    expect(isAnagram('rat', 'carq')).toBeFalsy();
    expect(isAnagramII('rat', 'carq')).toBeFalsy();
  });
});
