"use strict"
function reverseArray(array) {
    let newArray = []
    let newArrayIndex = 0
    for (let i = array.length - 1; i >= 0; i--) {
        newArray[newArrayIndex] =  array[i]
        newArrayIndex ++
    }
    return newArray
}