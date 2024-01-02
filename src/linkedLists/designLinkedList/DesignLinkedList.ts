import SingleListNode from '../SingleListNode';

/**
 * @see https://leetcode.com/problems/design-linked-list/
 */
export default class DesignLinkedList {
  public head: SingleListNode | null;
  public tail: SingleListNode | null;
  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * BIG-O() analysis:
   *  Time: O(n)| Space: 0(1) - Where the "n" is size of the list
   * @param index A position of list
   */
  get(index: number): number {
    if (index > this.size) return -1;

    let position = 0;
    let currentNode: SingleListNode | null = this.head;

    while (currentNode && index !== position) {
      currentNode = currentNode.next;

      position++;
    }

    return currentNode?.val || -1;
  }

  /**
   * BIG-O() analysis:
   *  Time: O(1) | Space: 0(1)
   *
   * @param val The new value
   */
  addAtHead(val: number): void {
    const newNode: SingleListNode = new SingleListNode(val);
    const temNode = this.head;

    newNode.next = temNode;
    this.head = newNode;
    this.size += 1;
  }

  /**
   * BIG-O() analysis:
   *  Time: O(1) | Space: 0(1)
   *
   * @param val The new value
   */
  addAtTail(val: number): void {
    const newNode: SingleListNode | null = new SingleListNode(val);
    const tempTail: SingleListNode | null = this.tail;

    newNode.next = tempTail;
    this.tail = newNode;
    this.size += 1;
  }

  /**
   * BIG-O() analysis:
   *  Time: O(n)| Space: 0(1) - Where the "n" is size of the list
   *
   * @param index A position of list
   * @param val The new value
   */
  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;

    if (index === this.size) {
      const tempNode = this.tail;
    }

    this.size += 1;
  }

  /**
   * BIG-O() analysis:
   *  Time: O(n)| Space: 0(1) - Where the "n" is size of the list
   *
   * @param index A position of list
   */
  deleteAtIndex(index: number): void {
    if (index > this.size) return;

    let currentNode = this.head;
    let counter = 0;

    while (currentNode && index < counter) {
      currentNode = currentNode.next;
      counter++;
    }

    this.size -= 1;
  }
}
