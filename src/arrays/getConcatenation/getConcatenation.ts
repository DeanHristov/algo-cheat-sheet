/**
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/concatenation-of-array/
 * @param array An array of numbers
 */
export const getConcatenation = (nums: number[]): number[] => {
  const outputArray: number[] = new Array(nums.length * 2).fill(0);

  for (let idx = 0; idx < nums.length; idx++) {
    outputArray[idx] = nums[idx];
    outputArray[idx + nums.length] = nums[idx];
  }

  return outputArray;
};

/**
 * @description
 *  Nothing special - Just using build-in method
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/concatenation-of-array/
 * @param array An array of numbers
 */
export const getConcatenationII = (nums: number[]): number[] => {
  return nums.concat(nums);
};

/**
 * @description
 *  Nothing special - Just using spreed syntax
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the "n" is the length of the input array
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * @see https://leetcode.com/problems/concatenation-of-array/
 * @param array An array of numbers
 */
export const getConcatenationIII = (nums: number[]): number[] => {
  return [...nums, ...nums];
};
