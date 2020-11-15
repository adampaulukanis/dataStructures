'use strict';

const { Queue } = require('..');
const assert = require('assert').strict;

describe('testing Queue', function(){
  let q;

  beforeEach(function(){
    q = new Queue();
  });

  afterEach(function(){
    q = null;
  });

  it('new instance should be empty (size)', function(){
    assert(q.size === 0);
  });

  it('adds to queue (enqueue)', function(){
    q.enqueue('one');
    assert(q.size, 1);
    q.enqueue('two');
    assert(q.size, 2);
  });

  it('returns and removes the top element (dequeue)', function(){
    q.enqueue('one');
    q.enqueue('two');
    assert(q.size, 2);
    q.dequeue();
    assert(q.size, 1);
  });

  it('is empty?', function(){
    q.enqueue('one');
    assert(q.isEmpty() === false);
    q.dequeue(); // it should be empty now
    assert(q.isEmpty() === true);
    assert(q.size === 0);
  });

  it('clears the queue (clear)', function(){
    q.enqueue('adam');
    assert(q.size, 1);
    q.enqueue('ewa');
    assert(q.size, 2);
    assert(q.clear() === true); // success in clearing the queue
    assert(q.size === 0);
    assert(q.isEmpty() === true);
  });

  it('displays queue (toString)', function(){
    q.enqueue('adam');
    q.enqueue('ewa');
    assert(q.toString() === 'adam ewa');
  });
});
