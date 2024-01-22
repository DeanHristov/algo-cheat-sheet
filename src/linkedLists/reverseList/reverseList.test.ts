import { reverseList } from './reverseList';

describe('Linked lists -> 206. Reverse Linked List', () => {
  test('Should be able to revers a list', () => {
    const singleList = {
      val: 0,
      next: { val: 1, next: { val: 2, next: null } },
    };

    expect(reverseList(singleList)).toEqual({
      val: 2,
      next: { val: 1, next: { val: 0, next: null } },
    });
  });

  test('Should be able to revers a list of one node', () => {
    const singleList = {
      val: -1,
      next: null,
    };

    expect(reverseList(singleList)).toEqual({
      val: -1,
      next: null,
    });
  });

  test('Should be able to return null if the input = null', () => {
    expect(reverseList(null)).toBeNull();
  });
});
