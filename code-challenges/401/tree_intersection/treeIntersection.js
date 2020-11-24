'use strict';

const { BinaryTree, Node } = require('../tree/tree');


function tree_intersection(tree1, tree2) {
  let arr1 = [];
  let arr2 = [];

  function _run(node, arr) {
    arr.push(node.value);
    if (node.left) { _run(node.left , arr); }
    if (node.right) { _run(node.right , arr ); }
  }
  _run(tree1.root, arr1);
  _run(tree2.root, arr2);

  const match = [];
  arr1.forEach(item => {
    arr2.forEach(item2 => {
      if (item === item2) {
        match.push(item);
      }
    });
  });
  return match;
}

const node5 = new Node(11);
const node31 = new Node(6);//
const node71 = new Node(15);
const node21 = new Node(4);//
const node41 = new Node(9);
const node61 = new Node(12);//
const node81 = new Node(19);

node71.left = node61;
node71.right = node81;
node31.left = node21;
node31.right = node41;
node5.left = node31;
node5.right = node71;


const tree1 = new BinaryTree(node5);



const node51 = new Node(10);
const node3 = new Node(6);
const node7 = new Node(14);
const node2 = new Node(4);
const node4 = new Node(8);
const node6 = new Node(12);
const node8 = new Node(16);

node7.left = node6;
node7.right = node8;
node3.left = node2;
node3.right = node4;
node51.left = node3;
node51.right = node7;
const tree2 = new BinaryTree(node51);

console.log(tree_intersection(tree1 , tree2));


module.exports = tree_intersection;

