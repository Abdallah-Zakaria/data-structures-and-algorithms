'use strict';

const LinkedList = require('../401/linkedList/linked-list');

describe('Check valid of the property of the linked list ', ()=>{
  it('Instantiate an empty linked list is valid', ()=>{
    let ll = new LinkedList();
    expect(ll).toEqual({'head': null});
  });
  it('Insert into the linked list is valid', ()=>{
    let ll = new LinkedList();
    expect(ll.insert(1)).toEqual(ll);
    expect(ll.insert(2)).toEqual(ll);
  });
  it('The head property is point to the first node in the linked list', ()=>{
    let ll = new LinkedList();
    let valueOfFirstNode = 1;
    expect(ll.insert(1).head.value).toEqual(valueOfFirstNode);
  });
  it('Insert multiple nodes into the linked list s vaild', ()=>{
    let ll = new LinkedList();
    expect(ll.insert(1).insert(2)).toEqual(ll);
  });
  it('Return true when finding a value within the linked list that exists', ()=>{
    let ll = new LinkedList();
    expect(ll.insert(1).includes(1)).toEqual(true);
  });
  it('Return false when finding a value within the linked list that exists', ()=>{
    let ll = new LinkedList();
    expect(ll.insert(3).includes(5)).toEqual(false);
  });
  it('Return a collection of all the values that exist in the linked list is valid', ()=>{
    let ll = new LinkedList();
    expect(ll.insert(1).insert(2).insert(3).toString()).toEqual('{ 1 } ->{ 2 } ->{ 3 } -> NULL');
  });
});
