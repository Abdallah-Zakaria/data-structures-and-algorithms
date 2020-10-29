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
});



