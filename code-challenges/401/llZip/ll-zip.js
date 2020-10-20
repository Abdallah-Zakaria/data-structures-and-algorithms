'use strict';

const LinkedList = require('../linkedList/linked-list');

function zipLists(list1, list2) {
  const list3 = new LinkedList();
  let largerLength;
  if ((list1.length - list2.length) >= 0) {
    largerLength = list1.length;
  } else {
    largerLength = list2.length;
  }
  let list1Index = 0;
  let list2Index = 0;
  for (let i = 0; i < largerLength; i++) {
    if (list1Index < list1.length) {
      list1Index++;
      list3.append( list1.kthFromEnd(list1.length - list1Index));
    }
    if (list2Index < list2.length) {
      list2Index++;
      list3.append(list2.kthFromEnd(list2.length - list2Index));
    }
  }
  return list3.toString();
}
module.exports = zipLists;
