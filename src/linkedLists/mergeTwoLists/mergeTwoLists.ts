class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @see https://leetcode.com/problems/merge-two-sorted-lists/
 * @description
 * So, the majority of work is already done by the requirements because the input always gonna be two sorted lists.
 * We have to create one more "dummy" linked list in the begging because first it will cover all edge cases and holding reference
 * to the final representation of the output list and secondly, on each iteration,
 * we are moving the head of each list with one step further. Finally, we are returning the dummy list
 *
 * BIG-O() analysis:
 * Time: O(n + m) | Space: 0(n + m) - where the "n" is length of the first list and "m" is length of the second list
 *
 * @param list1 Single linked list
 * @param list2 Single linked list
 */
const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // Always keeping reference to the head of the output list
  const dummyList: ListNode = new ListNode();

  // Keeping reference to the tail of the list
  let currentNode: ListNode = dummyList;

  while (list1?.val && list2?.val) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  if (list1 !== null) currentNode.next = list1;
  if (list2 !== null) currentNode.next = list2;

  return dummyList.next;
};

export { mergeTwoLists, ListNode };
