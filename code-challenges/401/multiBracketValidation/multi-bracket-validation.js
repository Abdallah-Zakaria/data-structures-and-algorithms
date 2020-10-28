'use strict';


function multiBracketValidation(input) {
  let opening = ['(', '[', '{'];
  let closing = [')', ']', '}'];
  let filterArray = function (arr) {
    return arr.filter(item => {
      if (opening.includes(item) || closing.includes(item)) {
        return item;
      }
    });
  };
  let newInput = input.split('');
  let newArray = filterArray(newInput);
  let length = newArray.length / 2;
  let index = 0;
  if (newArray.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    index = 0;
    if (closing.includes(newArray[index]) || newArray.length === 1) {
      return false;
    }
    while (!closing.includes(newArray[index])) {
      index++;
    }
    if (opening.indexOf(newArray[index - 1]) !== closing.indexOf(newArray[index])) {
      return false;
    }
    newArray[index - 1] = '#';
    newArray[index] = '#';
    console.log(newArray);
    newArray = filterArray(newArray);
    if (newArray.length === 0) {
      break;
    }
  }
  return true;
}

module.exports = multiBracketValidation;



