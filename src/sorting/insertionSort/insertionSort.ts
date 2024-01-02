/**
 * @description
 * Dividing the input array into two sub-arrays in place. The first subarray always gonna be sorted and should start with a length of 1
 * The second subarray should be unsorted. Iterating through the unsorted subarray, inserting all of its elements into the sorted subarray
 * in the correct position by swapping them into place.
 *
 * BIG-O() analysis:
 *    best => Time O(n) | Space O(1) - Where the "n" is length of the input array
 *    Avg | worst => Time: (c * n^2) | Space O(1) - Where the "n" is length of the input array
 *
 * @see: https://en.wikipedia.org/wiki/Insertion_sort
 * @see: https://www.toptal.com/developers/sorting-algorithms
 */
const insertionSort = (array: number[]) => {
  const swapItems = (
    letIdx: number,
    rightIdx: number,
    array: number[],
  ): void => {
    const temp: number = array[letIdx];
    array[letIdx] = array[rightIdx];
    array[rightIdx] = temp;
  };

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      swapItems(j, j - 1, array);
    }
  }
};

export default insertionSort;
