'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length += 1;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.pointer) {
      currentNode = currentNode.pointer;
    }
    currentNode.pointer = node;
    this.length += 1;
    return this;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length += 1;
      return this;
    }
    node.pointer = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }
  includes(value) {
    let currentNode = this.head;
    if (!this.head) {
      return false;
    }
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.pointer;
    }
    return false;
  }
  toString() {
    let str = '';
    if (!this.head) {
      str = str + 'NULL';
      return str;
    }
    let currentNode = this.head;
    while (currentNode.pointer) {
      str += `{ ${currentNode.value} } ->`;
      currentNode = currentNode.pointer;
    }
    str += `{ ${currentNode.value} } -> NULL`;
    return str;
  }
  insertBefore(target, value) {
    let node = new Node(value);
    if (!this.includes(target) || !target || (!value && value !== 0)) {
      return 'Exception';
    }
    if (this.head.value === target) {
      node.pointer = this.head;
      this.head = node;
      this.length += 1;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.pointer) {
      if (currentNode.pointer.value === target) {
        node.pointer = currentNode.pointer;
        currentNode.pointer = node;
        this.length += 1;
        return this;
      }
      currentNode = currentNode.pointer;
    }
  }
  insertAfter(target, value) {
    let node = new Node(value);
    if (!this.includes(target) || !target || (!value && value !== 0)) {
      return 'Exception';
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        node.pointer = currentNode.pointer;
        currentNode.pointer = node;
        this.length += 1;
        return this;
      }
      currentNode = currentNode.pointer;
    }
  }
  kthFromEnd(k) {
    const index = this.length - (k + 1);
    if ((!index || !k) && index !== 0 && k !== 0) {
      return 'Exception';
    }
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) {
        return currentNode.value;
      }
      counter++;
      currentNode = currentNode.pointer;
    }
    return 'Exception';
  }
}
module.exports = LinkedList;



