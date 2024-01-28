type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

//@see: https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
const createCounter = (init: number): Counter => {
  const initValue: number = init;

  return {
    increment: (): number => ++init,
    decrement: (): number => --init,
    reset: (): number => (init = initValue)
  };
};

export { createCounter, Counter };
