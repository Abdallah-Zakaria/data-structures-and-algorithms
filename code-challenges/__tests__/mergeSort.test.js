'use strict';

const mergeSort = require('../401/mergeSort/mergeSort');

describe('Test mergeSort function', () => {
  it('Sort an array is validate', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
