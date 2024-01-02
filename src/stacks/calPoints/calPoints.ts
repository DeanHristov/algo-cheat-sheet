/**
 * @description
 *  Using a stack structure and memoize the last two items.
 *
 * BIG-O() analysis:
 *    Time: O(n) | Space: O(n) - Where the "n" is length of the input operation
 *
 * @see https://leetcode.com/problems/baseball-game/
 * @param string A string
 */
const calPoints = (operations: string[]): number => {
  const stack: number[] = [];

  for (const key of operations) {
    if (key === '+') {
      const sum = stack[stack.length - 1] + stack[stack.length - 2];

      stack.push(sum);
    } else if (key === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (key === 'C') {
      stack.pop();
    } else {
      stack.push(Number(key));
    }
  }

  return stack.reduce((acc, curr) => (acc += curr), 0);
};

export default calPoints;
