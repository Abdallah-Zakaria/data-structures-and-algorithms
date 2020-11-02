'use strict';

const { BinaryTree, Node } = require('../401/tree/tree');

describe('', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const node = new Node(5);
    const tree = new BinaryTree(node);
    expect(tree.preOrder()).toEqual([5]);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const node5 = new Node(10);
    const node3 = new Node(6);
    const node7 = new Node(14);
    node5.left = node3;
    node5.right = node7;
    const tree = new BinaryTree(node5);
    expect(tree.preOrder()).toEqual([10, 6, 14]);
  });
  it('Can successfully return a collection from a pre order traversal', () => {
    const tree = new BinaryTree();
    tree.add(10);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(8);
    tree.add(12);
    tree.add(16);
    tree.add(2);
    tree.add(5);
    tree.add(7);
    tree.add(9);
    tree.add(11);
    tree.add(13);
    tree.add(15);
    tree.add(17);
    expect(tree.preOrder()).toEqual([10, 6, 4, 2, 5, 8, 7, 9, 14, 12, 11, 13, 16, 15, 17]);
  });
  it('Can successfully return a collection from an in order traversal', () => {
    const tree = new BinaryTree();
    tree.add(10);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(8);
    tree.add(12);
    tree.add(16);
    tree.add(2);
    tree.add(5);
    tree.add(7);
    tree.add(9);
    tree.add(11);
    tree.add(13);
    tree.add(15);
    tree.add(17);
    expect(tree.inOrder()).toEqual([2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });
  it('Can successfully return a collection from a post order traversal', () => {
    const tree = new BinaryTree();
    tree.add(10);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(8);
    tree.add(12);
    tree.add(16);
    tree.add(2);
    tree.add(5);
    tree.add(7);
    tree.add(9);
    tree.add(11);
    tree.add(13);
    tree.add(15);
    tree.add(17);
    expect(tree.postOrder()).toEqual([2, 5, 4, 7, 9, 8, 6, 11, 13, 12, 15, 17, 16, 14, 10]);
  });
  it('Can successfully return the maximum value in the tree', () => {
    const tree = new BinaryTree();
    tree.add(50).add(40).add(30).add(60).add(20);
    expect(tree.findMaximumValue()).toEqual(60);
  });
  it('Can successfully return the maximum value in the tree node value is negative  ', () => {
    const tree = new BinaryTree();
    tree.add(-50).add(-40).add(-30).add(-60).add(-20);
    expect(tree.findMaximumValue()).toEqual(-20);
  });
  it('Can successfully return an error if the tree is empty when invoke the findMaximumValue method', () => {
    const tree = new BinaryTree();
    expect(tree.findMaximumValue()).toEqual('this tree is empty');
  });
  it('Can successfully return breadth first traversal', () => {
    const one = new Node(2);
    const two = new Node(7);
    const three = new Node(5);
    const four = new Node(2);
    const five = new Node(6);
    const six = new Node(9);
    const seven = new Node(5);
    const eight = new Node(11);
    const nine = new Node(4);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.right = six;
    five.left = seven;
    five.right = eight;
    six.left = nine;
    const tree = new BinaryTree(one);
    expect(tree.breadthFirstTraversal()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});



