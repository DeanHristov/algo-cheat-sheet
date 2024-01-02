/**
 * @description
 *  Using a two-pointer pattern to solve this problem where the first pointer (leftPointer) we gonna call it a slow pointer
 *  and the second pointer we gonna call it faster pointer. The first pointer will increase his value +1 only
 *  when the current value of the item (inputArray[righPointer]) is not a zero. The purpose of the second pointer will be to
 *  traverse the entire array once. After we traversed the entire array and removed the zeroes from the first part of the array
 *  is time to fill up the second part of the array with zeroes
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/move-zeroes/
 * @param array An array of numbers
 */
export const moveZeroes = (inputArray: number[]): void => {
  let leftPointer = 0;

  for (
    let righPointer = leftPointer;
    righPointer < inputArray.length;
    righPointer++
  ) {
    if (inputArray[righPointer] !== 0) {
      inputArray[leftPointer++] = inputArray[righPointer];
    }
  }

  while (leftPointer < inputArray.length) {
    inputArray[leftPointer++] = 0;
  }
};
