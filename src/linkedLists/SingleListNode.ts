class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SingleList<T> {
  head: Node<T>;
  tail: Node<T>;

  constructor(node: Node<T>) {
    this.head = node;
    this.tail = this.head;
  }

  // Time: O(1) | Space: O(1)
  addHead(value: T): void {
    const currentHead: Node<T> = this.head;

    this.head = new Node<T>(value);
    this.head.next = currentHead;
  }

  // Time: O(1) | Space: O(1)
  addTail(value: T) {
    this.tail.next = new Node<T>(value);
    this.tail = this.tail.next;
  }

  // Time: O(1) | Space: O(1)
  push(value: T): void {
    this.addTail(value);
  }

  // Time: O(n) | Space: O(1) - Where the n is length of the list
  remove(value: T) {
    const dummyList: Node<T> | null = new Node(-Infinity as T);
    dummyList.next = this.head;

    let current: Node<T> = dummyList;
    while (current?.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        break;
      }

      current = current.next;
    }

    this.head = dummyList.next;
  }

  // Time: O(n) | Space: O(n) - Where the n is length of the list
  traverse(): T[] {
    const outputArray: T[] = [];
    let current: Node<T> | null = this.head;

    while (current) {
      outputArray.push(current.value);
      current = current.next;
    }

    return outputArray;
  }
}

export { SingleList, Node };
