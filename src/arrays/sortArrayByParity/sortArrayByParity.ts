/**
 * @description
 *  Using the built-in sort method - Is not the best solution!
 *  Leetcode doesn't accept negative values (array[i] < 0).
 *
 * BIG-O() analysis:
 *    Time O(nlog(n)) | Space O(n) - Where the n is length of the array
 *
 * @see https://leetcode.com/problems/sort-array-by-parity/
 * @param array An array of numbers
 */
export const sortArrayByParity = (inputArray: number[]): number[] => {
  return inputArray.sort((a: number, b: number) => (a % 2) - (b % 2));
};

/**
 * @description
 *  Using two-pointer pattern to solve this problem
 *  Leetcode doesn't accept negative values (array[i] < 0) and we are not able to mutate the array in-place.
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the n is length of the array
 *
 * @see https://leetcode.com/problems/sort-array-by-parity/
 * @param array An array of numbers
 */
export const sortArrayByParityII = (inputArray: number[]): number[] => {
  let leftPointer = 0;
  const ouputArray = new Array(inputArray.length).fill(0);

  for (let rightPointer = 0; rightPointer < inputArray.length; rightPointer++) {
    ouputArray[rightPointer] = inputArray[rightPointer];
    if (ouputArray[rightPointer] % 2 === 0) {
      const temp = ouputArray[leftPointer];
      ouputArray[leftPointer++] = ouputArray[rightPointer];
      ouputArray[rightPointer] = temp;
    }
  }

  return ouputArray;
};

/**
 * @description
 *  Using two-pointer pattern and swapping the items in-place. Of course this solution is a good
 *  only if we are able to mutate the array in-place. Leetcode doesn't accept negative values (array[i] < 0).
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(1) - Where the n is length of the array
 *
 * @see https://leetcode.com/problems/sort-array-by-parity/
 * @param array An array of numbers
 */
export const sortArrayByParityIII = (inputArray: number[]): void => {
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < inputArray.length; rightPointer++) {
    if (inputArray[rightPointer] % 2 === 0) {
      const tempValue: number = inputArray[leftPointer];

      inputArray[leftPointer++] = inputArray[rightPointer];
      inputArray[rightPointer] = tempValue;
    }
  }
};
