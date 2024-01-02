/**
 * @description
 *  Using auxiliary stack structure to solve this problem because here the order of opening - closing brackets matters.
 *  Traversing the entire string and doing checks:
 *  1) if there a open bracket -> push in the stack
 *  2) If there a closing bracket then checking if the last item from the stack is opened bracket (from the same type)
 *     if it is popping the element from the stack, otherwise return false!
 *
 *  3) Last step - If the input is valid our stack should be empty (the string is valid).
 *
 * BIG-O() analysis:
 *    Time: O(n) | Space: O(n) - Where the "n" is length of the input string
 *
 * @see https://leetcode.com/problems/valid-parentheses/
 * @param string A string
 */
const validParentheses = (string: string): boolean => {
  const stack: string[] = [];
  const mapClosingParenthesesWithOpened: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < string.length; i++) {
    const bracket: string = string[i];

    if (!mapClosingParenthesesWithOpened[bracket]) {
      stack.push(bracket);
    } else {
      if (
        mapClosingParenthesesWithOpened[bracket] !== stack[stack.length - 1]
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

export default validParentheses;
