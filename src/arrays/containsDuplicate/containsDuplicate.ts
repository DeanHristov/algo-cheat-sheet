/**
 * @description
 * In the Brute-force approach where we are using nested loops, in each iteration,
 * we are comparing the current element with the rest items. If is possible - Avoid it!
 *
 * BIG-O() analysis:
 *    Time O(n^2) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/contains-duplicate/
 * @param array An array of numbers
 */
export const containsDuplicateBruteForce = (array: number[]): boolean => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return true;
    }
  }

  return false;
};

/**
 * @description
 * This approach is ok when we are not able to mutate the array in place or
 * the array contains negative values as well.
 *
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/contains-duplicate/
 * @param array An array of numbers
 */
export const containsDuplicate = (array: number[]): boolean => {
  const store: Set<number> = new Set<number>();

  for (const item of array) {
    if (store.has(item)) return true;

    store.add(item);
  }

  return false;
};

/**
 * @description
 *    The same approach like previous one (containsDuplicate(...)) but here we are using less code!
 * BIG-O() analysis:
 *    Time O(n) | Space O(n) - Where the "n" is the length of the input array
 */
export const containsDuplicateLess = (array: number[]): boolean => {
  const store: Set<number> = new Set([...array]);

  return store.size !== array.length;
};

/**
 * @description
 * Another solution of this kind of problem is could be firstly to sort the array
 * then checking each element with his neighbor.
 *
 * BIG-O() analysis:
 *    Time O(nlog(n)) | Space O(1) - Where the "n" is the length of the input array
 *
 * @see https://leetcode.com/problems/contains-duplicate/
 * @param array An array of numbers
 */
export const containsDuplicateWithSort = (array: number[]): boolean => {
  array.sort((a, b) => a - b);

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) return true;
  }

  return false;
};

/**
 * @description
 * Ok, this approach is much better than the rest of them, but here we need care about of two constraints!
 *   1) Whether the items in the array are only non-negative ( 1 <= array[idx] < n)?  | Assuming yes!
 *   2) Can we mutate the array in-place? | Assuming yes!
 *
 * The idea here is to map the array indexes to the array values, compare if the item is negative? If it is then
 * this item is already visited and returning the boolean/index/value/ in depends of requirements. If the item is non-negative value
 * then we are transforming (X * (-1)) it to negative and repeating the process.
 *
 * BIG-O() analysis:
 *   Time O(n) | Space O(1) - Where the "n" is the length of the input array
 * @param array An array of numbers
 */
export const containsDuplicateOptimal = (array: number[]): boolean => {
  for (const value of array) {
    const absValue = Math.abs(value);

    if (array[absValue - 1] < 0) return true;

    array[absValue - 1] *= -1;
  }

  return false;
};
