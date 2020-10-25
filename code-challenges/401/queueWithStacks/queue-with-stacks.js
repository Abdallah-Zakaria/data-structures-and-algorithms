'use strict';

const {Stack} = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.storage = new Stack();
  }
  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    let currentNode = this.storage.top;
    this.storage = new Stack();
    let arr = [];
    while (currentNode.next) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    let arrLength = arr.length;
    while (arrLength) {
      arrLength--;
      this.storage.push(arr[arrLength]);
    }
    return this;
  }
}

module.exports = PseudoQueue;
