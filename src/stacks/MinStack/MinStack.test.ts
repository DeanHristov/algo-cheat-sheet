import MinStack from './MinStack';

describe('Stack -> 155. Min Stack', () => {
  test(`Should pass with actions: ["MinStack","push","push","push","getMin","pop","top","getMin"]`, () => {
    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    const firstMinValue = minStack.getMin();

    minStack.pop();

    const firstPeek = minStack.top();
    const secondMinValue = minStack.getMin();

    expect(firstMinValue).toEqual(-3);
    expect(firstPeek).toEqual(0);
    expect(secondMinValue).toEqual(-2);
  });
});
