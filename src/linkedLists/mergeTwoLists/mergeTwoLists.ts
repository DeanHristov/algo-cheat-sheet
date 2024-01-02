import SingleListNode from '../SingleListNode';

/**
 * @description
 * So, the majority of work is already done by the requirements because the input always gonna be two sorted lists.
 * We have to create one more "dummy" linked list in the begging because first it will cover all edge cases and holding reference
 * to the final representation of the output list and secondly, on each iteration,
 * we are moving the head of each list with one step further. Finally, we are returning the dummy list
 *
 * The idea is to use a temporary dummy node at the start of the result list.
 * The pointer Tail always points to the last node in the result list, so appending new nodes is easy.
 *
 * BIG-O() analysis:
 * Time: O(n + m) | Space: 0(n + m) - where the "n" is length of the first list and "m" is length of the second list
 *
 * @see https://leetcode.com/problems/merge-two-sorted-lists/
 * @param list1 Single linked list
 * @param list2 Single linked list
 */
export const mergeTwoLists = (
  list1: SingleListNode | null,
  list2: SingleListNode | null,
): SingleListNode | null => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // Always keeping reference to the head of the output list
  const dummyList: SingleListNode = new SingleListNode();

  // Keeping reference to the tail of the list
  let currentNode: SingleListNode = dummyList;

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
