'use strict';

const quickSort  = require('../401/quickSort/quickSort');

describe('Test quickSort function', () => {
  it('Sort an array is validate', () => {
    expect(quickSort([3,1,5,7,2], 0,4)).toEqual([ 1, 2, 3, 5, 7 ]);
  });
});
