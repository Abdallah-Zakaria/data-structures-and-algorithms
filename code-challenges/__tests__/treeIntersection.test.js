'use strict';

const treeIntersection = require('../401/tree_intersection/treeIntersection');
const { BinaryTree, Node } = require('../401/tree/tree');

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
const node11 = new Node(11);
const node22 = new Node(2);
const node33 = new Node(33);
const node44 = new Node(4);
node11.left = node22;
node11.right = node33;
node22.left = node44;

const treeA = new BinaryTree(node1);
const treeB = new BinaryTree(node11);

describe('Tree Intersection', () => {
  it('Test treeIntersection ', () => {
    expect(treeIntersection(treeA,treeB)).toEqual([2,4]);
  });
});
