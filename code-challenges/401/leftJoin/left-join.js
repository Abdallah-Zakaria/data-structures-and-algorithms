'use strict';
// const HashMap = require('../hashtable/hashtable');


function leftJoin(hash1, hash2) {
  let result = [];
  for (let key in hash1) {
    let name = Object.keys(hash1[key].head.value);
    let value1 = Object.values(hash1[key].head.value);
    let value2 = (key in hash2 ? Object.values(hash2[key].head.value) : null);
    result.push([name[0], value1[0], value2 ? value2[0] : null]);
  }
  return result;
}

// const hashmap1 = new HashMap(10);
// hashmap1.set('test1', '1');
// hashmap1.set('test2', '2');
// hashmap1.set('test3', '3');
// hashmap1.set('test4', '4');


// const hashmap2 = new HashMap(10);
// hashmap2.set('test1', '1');
// hashmap2.set('test2', '2');
// hashmap1.set('test6', '6');

// const hash1 = hashmap1.storage;
// const hash2 = hashmap2.storage;
// console.log(leftJoin(hash1,hash2));


module.exports = leftJoin;
