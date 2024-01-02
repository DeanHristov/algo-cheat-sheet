/**
 * @description
 * Dividing the input array into two sub-arrays (sorted and un-sorted) in place.
 * The first subarray (left-part) always gonna keep the sorted part of the array and right part gonna keep un-sorted array.
 * Iterating through the unsorted subarray, finding the smallest item from the array and put it into the left sub-array (by swapping).
 *
 * BIG-O() analysis:
 *    Time O(n^2) | Space O(1) - Where the "n" is length of the input array
 *
 * @see: https://en.wikipedia.org/wiki/Selection_sort
 * @see: https://www.toptal.com/developers/sorting-algorithms
 */
const selectionSort = (array: number[]) => {
  const swapItems = (
    letIdx: number,
    rightIdx: number,
    array: number[],
  ): void => {
    const temp: number = array[letIdx];
    array[letIdx] = array[rightIdx];
    array[rightIdx] = temp;
  };

  for (let i = 0; i < array.length; i++) {
    let smallestIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIdx]) {
        smallestIdx = j;
      }
    }

    swapItems(i, smallestIdx, array);
  }
};

export default selectionSort;
