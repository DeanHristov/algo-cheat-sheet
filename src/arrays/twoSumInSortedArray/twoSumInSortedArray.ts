/**
 * @description
 *  Using a two-pointer pattern. The first one starts from the beginning of the array (lefPointer) and
 *  The second one starts from the end of the array (rightPointer).
 *
 * BIG-O() analysis:
 *   Time: O(n) | Space: O(1) -> Where the "n" is length of the array
 *
 * @see: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param numbers An array of numbers
 * @param target Target sum
 */
export const twoSumInSortedArray = (
  numbers: number[],
  target: number,
): number[] => {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    const currentSum = numbers[leftPointer] + numbers[rightPointer];

    if (currentSum > target) {
      rightPointer--;
    } else if (currentSum < target) {
      leftPointer++;
    } else {
      return [++leftPointer, ++rightPointer];
    }
  }

  return [-1, -1];
};

export default twoSumInSortedArray;
