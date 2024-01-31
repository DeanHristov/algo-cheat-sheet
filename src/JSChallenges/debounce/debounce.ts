type F = (...args: number[]) => void;

//@see: https://leetcode.com/problems/debounce/
const debounce = (fn: F, t: number): F => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};

export { debounce, F };
