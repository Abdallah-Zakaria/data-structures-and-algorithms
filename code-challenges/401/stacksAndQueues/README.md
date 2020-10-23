# Stacks and Queues
A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous. A queue is a linear data structure. Unlike a stack, a queue deletes only the oldest added data.

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
- Should raise exception when called on empty stack
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
- Should raise exception when called on empty queue
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
- Should raise exception when called on empty queue
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
- **Stack**
  - Create a class that have property name top have value of null.
  - Defiend a method name it a push that take a value as an argument which assign the new node as a top and the next property of the node will be the previous top.
  - Defiend a method name it a pop that delete the top of the stack and reassign for the top.next node and return the previous top value that have been delete.
  - Defiend a method name it a peek that return the the value of the top property in this stack.
  - Defiend a method name it a isEmpty that return a boolean value if this stack is empty from the node or not.

- **Queue**  
  - Create a class that have two property a front and rear ro null.
  - Defiend a method name it a enqueue that take a value as an argument to add it on the rear of thiis queue.
   Defiend a method name it a dequeue that remove the recently front node and re assign the next of it as a front node.
  - Defiend a method name it a peek that return the the value of the front property in this queue.
  - Defiend a method name it a isEmpty that return a boolean value if this stack is queue from the node or not.
- **Big O**
Time: O(1)
Space: O(1) for push and enqueue.  

## API
- **Stack**
push(value): Pushing a Node yo the stack
pop(): Popping a Node off a stack that located on the top.
peek(): When conducting a peek, you will only be inspecting the top Node of the stack.
isEmpty(): Return boolen if the stack is empty or not.
- **Queue**  
enqueue(value): Adding an item to a queue.
dequeue(): Remove an item from a queue .
peek(): When conducting a peek, you will only be inspecting the front Node of the queue.
isEmpty(): Return boolen if the queue is empty or not.