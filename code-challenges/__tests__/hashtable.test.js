'use strict';

let HashMap = require('../401/hashtable/hashtable');

describe('HashMap Test',()=>{
  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let hashMap = new HashMap(400);
    hashMap.set('test' , 'this is a test');
    expect(hashMap.contains('test')).toBe(true);
    expect(hashMap.contains('tset')).toBe(false);
    expect(hashMap.get('test')).toBe('this is a test');
    expect(hashMap.get('tset')).toBe(`The tset key not exists`);
  });
  it('Retrieving based on a key returns the value stored',()=>{
    let hashMap = new HashMap(400);
    hashMap.set('test' , 'this is a test');
    expect(hashMap.get('test')).toBe('this is a test');
  });
  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let hashMap = new HashMap(400);
    expect(hashMap.get('tset')).toBe(`The tset key not exists`);
  });
  it('Successfully handle a collision within the hashtable',()=>{
    let hashMap = new HashMap(400);
    hashMap.set('ab' , 'this is a AB');
    expect(hashMap.get('ab')).toBe('this is a AB');
    expect(hashMap.get('ba')).toBe('The ba key not exists');
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashMap = new HashMap(400);
    hashMap.set('ab' , 'this is a AB');
    hashMap.set('ba' , 'this is a BA');
    expect(hashMap.get('ab')).toBe('this is a AB');
    expect(hashMap.get('ba')).toBe('this is a BA');
  });
  it('Successfully hash a key to an in-range value',()=>{
    let range = 400;
    let hashMap = new HashMap(range);
    expect(hashMap.hash('a')<range).toBe(true);
    expect(hashMap.hash('abcdefghijklmnopqrstuvwxyz')<range).toBe(true);
    expect(hashMap.hash('hello world!')>range).toBe(false);
  });
});
