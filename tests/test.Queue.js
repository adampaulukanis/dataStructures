'use strict'

const Queue = require('..').Queue
const assert = require('assert').strict

// New instance should be empty
let q = new Queue()
assert.strictEqual(q.first, null)
assert.strictEqual(q.size, 0)

// Add something to the queue
q.enqueue('one')
q.enqueue('two')

assert.strictEqual(q.size, 2)
assert.strictEqual(q.first.data, 'one')
assert.strictEqual(q.first.next.data, 'two')

// And now remove something from the queue
// Returns and removes the top element
assert.strictEqual(q.size, 2)
let wasTopElement = q.dequeue()
// Is it a Node?
// assert.strictEqual(wasTopElement instanceof Node)
assert.strictEqual(wasTopElement.data, 'one')
assert.strictEqual(wasTopElement.next != null, true)
assert.strictEqual(wasTopElement.next.data, 'two')
assert.strictEqual(wasTopElement.next.next, null)
assert.strictEqual(q.size, 1)
assert.strictEqual(q.first.data, 'two')

// test isEmpty()
assert.strictEqual(q.isEmpty(), false)
let emptyQueue = new Queue()
assert.strictEqual(emptyQueue.isEmpty(), true)
assert.strictEqual(emptyQueue.size, 0)

// test clear()
assert.strictEqual(emptyQueue.clear(), true)
assert.strictEqual(emptyQueue.size, 0)
assert.strictEqual(q.clear(), true)
assert.strictEqual(q.size, 0)

// End of file
console.log('Test Queue OK')
