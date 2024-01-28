//@see: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
const createCounter = (n: number): (() => number) => {
  let num = n - 1;
  return () => (num += 1);
};

export { createCounter };
