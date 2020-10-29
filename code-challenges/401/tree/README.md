# Binary Tree 

 Tree is a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

 ## Create a BinaryTree class
1. Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

1. Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

1. Create a BinarySearchTree class
Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
  - add(value) will take a value and add it in the right place in the tree depend on it's value
  - contains method which take a value and  will check if the argument value is exists in the tree.
  - preOrder method its a depth first traversal return a array of value in the tree sorted as root >> left >> right
  - inOrder method its a depth first traversal return a array of value in the tree sorted as left >> root >> right
  - inOrder method its a depth first traversal return a array of value in the tree sorted as left >> right >> root

## API
  * add(value)
  * contains(value)
  * preOrder()
  * inOrder()
  * inOrder()