/**
 * @description
 * Representing a node from single linked list
 */

export interface IListNode {
  val: number | null;
  next: IListNode | null;
  prev?: IListNode | null;
}

export default class SingleListNode implements IListNode {
  public val: number | null;
  public next: IListNode | null;

  constructor(value: number | null = null, next: IListNode | null = null) {
    this.val = value;
    this.next = next;
  }
}
