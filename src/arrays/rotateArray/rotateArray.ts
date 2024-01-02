/**
 * @description
 * The naive solution here is to use auxiliary DS (the same as the input) and using
 * the primitive algebra to shift-right each element by "K" positions without
 * leaving the array boundaries through "MOD" operator. The equation is:
 * (idx + k) % nums.length; where idx = current "index" of the array and "K"
 * is the positions (to the right).
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the "n" is the length of the input array
 *
 * @param nums An array of numbers
 * @param k Shifting-right the elements by "K" positions
 */
export const rotateArray = (nums: number[], k: number): number[] => {
  if (nums.length === 0) return [];

  const outputArray: number[] = new Array(nums.length);

  for (let idx = 0; idx < nums.length; idx++) {
    const position = (idx + k) % nums.length;
    outputArray[position] = nums[idx];
  }

  return outputArray;
};

/**
 * @description
 * Here, we can optimize the space more when we are rotating the array in-place.
 * To achieve this we have to firstly, reverse the entire array, then doing the exact same again by pieces (left-right)
 * separately.
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/rotate-array/
 * @param nums An array of numbers
 * @param k Shifting-right the elements by "K" positions
 */
export const rotateArrayInPlace = (nums: number[], k: number): void => {
  const rightBorder = k % nums.length;
  const swapItems = (
    leftPointer: number,
    rightPointer: number,
    array: number[],
  ): void => {
    const tempValue = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = tempValue;
  };

  const reversePortion = (
    leftPointer: number,
    rightPointer: number,
    nums: number[],
  ) => {
    while (leftPointer < rightPointer) {
      swapItems(leftPointer, rightPointer, nums);
      leftPointer++;
      rightPointer--;
    }
  };

  // Reverse entire array
  nums.reverse();

  // Reversing the left part of the array
  reversePortion(0, rightBorder - 1, nums);

  // Reversing the right part of the array
  reversePortion(rightBorder, nums.length - 1, nums);
};

/**
 * @description
 * Another implementation of the example above. It has  the same cost-efficient
 *
 * BIG-O() analysis:
 *     Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/rotate-array/
 * @param nums An array of numbers
 * @param k Shifting-right the elements by "K" positions
 */
export const rotateArrayInPlaceII = (nums: number[], k: number) => {
  const boundary = k % nums.length;

  for (let idx = 0; idx < boundary; idx++) {
    const back = nums.pop();

    if (back) nums.unshift(back);
  }
};
