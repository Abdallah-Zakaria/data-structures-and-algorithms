'use strict';

// let x = [3,1,2]
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = insertionSort;


// write a function name it a sorting take an array as an argument.
// declare a variable name it a searchLength to equal a length of the arr
// declare location to equal a zero
// create a loop to get the smallest number in the arr and its index.
// declare a replace variable by the value of the arr index of location;
// locate the smallest number in the index of the location
// locate the replace value to the index of the smallest number.
// increase location variable by one
// decresse the searchLength by one.

// function sorting(arr){
//   let targetLocation = 0;
//   while(targetLocation !== (arr.length -1)){
//     let smallestIndex = targetLocation;
//     let smallest = arr[smallestIndex];
//     for(let i =targetLocation+1; i<arr.length ; i++){
//       if(arr[i] < smallest){
//         smallest = arr[i];
//         smallestIndex = i;
//       }
//     }
//     let replaveValue = arr[targetLocation];
//     arr[targetLocation] = smallest;
//     arr[smallestIndex] = replaveValue;
//     targetLocation++;
//   }
//   return arr;
// }

// const arr = [7,5,4,6,3,4,1];
// console.log(sorting(arr));
