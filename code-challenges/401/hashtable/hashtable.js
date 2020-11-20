'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
    return this;
  }
  find(key){
    let currentNode = this.head;
    while(currentNode){
      if(Object.keys(currentNode.value)[0] === key ){
        return currentNode.value[key];
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, item) => {
      return acc + item.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.storage[index]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[index] = ll;
    } else {
      this.storage[index].prepend({[key]: value});
    }
  }
  contains(key){
    if(this.storage[this.hash(key)] !== undefined){
      return !!this.storage[this.hash(key)].find(key) ;
    }else{
      return false;
    }
  }
  get(key){
    if(this.contains(key)){
      return this.storage[this.hash(key)].find(key);
    }else{
      return `The ${key} key not exists`;
    }
  }
}

// let hashMap = new HashMap(400);
// hashMap.set('abc', 'valueABC');
// hashMap.set('cba' , 'valueCBA');
// hashMap.set('acb' , 'valueACB');
// hashMap.set('bca' , 'valueBCA');
// // hashMap.set('bac' , 'valueBAC');

// hashMap.set('xx' , 'valueXX');
// hashMap.set('www' , 'valueWWW');

// console.log(hashMap.storage);
// console.log(hashMap.contains('cba'));
// console.log(hashMap.get('cba'));

module.exports = HashMap;
