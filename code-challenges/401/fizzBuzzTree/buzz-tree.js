'use strict';

// create a node
// create a tree object
// add main node to the tree

// add function FizzBuzzTree take a tree as a argument
// add array of heads
// push the the root in it in array
// level = 0

// start the loop using with variable loop
// length for the array of heads for the index of the level
// push on  the array of heads the children
// for loop throw each item in list and check if FizzBuzzTree  // headOfArry[level][i]
// if headOfArry[level + 1].length equal  0 make loop false
// level ++

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Ktree{
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzTree(tree) {
  if(tree.value === null){
    return 'Empty tree';
  }
  let arrHeads = [];
  arrHeads.push([tree]);
  let level = 0;
  let loop = true;
  while (loop) {
    let length = arrHeads[level].length;
    for (let i = 0; i < length; i++) {
      let current = arrHeads[level];
      arrHeads.push(current[i].children);
      if (current[i].value % 3 === 0 && current[i].value % 5 === 0) {
        current[i].value = 'FizzBuzz';
      } else if (current[i].value % 3 === 0) {
        current[i].value = 'Fizz';
      } else if (current[i].value % 5 === 0) {
        current[i].value = 'Buzz';
      }
    }
    if (arrHeads[level + 1].length === 0) {
      loop = false;
    }
    level++;
  }
  return tree;
}

module.exports = {Node , Ktree ,fizzBuzzTree };

// const n1 = new Node(1);

// const n2 = new Node(2);
// const n3 = new Node(3);
// const n4 = new Node(4);


// const n11 = new Node(5);
// const n12 = new Node(6);
// const n13 = new Node(7);

// const n21 = new Node(8);
// const n22 = new Node(9);
// const n23 = new Node(10);

// const n31 = new Node(11);
// const n32 = new Node(12);
// const n33 = new Node(13);

// const n111 = new Node(15);
// const n112 = new Node(30);
// const n113 = new Node(45);

// n1.children = [n2, n3, n4];
// n11.children = [n111,n112,n113];
// n2.children = [n11, n12, n13];
// n3.children = [n21, n22, n23];
// n4.children = [n31, n32, n33];
// const ktree = new Ktree(n1);


// console.log(fizzBuzzTree(ktree.root));






