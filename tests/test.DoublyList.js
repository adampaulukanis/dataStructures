'use strict';

const { DoublyList } = require('..');
const assert = require('assert').strict;

describe('testing DoublyList', function(){
  let list;

  beforeEach(function(){
    list = new DoublyList();
  });

  afterEach(function(){
    list = null;
  });

  it('is empty?', function(){
    assert(list.isEmpty() === true);
  });

  it('gets the size', function(){
    assert(list.size === 0);
  });
});
