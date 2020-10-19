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
  it('Check the validate of the insertBefore() method',()=>{
    let ll = new LinkedList();
    expect(ll.insertBefore(2,5).toString()).toEqual('Exception');
    ll.insert(1);
    ll.insert(3);
    ll.insert(2);
    expect(ll.insertBefore(1,0).toString()).toEqual('{ 0 } ->{ 1 } ->{ 3 } ->{ 2 } -> NULL');
    expect(ll.insertBefore(3,5).toString()).toEqual('{ 0 } ->{ 1 } ->{ 5 } ->{ 3 } ->{ 2 } -> NULL');
    expect(ll.insertBefore(4,5).toString()).toEqual('Exception');
    expect(ll.insertBefore(4).toString()).toEqual('Exception');
  });
  it('Check the validate of the insertAfter() method',()=>{
    let ll = new LinkedList();
    expect(ll.insertAfter(2,5).toString()).toEqual('Exception');
    ll.insert(1);
    ll.insert(3);
    ll.insert(2);
    expect(ll.insertAfter(3,5).toString()).toEqual('{ 1 } ->{ 3 } ->{ 5 } ->{ 2 } -> NULL');
    expect(ll.insertAfter(2,5).toString()).toEqual('{ 1 } ->{ 3 } ->{ 5 } ->{ 2 } ->{ 5 } -> NULL');
    expect(ll.insertAfter(4,5).toString()).toEqual('Exception');
    expect(ll.insertAfter(4).toString()).toEqual('Exception');
  });
});

