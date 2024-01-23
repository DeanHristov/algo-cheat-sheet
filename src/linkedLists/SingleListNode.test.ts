import { Node, SingleList } from './SingleListNode';

describe('Linked lists -> Design Single linked list', () => {
  let myList: SingleList<number> = new SingleList<number>(new Node<number>(0));

  afterEach(() => {
    myList = new SingleList<number>(new Node<number>(0));
  });

  it('Should be able to refer to the same item - initial state', () => {
    expect(myList.head.value).toEqual(myList.tail.value);
  });

  it('Should be able to add items to the list', () => {
    myList.push(1);
    myList.push(2);
    myList.push(3);

    expect(myList.traverse()).toEqual([0, 1, 2, 3]);
  });

  it('Should be able to remove an item from the head', () => {
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.remove(0);

    expect(myList.traverse()).toEqual([1, 2, 3]);
  });

  it('Should be able to remove an item from the middle of to the list', () => {
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.remove(2);

    expect(myList.traverse()).toEqual([0, 1, 3]);
  });

  it('Should be able to remove an item from the end of to the list', () => {
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.remove(3);

    expect(myList.traverse()).toEqual([0, 1, 2]);
  });

  it('Should be able to change/update the head', () => {
    myList.addHead(1);

    expect(myList.head.value).not.toEqual(myList.tail.value);
    expect(myList.head.value).toEqual(1);
  });

  it('Should be able to change/update the tail', () => {
    myList.addTail(2);

    expect(myList.head.value).not.toEqual(myList.tail.value);
    expect(myList.tail.value).toEqual(2);
  });
});
