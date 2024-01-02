/**
 * @description
 * The problem can be solved by using the “Frequency Counter” pattern - a HashTable.
 *
 * BIG-O() analysis:
 *    Time O(s + t) | Space O(s) - where "s" is the length of the first string,
 *    "t" is the length of second string
 *
 * @see https://leetcode.com/problems/valid-anagram/
 * @param firstString A string
 * @param secondString A string
 */
export const isAnagram = (firstString: string, secondString: string) => {
  if (firstString.length !== secondString.length) return false;

  const hashMap: Record<string, number> = {};

  for (const char of firstString) {
    hashMap[char] === undefined ? (hashMap[char] = 1) : (hashMap[char] += 1);
  }

  for (const char of secondString) {
    if (!hashMap[char]) return false;

    hashMap[char] -= 1;
  }

  return true;
};

/**
 * @description
 * Another way to solve this problem is when we first sort the both strings and then compare them.
 * In this solution we could make a trade-off from the time complexity, but improving the space.
 *
 * The reason why we could make a trade-off from a time is that there are a lot of sorting algorithms
 * Some of them can take "time: nlog(n)" another can take "time: n" or even "time: n^2 like bubble sort"
 *
 * BIG-O() analysis:
 *    Time O(nlog(s) + nlog(t)) | Space O(1) - where "s" is the length of the first string,
 *    "t" is the length of second string
 *
 * @see https://leetcode.com/problems/valid-anagram/
 * @param firstString A string
 * @param secondString A string
 */
export const isAnagramII = (firstString: string, secondString: string) => {
  if (firstString.length !== secondString.length) return false;

  return (
    firstString.split('').sort().join('') ===
    secondString.split('').sort().join('')
  );
};
