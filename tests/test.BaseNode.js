'use strict';

const Node = require('../src/BaseNode.js');
const assert = require('assert').strict;

console.log(Node);

describe('testing BaseNode', function(){
  let testNode, otherNode;

  beforeEach(function(){
    testNode = new Node('testing');
  });

  afterEach(function(){
    testNode = null;
  });

  it('can hold data', function(){
    assert.strictEqual(testNode instanceof Node, true);
    assert.strictEqual(testNode.data, 'testing');
  });

  it('has a pointer to the next node', function(){
    otherNode = new Node('second node');
    testNode.next = otherNode;
    assert(testNode.next === otherNode);
  });
});
