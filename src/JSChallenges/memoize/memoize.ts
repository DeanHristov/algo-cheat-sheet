type Fn = (...params: number[]) => number;

/**
 * @see: https://leetcode.com/problems/memoize
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
