type F = (x: number) => number;

//@see: https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
const compose = (functions: F[]): F => {
  return (x) => {
    for (const fn of functions.reverse()) {
      x = fn(x);
    }

    return x;
  };
};

export { compose };
