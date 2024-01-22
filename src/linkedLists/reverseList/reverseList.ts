class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @description
 * This kind of problem can be solved iteratively or recursively. The solution below represent iterative (Optimal) solution.
 * How to solve it? Using three pointers. Initial values:
 *  prevNode = null;
 *  currentNode = keeping the head of list;
 *  nextNode = Keeping reference to the next node.
 *
 * BIG-O() analysis:
 *    Time: O(n) | Space: O(1) - Where the n is length of the list
 *
 * @see: https://leetcode.com/problems/reverse-linked-list/description/
 */
const reverseList = (head: ListNode | null): ListNode | null => {
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = prevNode;
    prevNode = currentNode;

    currentNode = nextNode;
  }
  return prevNode;
};

export { ListNode, reverseList };
