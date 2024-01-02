/**
 * Basically, this question looks pretty straightforward, but in the same time it can be a bit tricky.
 * The point here is to try gather a bit more information like:
 *    What is the input/output data?
 *    Can we mutate it or not?
 *    What are the constraints?
 * ....
 *
 * The answers will give us a more clear picture of what techniques we can use
 * and what trade-offs we are able/not able to do. The examples below are doing
 * the same thing but there I played with the trade-offs and questions that I asked myself
 */

/**
 * @description Brute-force approach - Avoid it! if is possible
 * BIG-O() analysis:
 *    Time: O(n^2) | Space: O(1) -> Where the "n" is length of the array
 *
 * @see https://leetcode.com/problems/two-sum/
 * @param nums An array of numbers
 * @param target Target sum
 */
export const twoSumBruteForce = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currentSum = nums[i] + nums[j];
      if (currentSum === target) return [i, j];
    }
  }

  return [-1, -1];
};

/**
 * @description Optimal solution when we are not able to mutate the input array
 * Hint: We have to use an auxiliary DA called hash-table where we are doing map value to index (val:index).
 *
 * The benefit of that is reducing the time complexity
 *      from "BIG-O(n^2)" to "BIG-O(n)" and the same time we are doing trade-off from the space complexity.
 *
 * About the equation it is pretty straightforward:
 *      (y = target - x) where "target" represent the requested amount and "x" represent current item from the array.
 *      The amount of this equation we gonna store it in hash-table ({ SUM : IDX }) and compare it in each iteration.
 *
 * BIG-O() analysis:
 *    Time: O(n) | Space: O(n) -> Where the "n" is length of the array
 *
 * @see https://leetcode.com/problems/two-sum/
 * @param nums An array of numbers
 * @param target Target sum
 */
export const twoSumOptimal = (nums: number[], target: number): number[] => {
  const store: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const sum = target - current;

    if (sum in store) {
      return [store[sum], i];
    }

    store[current] = i;
  }

  return [-1, -1];
};
