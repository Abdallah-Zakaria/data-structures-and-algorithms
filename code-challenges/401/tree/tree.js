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
    if(!this.root){
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
    if(!this.root){
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
    if(!this.root){
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
    if(!this.root){
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
}


module.exports = { BinaryTree, Node };

// const node5 = new Node(10);
// const node3 = new Node(6);
// const node7 = new Node(14);
// const node2 = new Node(4);
// // const node4 = new Node(8);
// // const node6 = new Node(12);
// const node8 = new Node(16);

// // node7.left = node6;
// node7.right = node8;
// node3.left = node2;
// // node3.right = node4;
// node5.left = node3;
// node5.right = node7;

// const tree = new BinaryTree(node5);
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

