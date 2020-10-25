'use strict';

const PseudoQueue = require('../401/queueWithStacks/queue-with-stacks');

describe('Queue-with-stacks test', () => {
  it('Inserts value into the PseudoQueue, using a first-in, first-out approach', ()=>{
    let queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    // add new value
    queue.enqueue(5);
    let top = queue.storage.top;
    expect(top.value).toEqual(5);
    expect(top.next.value).toEqual(10);
    expect(top.next.next.value).toEqual(15);
    expect(top.next.next.next.value).toEqual(20);
  });
  it('Extracts a value from the PseudoQueue, using a first-in, first-out approach.', ()=>{
    let queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    expect(queue.dequeue().storage.top.next.next.next).toEqual(null);
  });
});

