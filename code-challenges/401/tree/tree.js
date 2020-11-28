'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    if (this.contains(value)) {
      return `the value ${value} is already exists`;
    }
    let currentNode = this.root;
    let loop = true;
    while (loop) {
      if (value > currentNode.value && !!currentNode.right) { currentNode = currentNode.right; }
      else if (value < currentNode.value && !!currentNode.left) { currentNode = currentNode.left; }
      else { loop = false; }
    }
    let node = new Node(value);
    if (currentNode.value < value) { currentNode.right = node; }
    else { currentNode.left = node; }
    return this;
  }
  contains(value) {
    return this.inOrder().includes(value);
  }
  preOrder() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const result = [];
    const _walk = (root) => {
      result.push(root.value);
      if (root.left) _walk(root.left);
      if (root.right) _walk(root.right);
    };
    _walk(this.root);
    return result;
  }
  inOrder() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const result = [];
    const _walk = (root) => {
      if (root.left) _walk(root.left);
      result.push(root.value);
      if (root.right) _walk(root.right);
    };
    _walk(this.root);
    return result;
  }
  postOrder() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const result = [];
    const _walk = (root) => {
      if (root.left) _walk(root.left);
      if (root.right) _walk(root.right);
      result.push(root.value);
    };
    _walk(this.root);
    return result;
  }
  findMaximumValue() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const arr = this.inOrder();
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) { maxValue = arr[i]; }
    }
    return maxValue;
  }
  breadthFirstTraversal() {
    let arrNum = [];
    let arrHeads = [];
    arrHeads.push(this.root);
    let loop = true;
    while (loop) {
      let length = arrHeads.length;
      for (let i = 0; i < length; i++) {
        if (arrHeads[i].left !== null) { arrHeads.push(arrHeads[i].left); }
        if (arrHeads[i].right !== null) { arrHeads.push(arrHeads[i].right); }
        arrNum.push(arrHeads[i].value);
      }
      arrHeads = arrHeads.slice(length);
      if (arrHeads.length === 0) {
        loop = false;
      }
    }
    return arrNum;
  }
}

module.exports = { BinaryTree, Node };

// const node5 = new Node(10);
// const node3 = new Node(6);
// const node7 = new Node(14);
// const node2 = new Node(4);
// const node4 = new Node(8);
// const node6 = new Node(12);
// const node8 = new Node(16);

// node7.left = node6;
// node7.right = node8;
// node3.left = node2;
// node3.right = node4;
// node5.left = node3;
// node5.right = node7;


// const tree = new BinaryTree(node5);

// console.log(tree.breadthFirstTraversal());

// const one = new Node(2);
// const two = new Node(7);
// const three = new Node(5);
// const four = new Node(2);
// const five = new Node(6);
// const six = new Node(9);
// const seven = new Node(5);
// const eight = new Node(11);
// const nine = new Node(4);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.right = six;
// five.left = seven;
// five.right = eight;
// six.left = nine;
// const tree = new BinaryTree(one);

// console.log(tree.breadthFirstTraversal());




// console.log(tree.findMaximumValue());

// // test test................................................
// // fill some nodes
// tree.add(8);
// tree.add(12);
// // fill a new line
// tree.add(2);
// tree.add(5);
// tree.add(7);
// tree.add(9);
// tree.add(11);
// tree.add(13);
// tree.add(15);
// tree.add(17);
// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());
// console.log(tree.contains(11));
// console.log(tree.contains(55));




// // visualization.................................
// //            10
// //      6           14
// //   4    {8}   {12}   16


// // expected [10 , 6 , 4 , 2 , 5 , 8 , 7 , 9 , 14 , 12 , 11 , 13 , 16 , 15 , 17]



// const one = new Node(5);
// const two = new Node(3);
// const three = new Node(8);
// const four = new Node(7);
// const five = new Node(15);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;

// const tree = new BinaryTree(one);



// class Node1 {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   add(value) {
//     let newNode = new Node1(value);
//     if (!this.root) {
//       this.root = newNode;
//     }
//     let loop = true;
//     function _walk(node) {
//       if (node.left && loop) { _walk(node.left); }
//       else { node.left = newNode; loop = false; }
//       if (node.right && loop) { _walk(node.right); }
//       else { node.right = newNode; loop = false; }
//     }
//     _walk(this);
//   }
// }

// class Queue {
//   constructor() {
//     this.arr = [];
//   }
//   peek() {
//     return this.arr.length !== 0;
//   }
//   enqueue(value) {
//     this.arr.push(value);
//   }
//   dequeue() {
//     let remove = this.arr[0];
//     this.arr = this.arr.slice(1, this.arr.length);
//     return remove;
//   }
// }

// function fizzBuzTree(tree) {
//   let breadth = new Queue();
//   let newtree = new Tree();
//   breadth.enqueue(tree.root);
//   while (breadth.peek()) {
//     let temp = breadth.dequeue();
//     let newValue;
//     if (temp.value % 3 === 0 && temp.value % 5 === 0) { newValue = 'FizzBuzz'; }
//     else if (temp.value % 5 === 0) { newValue = 'Buzz'; }
//     else if (temp.value % 3 === 0) { newValue = 'Fizz'; }
//     else { newValue = temp.value; }
//     newtree.add(newValue);
//     if (temp.left) { breadth.enqueue(temp.left); }
//     if (temp.right) { breadth.enqueue(temp.right); }
//   }
//   return newtree;
// }

// console.log(fizzBuzTree(tree));
