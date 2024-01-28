type Fn = (n: number, i: number) => any;

//@see: https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
const filter = (arr: number[], fn: Fn): number[] => {
  const outputArray: number[] = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (fn(arr[idx], idx)) {
      outputArray.push(arr[idx]);
    }
  }

  return outputArray;
};

export { filter, Fn };
