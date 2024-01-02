/**
 * @description
 * This problem can be solved in two ways. Using a second stack where we are holding the min-value on each push
 * or just our stack represents a two-dimensional array ([[val, minVal], ..., [val, minVal]]).
 *
 * BIG-O() analysis:
 *    Time: O(1) - each operation has constant type | Space: O(n) - where the "n" is the size of the stack.
 *
 * @see: https://leetcode.com/problems/min-stack/
 */
class MinStack {
  public stack: number[][];

  constructor(stack: number[][] = []) {
    this.stack = stack;
  }

  /**
   * BIG-O() analysis: Time O(1) | Space O(1)
   */
  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push([val, val]);
    } else {
      const minValue = Math.min(val, this.stack[this.stack.length - 1][1]);
      this.stack.push([val, minValue]);
    }
  }

  /**
   * BIG-O() analysis: Time O(1) | Space O(1)
   */
  pop(): void {
    this.stack.pop();
  }

  /**
   * BIG-O() analysis: Time O(1) | Space O(1)
   */
  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  /**
   * BIG-O() analysis: Time O(1) | Space O(1)
   */
  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}

export default MinStack;
