'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }


  addNode(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Vertex not found');
    } else {

      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }

  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log('vertex does not exist');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  getNodes() {
    let arr = [];
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      arr.push(vertex,edge);
    }
  }
}


const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addNode(two);
graph.addNode(three);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);
graph.addNode(ten);

graph.addEdge(two, seven);
graph.addEdge(three, eight);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(ten, two);
graph.addEdge(ten, eight);
graph.addEdge(eight, seven);

graph.getNodes();
