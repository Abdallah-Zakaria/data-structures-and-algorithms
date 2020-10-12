const insertShiftArray = require('../401/arrayShift/array-shift');

describe('arrayShift Module', ()=>{
  it('InsertShiftArray() give a valid output', ()=>{
    const array = [1,2,3,4,5,6,7,8,9,10];
    const value = 0;
    expect(insertShiftArray(array , value)).toEqual([1,2,3,4,5,0,6,7,8,9,10]);
  });
  it('insertShiftArray() give a valid output', () => {
    let array = [8,18,25,23,77];
    let value = 13;
    expect(insertShiftArray(array, value)).toEqual([8,18,25,13,23,77]);
  });
});


