/**
 * @description
 *  Using a two-pointer pattern to solve this problem where the first pointer (k) we gonna call it a slow pointer
 *  and the second pointer we gonna call it a faster pointer. The first pointer will increase his value +1 only
 *  when the current value of the item is not as input value (val). The purpose of the second pointer will be to
 *  traverse the entire array once.
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/remove-element/
 * @param array An array of numbers
 */
const removeElement = (inputArray: number[], val: number): number => {
  let k = 0;

  for (let rightPointer = 0; rightPointer < inputArray.length; rightPointer++) {
    if (inputArray[rightPointer] !== val) {
      inputArray[k++] = inputArray[rightPointer];
    }
  }

  return k;
};

export default removeElement;
