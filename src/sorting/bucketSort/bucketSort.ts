/**
 * @description
 * Bucket sort works as follows:
 * 1) Set up an array of initially empty "buckets".
 * 2) Scatter: Go over the original array, putting each object in its bucket.
 * 3) Sort each non-empty bucket.
 * 4) Gather: Visit the buckets in order and put all elements back into the original array.
 *
 * PAY ATTENTION:
 *  This solution won't work with negative values!
 *
 * BIG-O() analysis:
 *    Worst: Time O(n^2) | Space O(n^2) - Where the "n" is length of the input array
 *    Avg: Time O(n+k) | Space O(n+k) - Where the "n" is length of the input array and the "k"
 *      is number of the bucket that we need.
 *
 * @see: https://en.wikipedia.org/wiki/Bucket_sort
 * @see: https://www.toptal.com/developers/sorting-algorithms
 */
export const bucketSort = (array: number[], k: number = array.length): void => {
  if (k <= 0) return;

  // Getting the max value from the array
  let max = -Infinity;
  for (const val of array) {
    max = Math.max(max, val);
  }

  // Creating a "k" buckets
  const buckets: number[][] = new Array<number[][]>(k + 1)
    .fill([])
    .map(() => []);

  //Scattering the items into the buckets individually
  for (let i = 0; i < array.length; i++) {
    // const idx = Math.floor((array[i] % k) / max); // The same like next line
    const idx = Math.floor((array[i] * k) / max);

    buckets[idx].push(array[i]);
  }

  // Sorting each bucket separately
  for (let i = 0; i < k + 1; i++) {
    if (buckets[i].length > 0) {
      // Assuming we are using best sorting algorithm (Time: O(n) | Space: O(1))
      buckets[i].sort((a, b) => a - b);
    }
  }

  // Moving back all items (in-place) from each bucket to the original array
  let index = 0;
  for (let i = 0; i < k + 1; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      array[index++] = buckets[i][j];
    }
  }
};

/**
 * @description
 * The idea behind this solution is to create a "bucket" for each one of the numbers and map them to their respective buckets.
 *
 * Bucket sort works as follows:
 * 1) Set up an array of initially empty "buckets".
 * 2) Scatter: Go over the original array, putting each number in its bucket.
 * 3) Gather: Visit the buckets in order and put all elements back into the original array.
 *
 * BIG-O() analysis:
 *    Worst: Time O(n) | Space O(k) - Where the "n" is length of the input array and the "k" is the max number form the range (0 - n)
 *    Avg: Time O(n) | Space O(k) - Where the "n" is length of the input array and the "k" is the max number form the range (0 - n)
 */
export const bucketSortII = (array: number[]) => {
  let max = -Infinity;
  for (const val of array) {
    max = Math.max(max, val);
  }

  const buckets = new Array<number>(max + 1).fill(0);
  for (let i = 0; i < array.length; i++) {
    buckets[array[i]] += 1;
  }

  let idx = 0;
  for (let i = 0; i < buckets.length; i++) {
    let count = 0;

    while (count < buckets[i]) {
      array[idx++] = i;
      count++;
    }
  }
};
