const binarySearch = require('../401/array-binary-search/array-binary-search');
describe('', () => {
  it('binarySearch will return a index of the element inside the array', () => {
    const array = [1,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59];
    const element = 37;
    expect(binarySearch(array,element)).toEqual(11);
  });
  it('binarySearch will return a index of the element inside the array', () => {
    const array = [1,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59];
    const element = 2;
    expect(binarySearch(array,element)).toEqual(-1);
  });
});
