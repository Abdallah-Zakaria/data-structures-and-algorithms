'use strict';

const HashMap = require('../401/hashtable/hashtable');
const leftJoin = require('../401/leftJoin/left-join');

const hashmap1 = new HashMap(10);
hashmap1.set('test1', '1');
hashmap1.set('test2', '2');
hashmap1.set('test3', '3');
hashmap1.set('test4', '4');
const hashmap2 = new HashMap(10);
hashmap2.set('test1', '1');
hashmap2.set('test2', '2');
hashmap1.set('test6', '6');


describe('Left Join function ', () => {
  it('Validate result', () => {
    const hash1 = hashmap1.storage;
    const hash2 = hashmap2.storage;
    let result = leftJoin(hash1, hash2);
    expect(result).toEqual([
      [ 'test4', '4', null ],
      [ 'test3', '3', null ],
      [ 'test2', '2', '2' ],
      [ 'test1', '1', '1' ],
      [ 'test6', '6', null ]
    ]);
  });
});




