'use strict';

const { Node } = require('..');
const assert = require('assert').strict;


describe('testing Node', function(){
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

  it('has the priority field needed by PriorityQueue', function(){
    assert(testNode.priority === 0);
  });

  it('has a pointer to the previous node needed by DoublyList', function(){
    otherNode = new Node('second node');
    testNode.previous = otherNode;
    assert(testNode.previous === otherNode);
  });

  // TODO: parent and children needed by Tree
  it('has parent and children needed by Tree');
});
