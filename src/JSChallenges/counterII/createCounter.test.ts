import { Counter, createCounter } from "./createCounter";

describe("30 Days of JavaScript -> 2665. Counter II", () => {
  it("Should be able to count properly", () => {
    const counter: Counter = createCounter(5);

    expect(counter.increment()).toEqual(6);
    expect(counter.reset()).toEqual(5);
    expect(counter.decrement()).toEqual(4);
  });

  it("Should be able to count properly II", () => {
    const counter: Counter = createCounter(0);

    expect(counter.increment()).toEqual(1);
    expect(counter.increment()).toEqual(2);
    expect(counter.decrement()).toEqual(1);

    expect(counter.reset()).toEqual(0);
    expect(counter.reset()).toEqual(0);
  });
});
