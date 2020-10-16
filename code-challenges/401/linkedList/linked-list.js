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
  }
  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.pointer) {
      currentNode = currentNode.pointer;
    }
    currentNode.pointer = node;
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
}
module.exports = LinkedList;
