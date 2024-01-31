//@see: https://leetcode.com/problems/counter
const createCounter = (n: number): (() => number) => {
  let num = n - 1;
  return () => (num += 1);
};

export { createCounter };
