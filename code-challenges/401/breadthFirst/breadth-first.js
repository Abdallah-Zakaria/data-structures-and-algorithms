const { Graph } = require('../graph/graph');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class breadthFirst extends Graph {
  constructor() {
    super();
  }
  breadthFirst(startNode) {
    const nodes = new Map();
    const breadth = new Queue();
    const arr = [];
    breadth.enqueue(startNode);
    while (breadth) {
      const front = breadth.dequeue();
      nodes.addNode(front);
      arr.push(front);
      const children = this.getNeighbors(front);
      for (let child of children) {
        const childNode = child.startNode;
        if (!arr.has(childNode)) {
          breadth.enqueue(childNode);
        }
      }
    }
    return nodes;
  }
}

module.exports = { breadthFirst };
