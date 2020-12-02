'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    if (this.contains(value)) {
      return `the value ${value} is already exists`;
    }
    let currentNode = this.root;
    let loop = true;
    while (loop) {
      if (value > currentNode.value && !!currentNode.right) { currentNode = currentNode.right; }
      else if (value < currentNode.value && !!currentNode.left) { currentNode = currentNode.left; }
      else { loop = false; }
    }
    let node = new Node(value);
    if (currentNode.value < value) { currentNode.right = node; }
    else { currentNode.left = node; }
    return this;
  }
  contains(value) {
    return this.inOrder().includes(value);
  }
  preOrder() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const result = [];
    const _walk = (root) => {
      result.push(root.value);
      if (root.left) _walk(root.left);
      if (root.right) _walk(root.right);
    };
    _walk(this.root);
    return result;
  }
  inOrder() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const result = [];
    const _walk = (root) => {
      if (root.left) _walk(root.left);
      result.push(root.value);
      if (root.right) _walk(root.right);
    };
    _walk(this.root);
    return result;
  }
  postOrder() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const result = [];
    const _walk = (root) => {
      if (root.left) _walk(root.left);
      if (root.right) _walk(root.right);
      result.push(root.value);
    };
    _walk(this.root);
    return result;
  }
  findMaximumValue() {
    if (!this.root) {
      return 'this tree is empty';
    }
    const arr = this.inOrder();
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) { maxValue = arr[i]; }
    }
    return maxValue;
  }
  breadthFirstTraversal() {
    let arrNum = [];
    let arrHeads = [];
    arrHeads.push(this.root);
    let loop = true;
    while (loop) {
      let length = arrHeads.length;
      for (let i = 0; i < length; i++) {
        if (arrHeads[i].left !== null) { arrHeads.push(arrHeads[i].left); }
        if (arrHeads[i].right !== null) { arrHeads.push(arrHeads[i].right); }
        arrNum.push(arrHeads[i].value);
      }
      arrHeads = arrHeads.slice(length);
      if (arrHeads.length === 0) {
        loop = false;
      }
    }
    return arrNum;
  }
}

module.exports = { BinaryTree, Node };



// function sumLeafTree(tree) {
//   let sum = 0;
//   function _walk(node) {
//     if (node.left) {
//       _walk(node.left);
//     }
//     if (node.right) {
//       _walk(node.right);
//     }
//     if (!node.left && !node.right) {
//       sum += node.value;
//     }
//   }
//   _walk(tree);
//   return sum;
// }

// console.log(sumLeafTree(tree.root));

// console.log(tree.breadthFirstTraversal());

// const one = new Node(2);
// const two = new Node(7);
// const three = new Node(5);
// const four = new Node(2);
// const five = new Node(6);
// const six = new Node(9);
// const seven = new Node(5);
// const eight = new Node(11);
// const nine = new Node(4);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.right = six;
// five.left = seven;
// five.right = eight;
// six.left = nine;
// const tree = new BinaryTree(one);

// console.log(tree.breadthFirstTraversal());




// console.log(tree.findMaximumValue());

// // test test................................................
// // fill some nodes
// tree.add(8);
// tree.add(12);
// // fill a new line
// tree.add(2);
// tree.add(5);
// tree.add(7);
// tree.add(9);
// tree.add(11);
// tree.add(13);
// tree.add(15);
// tree.add(17);
// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());
// console.log(tree.contains(11));
// console.log(tree.contains(55));




// // visualization.................................
// //            10
// //      6           14
// //   4    {8}   {12}   16


// // expected [10 , 6 , 4 , 2 , 5 , 8 , 7 , 9 , 14 , 12 , 11 , 13 , 16 , 15 , 17]



// const one = new Node(5);
// const two = new Node(3);
// const three = new Node(8);
// const four = new Node(7);
// const five = new Node(15);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;

// const tree = new BinaryTree(one);



// class Node1 {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   add(value) {
//     let newNode = new Node1(value);
//     if (!this.root) {
//       this.root = newNode;
//     }
//     let loop = true;
//     function _walk(node) {
//       if (node.left && loop) { _walk(node.left); }
//       else { node.left = newNode; loop = false; }
//       if (node.right && loop) { _walk(node.right); }
//       else { node.right = newNode; loop = false; }
//     }
//     _walk(this);
//   }
// }

// class Queue {
//   constructor() {
//     this.arr = [];
//   }
//   peek() {
//     return this.arr.length !== 0;
//   }
//   enqueue(value) {
//     this.arr.push(value);
//   }
//   dequeue() {
//     let remove = this.arr[0];
//     this.arr = this.arr.slice(1, this.arr.length);
//     return remove;
//   }
// }

// function fizzBuzTree(tree) {
//   let breadth = new Queue();
//   let newtree = new Tree();
//   breadth.enqueue(tree.root);
//   while (breadth.peek()) {
//     let temp = breadth.dequeue();
//     let newValue;
//     if (temp.value % 3 === 0 && temp.value % 5 === 0) { newValue = 'FizzBuzz'; }
//     else if (temp.value % 5 === 0) { newValue = 'Buzz'; }
//     else if (temp.value % 3 === 0) { newValue = 'Fizz'; }
//     else { newValue = temp.value; }
//     newtree.add(newValue);
//     if (temp.left) { breadth.enqueue(temp.left); }
//     if (temp.right) { breadth.enqueue(temp.right); }
//   }
//   return newtree;
// }

// console.log(fizzBuzTree(tree));


// class Queue {
//   constructor() {
//     this.arr = [];
//   }
//   peek() {
//     return this.arr.length !== 0;
//   }
//   enqueue(value) {
//     this.arr.push(value);
//   }
//   dequeue() {
//     let remove = this.arr[0];
//     this.arr = this.arr.slice(1, this.arr.length);
//     return remove;
//   }
// }
// function symmetricTree(tree) {
//   let tree1 = tree.root.left;
//   let tree2 = tree.root.right;
//   function breadthFunction(node) {
//     let arr = [];
//     let breadth = new Queue();
//     breadth.enqueue(node);
//     while (breadth.peek()) {
//       let temp = breadth.dequeue();
//       arr.push(temp.value);
//       if (temp.left) {
//         breadth.enqueue(temp.left);
//       }
//       else {
//         arr.push('null');
//       }
//       if (temp.right) {
//         breadth.enqueue(temp.right);
//       }
//       else {
//         arr.push('null');
//       }
//     }
//     return arr;
//   };
//   const arr1 = breadthFunction(tree1);
//   const arr2 = breadthFunction(tree2);
//   const length = arr1.length > arr2.length ? arr1.length : arr2.length;
//   let answer = true;
//   for (let i = 0; i < length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       answer = false;
//       break;
//     }
//   }
//   return answer;
// }





/*
     10
   6     14
4    8  12  16
*/
// const node51 = new Node(10);
// const node31 = new Node(6);
// const node71 = new Node(14);
// const node21 = new Node(4);
// const node41 = new Node(18);
// const node61 = new Node(12);
// const node81 = new Node(16);

// node71.left = node61;
// node71.right = node81;
// node31.left = node21;
// node31.right = node41;
// node51.left = node31;
// node51.right = node71;

// const nodebass = new Node(10);
// nodebass.left = node51;
// nodebass.right = node5;

// const tree = new BinaryTree(node5);





// function maxDepth(tree) {
//   let maxValue = 0;
//   const _walk = (node, max) => {
//     if (max > maxValue) {
//       maxValue = max;
//     }
//     if (node.left) {
//       _walk(node.left, max + 1);
//     }
//     if (node.right) {
//       _walk(node.right, max + 1);
//     }
//   };
//   _walk(tree.root, maxValue);
//   return maxValue;
// }

// function pathSum(tree, target) {
//   let answer = false;
//   let answerPath = [];
//   const _walk = (node, sum, path) => {
//     // if (answer) {
//     //   return;
//     // }
//     sum += node.value;
//     if (sum === target && !node.left && !node.right) {
//       answer = true;
//       answerPath.push(path);
//     }
//     if (node.left) {
//       _walk(node.left, sum, [...path, 'left']);
//     }
//     if (node.right) {
//       _walk(node.right, sum, [...path, 'right']);
//     }
//   };
//   _walk(tree.root, 0, ['root']);
//   return { answer, answerPath };
// }

// console.log(pathSum(tree, 15));


//      5
//   3     8
// 7   15



// function mergrTrees(t1, t2) {
//   const tree = new BinaryTree();
//   const _walk = (node1, node2) => {
//     if (!node1 && !node2) return null;
//     let newNode = new Node(node1 ? node1.value : 0 + node2 ? node2.value : 0);
//     newNode.left = _walk(node1 ? node1.left : null, node2 ? node2.left : null);
//     newNode.right = _walk(node1 ? node1.right : null, node2 ? node2.right : null);
//     return newNode;
//   };
//   tree.root = _walk(t1.root, t2.root);
// }



// const one = new Node(5);
// const two = new Node(10);
// // const three = new Node(1);
// const four = new Node(15);
// const five = new Node(7);

// one.left = two;
// one.right = three;
// two.left = four;
// three.right = five;
/*
          5
      10     3
   15            7
*/



// const tree1 = new BinaryTree(one);

// const one1 = new Node(25);
// const two1 = new Node(3);
// const three1 = new Node(10);
// const four1 = new Node(7);
// const five1 = new Node(15);

// one1.left = two1;
// one1.right = three1;
// two1.left = four1;
// three1.right = five1;
/*
          5
      3     10
   7            15
*/


// const tree2 = new BinaryTree(one1);

// const base = new Node(0);

// base.left = one;
// base.right = one1;

// const tree = new BinaryTree(base);


// function sameTree(tree1, tree2) {
//   let answer = false;
//   const _walk = (node1, node2) => {
//     if (!node1 && !node2 || answer) return;
//     if (!node1 || !node2) {
//       answer = true;
//       return;
//     }
//     if (node1.value !== node2.value) {
//       answer = true;
//       return;
//     }
//     _walk(node1.left, node2.right);
//     _walk(node1.right, node2.left);
//   };
//   _walk(tree1.root, tree2.root);
//   return !answer;
// }




// function symatricTree(tree) {
//   let answer = true;
//   const _walk=(node1,node2)=>{
//     if(!node1 && !node2 || !answer){
//       return;
//     }
//     if(!node1 || !node2){
//       answer = false;
//       return;
//     }
//     if(node1.value !== node2.value){
//       answer = false;
//       return;
//     }
//     _walk(node1.left , node2.right);
//     _walk(node1.right , node2.left);
//   };
//   _walk(tree.root.left , tree.root.right);
//   return answer;
// }


// function beforeMax(tree) {
//   let max = tree.root.value;
//   let beforeMax = tree.root.left ? tree.root.left.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value > max) {
//       beforeMax = max;
//       max = node.value;
//     }
//     if ((node.value > beforeMax) && (node.value < max)) {
//       beforeMax = node.value;
//     }
//     if (node.right) _walk(node.right);
//     if (node.left) _walk(node.left);
//   };
//   _walk(tree.root);
//   return beforeMax;
// }



// function beforeMax(tree) {
//   let max = tree.root.value;
//   let beforeMax = tree.root.left ? tree.root.left.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value > max) {
//       beforeMax = max;
//       max = node.value;
//     }
//     if (node.value < max && node.value > beforeMax) {
//       beforeMax = node.value;
//     }
//     if (node.left) { _walk(node.left); }
//     if (node.right) { _walk(node.right); }
//   }
//   _walk(tree.root);
//   return beforeMax;
// }

// function beforeMax(tree) {
//   let max = tree.root.value;
//   let beforeMax = tree.root.left ? tree.root.left.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value > max) {
//       beforeMax = max;
//       max = node.value;
//     }
//     if (node.value < max && node.value > beforeMax) {
//       beforeMax = node.value;
//     }
//     if (node.left) {
//       _walk(node.left);
//     }
//     if (node.right) {
//       _walk(node.right);
//     }
//   }
//   _walk(tree.root);
//   return beforeMax;
// }

// const node51 = new Node(10);
// const node31 = new Node(6);
// const node71 = new Node(14);
// const node21 = new Node(4);
// const node41 = new Node(18);
// const node61 = new Node(12);
// const node81 = new Node(16);

// const node2 = new Node(4);
// const node4 = new Node(18);
// const node6 = new Node(12);

// node71.left = node61;
// node71.right = node81;
// node31.left = node21;
// node31.right = node41;
// node51.left = node31;
// node51.right = node71;


// node61.right = node2;

// node81.right = node4;
// node4.right = node6;

// const tree = new BinaryTree(node51);




// var isBalanced = function (root) {
//   return helper(root, 0) >= 0;
// };

// var helper = function (root, depth) {
//   if (!root) return depth;
//   var left = helper(root.left, depth + 1);
//   var right = helper(root.right, depth + 1);
//   if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
//   return Math.max(left, right);
// };


// console.log(isBalanced(tree.root));
// function minDepth(tree) {
//   let minValue;
//   const _walk = (node, depth) => {
//     depth = depth + 1;
//     if (node.left) { _walk(node.left, depth); }
//     if (node.right) { _walk(node.right, depth); }
//     if ((!node.left && !node.right) && (!minValue || depth < minValue)) {
//       minValue = depth;
//     }
//   };
//   if (!tree.root) {
//     return 0;
//   }
//   _walk(tree.root, 0);
//   return minValue;
// }


// function levelOrder(tree) {
//   let levelArray = {};
//   const _walk = (node, depth) => {
//     depth++;
//     if (!levelArray[depth]) {
//       levelArray[depth] = [];
//     }
//     levelArray[depth].push(node.value);
//     if (node.left) {
//       _walk(node.left, depth);
//     }
//     if (node.right) {
//       _walk(node.right, depth);
//     }
//   };
//   _walk(tree.root, 0);
//   return Object.values(levelArray);
// }

// function levelOrder(tree) {
//   const levelObj = {};
//   const _walk = (node, depth) => {
//     depth++;
//     if (!levelObj[depth]) {
//       levelObj[depth] = [];
//     }
//     levelObj[depth].push(node.value);
//     if (node.left) {
//       _walk(node.left, depth);
//     }
//     if (node.right) {
//       _walk(node.right, depth);
//     }
//   };
//   _walk(tree.root, 0);
//   return Object.values(levelObj);
// }



// console.log(levelOrder(tree));



// function invertTree(tree) {
//   const newTree = new BinaryTree();
//   const _walk = (node) => {
//     let newNode = new Node(node.value);
//     if (node.left) {
//       newNode.right = _walk(node.left);
//     }
//     if (node.right) {
//       newNode.left = _walk(node.right);
//     }
//     return newNode;
//   };
//   newTree.root = _walk(tree.root);
//   return newTree;
// }



// console.log(invertTree(tree));








// function sortedArrayToBST(arr) {
//   const newTree = new BinaryTree();
//   const _walk = function (arr, start, end) {
//     if (start > end) return null;
//     var mid = Math.ceil((start + end) / 2);
//     var node = new Node(arr[mid]);
//     node.left = _walk(arr, start, mid - 1);
//     node.right = _walk(arr, mid + 1, end);
//     return node;
//   };
//   newTree.root = _walk(arr, 0, arr.length - 1);
// }




// function ivert(tree) {
//   const newTree = new BinaryTree();
//   const _walk = (node) => {
//     let newNode = new Node(node.value);
//     if (node.left) {
//       newNode.right = _walk(node.left);
//     }
//     if (node.right) {
//       newNode.left = _walk(node.right);
//     }
//     return newNode;
//   };
//   newTree.root = _walk(tree.root);
//   return newTree;
// }


// function invertTree(tree) {
//   const newTree = new BinaryTree();
//   const _walk = (node) => {
//     let newNode = new Node(node.value);
//     if (node.left) {
//       newNode.right = _walk(node.left);
//     }
//     if (node.right) {
//       newNode.left = _walk(node.right);
//     }
//     return newNode;
//   };
//   newTree.root = _walk(tree.root);
//   return newTree;
// }

// const n1 = new Node(2);
// const n1left = new Node(8);
// const n1right = new Node(1);
// const n1rightleft = new Node(4);
// const n1rightleftleft = new Node(5);


// n1.left = n1left;
// n1.right = n1right;
// n1right.left = n1rightleft;
// n1rightleft.left = n1rightleftleft;
// n1left.right = n1rightleftleft;

// const tree = new BinaryTree(n1);

// function balanced(tree) {
//   let maxDepth;
//   let minDepth;
//   const _walk = (node, depth) => {
//     depth++;
//     if (!node.left && !node.right) {
//       if (!maxDepth || depth > maxDepth) { maxDepth = depth; }
//       if (!minDepth || depth < minDepth) { minDepth = depth; }
//     }
//     if (node.left) {
//       _walk(node.left, depth);
//     }
//     if (node.right) {
//       _walk(node.right, depth);
//     }
//   };
//   _walk(tree.root, 0);
//   return maxDepth - minDepth <= 1;
// }

// console.log(balanced(tree));

// function afterMin(tree) {
//   const min = tree.root.value;
//   const afterMin = tree.root.right ? tree.root.right.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value < min) {
//       afterMin = min;
//       min = node.value;
//     }
//     if (node.value > min && node.value < afterMin) {
//       afterMin = node.value;
//     }
//     if (node.left) { _walk(node.left); }
//     if (node.right) { _walk(node.right); }
//   }

// }



// function beforeMin(tree) {
//   let min = tree.root.value;
//   let beforeMin = tree.root.right ? tree.root.right.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value < min) {
//       beforeMin = min;
//       min = node.value;
//     }
//     if (node.value > min && node.value < beforeMin) {
//       beforeMin = node.value;
//     }
//     if (node.left) {
//       _walk(node.left);
//     }
//     if (node.right) {
//       _walk(node.right);
//     }
//   };
//   _walk(tree.root);
//   return beforeMin;
// }
// console.log(beforeMin(tree));





// function pathes (tree , target){
//   const arr = [];
//   const _walk = (node ,sum ,path)=>{
//     sum += node.value;
//     if(node.left){
//       _walk(node.left , sum , [...path , 'left']);
//     }
//     if(node.right){
//       _walk(node.right , sum , [...path , 'right']);
//     }
//     if(!node.left && !node.right && sum === target){
//       arr.push(path);
//     }
//   };
//   _walk(tree.root , 0 , []);
//   return arr;
// }



// function sameTree(tree1 , tree2){
//   let answer = true;
//   const _walk = (node1 ,node2)=>{
//     if(!node1 && !node2){return;}
//     if(!node1 || !node2){answer = false; return;}
//     if(node1.value !== node2.value){answer =false; return;}
//     _walk(node1.left , node2.left);
//     _walk(node1.right , node2.right);
//   };
//   _walk(tree1.root , tree2.root);
//   return answer;
// }



// function panad(tree) {
//   let answer = true;
//   const _walk = (node1, node2) => {
//     if (!node1 && !node2 || !answer) return;
//     if (!node1 || !node2) {
//       answer = false;
//       return;
//     }
//     if (node1.value !== node2.value) {
//       answer = false;
//       return;
//     }
//     _walk(node1.left, node2.right);
//     _walk(node1.right, node2.left);
//   };
//   _walk(tree.root.left, tree.root.right);
//   return answer;
// }

// function balanced(tree) {
//   let maxDepth;
//   let minDepth;
//   const _walk = (node, depth)=>{
//     depth++;
//     if(node.left){
//       _walk(node.left , depth);
//     }
//     if(node.right){
//       _walk(node.right , depth);
//     }
//     if(!node.left , !node.right){
//       if(depth > maxDepth || !maxDepth)maxDepth = depth;
//       if(depth<minDepth || !minDepth) minDepth = depth;
//     }
//   };
//   if (!tree.root) return 0;
//   _walk(tree.root, 0);
//   return maxDepth - minDepth <= 1;
// }
// function balancedTree(tree){
//   let maxDepth;
//   let minDepth;
//   const _walk = (node,depth)=>{
//     depth ++;

//     if(!node.left && !node.right){
//       if(!maxDepth || depth > maxDepth){ maxDepth= depth;}
//       if(!minDepth || depth < minDepth){minDepth = depth;}
//     }
//     if(node.left){_walk(node.left, depth);}
//     if(node.right){_walk(node.right , depth);}
//   }
//   _walk(tree.root , 0);
//   return maxDepth - minDepth <=1;
// }


// function levelsArray(tree) {
//   const obj = {};
//   const _walk = (node, depth) => {
//     depth++;
//     if (!obj[depth]) {
//       obj[depth] = [];
//     }
//     obj[depth].push(node.value);
//     if (node.left) {
//       _walk(node.left, depth);
//     }
//     if (node.right) {
//       _walk(node.right, depth);
//     }
//   };
//   _walk(tree.root , 0);
//   return Object.values(obj);
// }

// function levelOrder(tree){
//   const levelObj = {};
//   const _walk = (node , depth)=>{
//     depth ++;
//     if(!levelObj[depth]){
//       levelObj[depth] = [];
//     }
//     levelObj[depth].push(node.value);
//     if(node.left){
//       _walk(node.left , depth);
//     }
//     if(node.right){
//       _walk(node.right , depth);
//     }
//   };
//   _walk(tree.root , 0);
//   return Object.values(levelObj );
// }

// function merge(tree1, tree2) {
//   const newTree = new BinaryTree();
//   const _walk = (node1, node2) => {
//     if(!node1 , !node2)return null;
//     const newNode = new Node(node1 ? node1.value : 0 + node2 ? node2.value : 0);
//     newNode.left = _walk(node1 ? node1.left : null, node2 ? node2.left : null);
//     newNode.right = _walk(node1 ? node1.right : null ,node2 ? node2.right : null);
//     return newNode;
//   };
//   newTree.root = _walk(tree1.root , tree2.root);
//   return newTree;
// }

// function mergrTrees(t1,t2){
//   const tree = new Tree();
//   const _walk= (node1 , node2)=>{
//     if(!node1 && !node2) return null;
//     let newNode = new Node(node1 ? node1.value :0 + node2 ? node2.value: 0);
//     newNode.left = _walk(node1 ? node1.left : null , node2 ? node2.left : null);
//     newNode.right = _walk(node1 ? node.right : null , node2 ? node.right : null);
//     return newNode;
//   }
//  tree.root = _walk(t1.root , t2.root);
// }

// function invert(tree){
//   const newTree = new BinaryTree();
//   const _walk =(node)=>{
//     let newNode = new Node(node.value);
//     if(node.left){
//       newNode.right = _walk(node.left);
//     }
//     if(node.right){
//       newNode.left = _walk(node.right);
//     }
//     return newNode;
//   };
//   newTree.root = _walk(tree.root);
//   return newTree;
// }

// function invertTree(tree){
//   const newTree = new Tree();
//   const _walk = (node)=>{
//     let newNode = new Node(node.value);
//     if(node.left){
//       newNode.right = _walk(node.left);
//     }
//     if(node.right){
//       newNode.left = _walk(node.right);
//     }
//     return newNode
//   }
//   newTree.root = _walk(tree.root);
//   return newTree;
// }


// function beforeMax(tree) {
//   let max = tree.root.value;
//   let beforeMax = tree.root.left ? tree.root.left.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value > max) {
//       beforeMax = max;
//       max = node.value;
//     }
//     if (node.value > beforeMax && node.value < max) {
//       beforeMax = node.value;
//     }
//     if (node.left) {
//       _walk(node.left);
//     }
//     if (node.right) {
//       _walk(node.right);
//     }
//   };
//   _walk(tree.root);
//   return beforeMax;
// }

// function beforeMax(tree) {
//   let max = tree.root.value;
//   let beforeMax = tree.root.left ? tree.root.left.value : tree.root.value;
//   const _walk = (node) => {
//     if (node.value > max) {
//       beforeMax = max;
//       max = node.value;
//     }
//     if (node.value < max && node.value > beforeMax) {
//       beforeMax = node.value;
//     }
//     if (node.left) {
//       _walk(node.left);
//     }
//     if (node.right) {
//       _walk(node.right);
//     }
//   }
//   _walk(tree.root);
//   return beforeMax;
// }
