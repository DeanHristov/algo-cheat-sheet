type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | {
  [key: string]: JSONValue;
};
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

//@see: https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const once = (fn): OnceFn => {
  let isCalled: boolean = false;

  return function(...args) {
    if (isCalled) return undefined;

    isCalled = true;
    return fn(...args);
  };
};

export { once, OnceFn, JSONValue };
