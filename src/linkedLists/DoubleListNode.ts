import { IListNode } from './SingleListNode';

/**
 * @description
 * Representing a node from double linked list
 */
export default class DoubleListNode implements IListNode {
  public val: number | null;
  public next: IListNode | null;
  public prev: IListNode | null;

  constructor(
    val: number | null = null,
    next: IListNode | null = null,
    prev: IListNode | null = null,
  ) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
