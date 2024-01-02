/**
 * @description
 *
 * BIG-O() analysis:
 *  Time O(n) | Space O(n) - Where the "n" is the length of the string
 *
 * @see https://leetcode.com/problems/valid-palindrome/
 * @param str A input string
 */
const isPalindrome = (str: string): boolean => {
  const stringArray = str
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, '')
    .replace(/\s/g, '')
    .split('');

  let leftPointer = 0;
  let rightPointer = stringArray.length - 1;

  while (leftPointer < rightPointer) {
    if (stringArray[leftPointer] !== stringArray[rightPointer]) return false;

    leftPointer++;
    rightPointer--;
  }

  return true;
};

export default isPalindrome;
