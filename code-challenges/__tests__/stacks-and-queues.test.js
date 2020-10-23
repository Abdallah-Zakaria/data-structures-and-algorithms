'use strict';

const { Stack, Queue } = require('../401/stacksAndQueues/stacks-and-queues');

describe('Stack and a Queue Implementation', () => {
  describe('Stack method validate', () => {
    it('Successfully push onto a stack', () => {
      const stack = new Stack();
      expect(stack.push(1).top.value).toEqual(1);
    });
    it('Successfully push multiple values onto a stack', () => {
      const stack = new Stack();
      expect(stack.push(1).top.value).toEqual(1);
      expect(stack.push(2).top.value).toEqual(2);
      expect(stack.top.next.value).toEqual(1);
      expect(stack.push(3).top.value).toEqual(3);
      expect(stack.top.next.value).toEqual(2);
      expect(stack.top.next.next.value).toEqual(1);
    });
    it('Successfully pop off the stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });
    it('Successfully empty a stack after multiple pops', () => {
      const stack = new Stack();
      stack.push(1);
      stack.pop();
      expect(stack.isEmpty()).toBeTruthy();
    });
    it('Successfully instantiate an empty stack', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });
    it('Successfully pop or peek on empty stack raises exception', () => {
      const stack = new Stack();
      expect(stack.pop()).toEqual('exception');
      expect(stack.peek()).toEqual('exception');
    });
  });
  describe('Queue method validate', () => {
    it('Successfully enqueue into a queu', () => {
      const queue = new Queue();
      expect(queue.enqueue(1).front.value).toEqual(1);
      expect(queue.enqueue(1).rear.value).toEqual(1);
    });
    it('Successfully enqueue into a queu', () => {
      const queue = new Queue();
      expect(queue.enqueue(1).front.value).toEqual(1);
      expect(queue.enqueue(1).rear.value).toEqual(1);
    });
    it('Successfully enqueue multiple values into a queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.front.value).toEqual(1);
      expect(queue.front.next.value).toEqual(2);
      expect(queue.rear.value).toEqual(2);
      expect(queue.front.value).toEqual(1);
    });
    it('Successfully dequeue out of a queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual('exception');
    });
    it('Successfully peek into a queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
      queue.dequeue();
      expect(queue.peek()).toEqual(2);
    });
    it('Successfully empty a queue after multiple dequeues', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      queue.dequeue();
      expect(queue.dequeue()).toEqual('exception');
    });
    it('Successfully instantiate an empty queue', () => {
      const queue = new Queue();
      expect(queue.front).toEqual(null);
      expect(queue.rear).toEqual(null);
    });
    it('Calling dequeue or peek on empty queue raises exception', () => {
      const queue = new Queue();
      expect(queue.dequeue()).toEqual('exception');
      expect(queue.peek()).toEqual('exception');
    });
  });
});


