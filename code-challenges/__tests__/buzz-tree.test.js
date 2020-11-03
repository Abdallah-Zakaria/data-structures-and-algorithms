'use strict';

const { Node, Ktree, fizzBuzzTree } = require('../401/fizzBuzzTree/buzz-tree');

const n1 = new Node(1);

const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);


const n11 = new Node(5);
const n12 = new Node(6);
const n13 = new Node(7);

const n21 = new Node(8);
const n22 = new Node(9);
const n23 = new Node(10);

const n31 = new Node(11);
const n32 = new Node(12);
const n33 = new Node(13);

const n111 = new Node(15);
const n112 = new Node(30);
const n113 = new Node(45);

n1.children = [n2, n3, n4];
n11.children = [n111, n112, n113];
n2.children = [n11, n12, n13];
n3.children = [n21, n22, n23];
n4.children = [n31, n32, n33];
const ktree = new Ktree(n1);

describe('FizzBuzzTree', () => {
  it('Send a error message if the root is empty', () => {
    let x = { value: null };
    expect(fizzBuzzTree(x)).toEqual('Empty tree');
  });
  it('Not divisible by 3 or 5, simply turn the number into a String.', () => {
    expect(fizzBuzzTree(ktree.root).value).toEqual(1);
    expect(fizzBuzzTree(ktree.root).children[0].value).toEqual(2);
    expect(fizzBuzzTree(ktree.root).children[2].value).toEqual(4);
    expect(fizzBuzzTree(ktree.root).children[0].children[2].value).toEqual(7);

  });
  it('Divisible by 3, replace the value with “Fizz”', () => {
    expect(fizzBuzzTree(ktree.root).children[1].value).toEqual('Fizz');
    expect(fizzBuzzTree(ktree.root).children[0].children[1].value).toEqual('Fizz');

  });
  it('Divisible by 5, replace the value with “Buzz”', () => {
    expect(fizzBuzzTree(ktree.root).children[0].children[0].value).toEqual('Buzz');

  });
  it('Divisible by 3 and 5, replace the value with “FizzBuzz”', () => {
    expect(fizzBuzzTree(ktree.root).children[0].children[0].children[0].value).toEqual('FizzBuzz');
  });
});
