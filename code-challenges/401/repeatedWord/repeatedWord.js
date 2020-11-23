'use strict';

function repeatedWord(string){
  const arr = string.split(/[\s,]+/);
  let words = [];
  for(let i = 0; i < arr.length;i++){
    let word = arr[i].toLowerCase();
    const check = words.includes(word);
    if(check){
      return word;
    }else{
      words.push(word);
    }
  }
  return 'No repeted words';
}

module.exports = repeatedWord;
