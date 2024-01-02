import SingleListNode from '../SingleListNode';
import { mergeTwoLists } from './mergeTwoLists';

let list1: SingleListNode = new SingleListNode(1);
list1.next = new SingleListNode(2);
list1.next.next = new SingleListNode(4);

let list2: SingleListNode = new SingleListNode(1);
list2.next = new SingleListNode(3);
list2.next.next = new SingleListNode(4);

describe('Single linked list -> 21. Merge Two Sorted Lists', () => {
  afterEach(() => {
    list1 = new SingleListNode(1);
    list2 = new SingleListNode(1);
  });

  test('Should pass with inputs: list1 = 1 -> 2 -> 4 | list2 = 1 -> 3 -> 4', () => {
    list1.next = new SingleListNode(2);
    list1.next.next = new SingleListNode(4);

    list2.next = new SingleListNode(3);
    list2.next.next = new SingleListNode(4);

    const newList = mergeTwoLists(list1, list2);

    expect(newList).toEqual({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
        },
      },
    });
  });

  test('Should pass with inputs: list1 = 1 -> 2 -> 4 | list2 = 1', () => {
    list1.next = new SingleListNode(2);
    list1.next.next = new SingleListNode(4);

    const newList: SingleListNode | null = mergeTwoLists(list1, list2);

    expect(newList).toEqual({
      val: 1,
      next: { val: 1, next: { val: 2, next: { val: 4, next: null } } },
    });
  });

  test('Should pass if the first list is empty', () => {
    const newList: SingleListNode | null = mergeTwoLists(
      null,
      new SingleListNode(0),
    );

    expect(newList).toEqual({ val: 0, next: null });
  });

  test('Should pass if the second list is empty', () => {
    const newList: SingleListNode | null = mergeTwoLists(
      new SingleListNode(0),
      null,
    );

    expect(newList).toEqual({ val: 0, next: null });
  });
});
