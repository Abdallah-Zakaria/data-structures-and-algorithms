# Singly Linked List
The link list is a linear data structure and each element as represent as a object that have two property a value and a pointer that name a node.
The way of linked the node by give each node a pointer to the next one until the next property equal to null.
## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Approach & Efficiency
- LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

- a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

- a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    -"{ a } -> { b } -> { c } -> NULL"

- insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
- insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## API
- insert(value) : insert a value to your linked list.
- includes(value) : check if the value is existing on your linked list.
- toString() : return a string of you nodes value with styling.
- insertBefore(value, newVal) : insert a value to your linked list after the selected value.
- insertAfter(value, newVal) : insert a value to your linked list before the selected value.

## Solution
![whitebord](../../assets/linked-list1.jpg)
![whitebord](../../assets/linked-list2.jpg)