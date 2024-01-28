type Fn = (...params: number[]) => number;

/**
 * @see: https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
const memoize = (fn: Fn): Fn => {
  const cache: Record<string, number> = {};

  return (...args): number => {
    const key = JSON.stringify(args);

    if (key in cache) return cache[key];

    cache[key] = fn(...args);

    return cache[key];
  };
};

export { memoize };
