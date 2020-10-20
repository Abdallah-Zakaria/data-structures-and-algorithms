'use strict';

const LinkedList = require('../401/linkedList/linked-list');

describe('Check valid of the property of the linked list ', ()=>{
  it('Instantiate an empty linked list is valid', ()=>{
    let ll = new LinkedList();
    expect(ll).toEqual({'head': null , 'length' : 0});
  });
  it('Insert into the linked list is valid', ()=>{
    let ll = new LinkedList();
    expect(ll.append(1)).toEqual(ll);
    expect(ll.append(2)).toEqual(ll);
  });
  it('The head property is point to the first node in the linked list', ()=>{
    let ll = new LinkedList();
    let valueOfFirstNode = 1;
    expect(ll.append(1).head.value).toEqual(valueOfFirstNode);
  });
  it('Insert multiple nodes into the linked list s vaild', ()=>{
    let ll = new LinkedList();
    expect(ll.append(1).append(2)).toEqual(ll);
  });
  it('Return true when finding a value within the linked list that exists', ()=>{
    let ll = new LinkedList();
    expect(ll.append(1).includes(1)).toEqual(true);
  });
  it('Return false when finding a value within the linked list that exists', ()=>{
    let ll = new LinkedList();
    expect(ll.append(3).includes(5)).toEqual(false);
  });
  it('Return a collection of all the values that exist in the linked list is valid', ()=>{
    let ll = new LinkedList();
    expect(ll.append(1).append(2).append(3).toString()).toEqual('{ 1 } ->{ 2 } ->{ 3 } -> NULL');
  });
  it('Check the validate of the insertBefore() method',()=>{
    let ll = new LinkedList();
    expect(ll.insertBefore(2,5).toString()).toEqual('Exception');
    ll.append(1);
    ll.append(3);
    ll.append(2);
    expect(ll.insertBefore(1,0).toString()).toEqual('{ 0 } ->{ 1 } ->{ 3 } ->{ 2 } -> NULL');
    expect(ll.insertBefore(3,5).toString()).toEqual('{ 0 } ->{ 1 } ->{ 5 } ->{ 3 } ->{ 2 } -> NULL');
    expect(ll.insertBefore(4,5).toString()).toEqual('Exception');
    expect(ll.insertBefore(4).toString()).toEqual('Exception');
  });
  it('Check the validate of the insertAfter() method',()=>{
    let ll = new LinkedList();
    expect(ll.insertAfter(2,5).toString()).toEqual('Exception');
    ll.append(1);
    ll.append(3);
    ll.append(2);
    expect(ll.insertAfter(3,5).toString()).toEqual('{ 1 } ->{ 3 } ->{ 5 } ->{ 2 } -> NULL');
    expect(ll.insertAfter(2,5).toString()).toEqual('{ 1 } ->{ 3 } ->{ 5 } ->{ 2 } ->{ 5 } -> NULL');
    expect(ll.insertAfter(4,5).toString()).toEqual('Exception');
    expect(ll.insertAfter(4).toString()).toEqual('Exception');
  });
  it('k is greater than the length of the linked list should return an Exception', ()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(5)).toEqual('Exception');
  });
  it('k and the length of the list are the same should return an Exception', ()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(4)).toEqual('Exception');
  });
  it('k is not a positive integer should return an Exception', ()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(-2)).toEqual('Exception');
  });
  it('linked list is of a size 1 validate ', ()=>{
    let ll = new LinkedList();
    ll.append(1);
    expect(ll.kthFromEnd(0)).toEqual(1);
    expect(ll.kthFromEnd(1)).toEqual('Exception');
  });
  it('k in the middle should return its value', ()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(2)).toEqual(2);
  });
});

