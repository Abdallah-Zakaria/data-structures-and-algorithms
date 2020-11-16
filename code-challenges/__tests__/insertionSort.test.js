'use strict';

const insertionSort = require('../401/insertionSort/insertionSort');

describe('Insertion Sort function ',()=>[
  it('Sort a array validate',()=>{
    const arr = [9,8,7,6,5,4,3,2,1];
    expect(insertionSort(arr)).toEqual([1,2,3,4,5,6,7,8,9]);
  })
]);
