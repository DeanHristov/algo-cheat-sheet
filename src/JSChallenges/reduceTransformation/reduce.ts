type Fn = (accum: number, curr: number) => number;

//@see: https://leetcode.com/problems/array-reduce-transformation
const reduce = (nums: number[], fn: Fn, init: number): number => {
  if (nums.length === 0) return init;

  for (let idx = 0; idx < nums.length; idx++) {
    init = fn(init, nums[idx]);
  }

  return init;
};

export { reduce };
