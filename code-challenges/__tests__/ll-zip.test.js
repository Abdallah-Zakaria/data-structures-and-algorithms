'use strict';

const LinkedList = require('../401/linkedList/linked-list');
const zipLists = require('../401/llZip/ll-zip');

describe('Validate zipLists function that takes two linked lists as arguments. Zip the two linked lists together into one ', () => {
  it('List one length equal to list two', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);
    expect(zipLists(list1, list2).toString()).toEqual('{ 1 } ->{ 5 } ->{ 3 } ->{ 9 } ->{ 2 } ->{ 4 } -> NULL');
  });
  it('List one length less than list two', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);
    expect(zipLists(list1, list2).toString()).toEqual('{ 1 } ->{ 5 } ->{ 3 } ->{ 9 } ->{ 4 } -> NULL');
  });
  it('List one length more then list two', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    expect(zipLists(list1, list2).toString()).toEqual('{ 1 } ->{ 5 } ->{ 3 } ->{ 9 } ->{ 2 } -> NULL');
  });
});
