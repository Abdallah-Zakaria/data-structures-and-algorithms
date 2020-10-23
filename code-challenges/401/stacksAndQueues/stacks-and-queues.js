'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.top = node;
      return this;
    }
    node.next = this.top;
    this.top = node;
    return this;
  }
  pop() {
    if (this.isEmpty()) {
      return 'exception';
    }
    let deleteNode = this.top.value;
    let top = this.top.next;
    this.top = top;
    return deleteNode;
  }
  peek() {
    if (this.isEmpty()) {
      return 'exception';
    } else {
      return this.top.value;
    }
  }
  isEmpty() {
    return this.top === null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      return this;
    }
    let currentNode = this.front;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.rear = node;
    return this;
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'exception';
    }
    const deleteNode = this.front.value;
    this.front = this.front.next;
    if (this.isEmpty()) {
      this.rear = null;
    }
    return deleteNode;
  }
  peek() {
    if (this.isEmpty()) {
      return 'exception';
    }
    return this.front.value;
  }
  isEmpty() {
    return this.front === null;
  }
}
module.exports = { Stack: Stack, Queue: Queue };

