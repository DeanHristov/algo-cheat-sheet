/**
 * @description
 *  Reversing the string manually if we are not able to use the built-in method (reverse()).
 *  In this technique, we are using a "two-pointer" pattern to reverse the string in place.
 *
 * BIG-O() analysis:
 *  Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/reverse-string/
 */
export const reverseStringInPlace = (array: string[]): void => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const tmpValue = array[leftPointer];

    array[leftPointer] = array[rightPointer];
    array[rightPointer] = tmpValue;

    leftPointer++;
    rightPointer--;
  }
};

/**
 * @description
 * This approach does the same as the previous one.
 * It is recommended if the task not strictly telling us to avoid it!
 *
 * BIG-O() analysis:
 *  Time O(n) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/reverse-string/
 */
export const reverseStringInPlaceII = (array: string[]): void => {
  array.reverse();
};
