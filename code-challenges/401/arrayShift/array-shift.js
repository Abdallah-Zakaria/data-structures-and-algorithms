function insertShiftArray(array , value) {
  let newArray = [];
  let arrayIndex = 0;
  let indexOfValue = Math.round(array.length / 2) ;
  for(let i = 0 ; i < array.length + 1 ; i++){
    if(i === indexOfValue ){
      newArray[i] = value;
    }else{
      newArray[i] = array[arrayIndex];
      arrayIndex ++;
    }
  }
  return newArray;
}

module.exports = insertShiftArray;
