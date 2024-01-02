/**
 * @description
 *  The point here is to use a two-pointer pattern (one slow and another fast). We are assuming
 *  that the first item is always a unique item because the input is a sorted array. The second piece of the
 *  algorithm is the start from the first item and on each item compare it with prev one.
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param array An array of numbers
 */
const removeDuplicates = (sortedArray: number[]): number => {
  if (sortedArray.length === 0) return 0;

  let leftPointer = 1;
  for (
    let rightPointer = leftPointer;
    rightPointer < sortedArray.length;
    rightPointer++
  ) {
    if (sortedArray[rightPointer] !== sortedArray[rightPointer - 1]) {
      sortedArray[leftPointer++] = sortedArray[rightPointer];
    }
  }

  return leftPointer;
};

export default removeDuplicates;
