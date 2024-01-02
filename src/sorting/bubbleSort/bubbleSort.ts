/**
 * @description
 * Sorting the array in-place. It is working by comparing and swapping two neighbors items
 *
 * BIG-O() analysis:
 *    Time O(n^2) | Space O(1) - Where the "n" is length of the input array
 *
 * @see: https://en.wikipedia.org/wiki/Bubble_sort
 * @see: https://www.toptal.com/developers/sorting-algorithms
 */
const bubbleSort = (array: number[]) => {
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
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapItems(j, j + 1, array);
      }
    }
  }
};

export default bubbleSort;
