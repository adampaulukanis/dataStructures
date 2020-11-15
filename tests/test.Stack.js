'use strict';

const assert = require('assert').strict;
const Stack = require('../src/Stack');

describe('testing Stack', function(){
  let stack;

  beforeEach(function(){
    stack = new Stack();
  });

  afterEach(function(){
    stack = null;
  });

  it('displays stack --- now empty', function(){
    assert(stack.toString() === '');
  });

  it('is empty?', function(){
    assert(stack.isEmpty() === true);
  });

  it('adds an item to the stack (push)', function(){
    stack.push('17');
    assert(stack.toString() === '17');
    assert(stack.isEmpty() === false);
  });

  it('removes the top element (pop)', function(){
    stack.push('car');
    stack.pop();
    assert(stack.isEmpty() === true);
  });

  it('returns the top without removing (peek)', function(){
    stack.push('stack');
    assert(stack.peek() === 'stack');
    assert(stack.isEmpty() === false);
    assert(stack.toString() === 'stack');
  });

  it('removes all elements (clear)', function(){
    assert(stack.isEmpty() === true);
    stack.push('x filez');
    assert(stack.isEmpty() === false);
    stack.clear();
    assert(stack.isEmpty() === true);
  });
});
