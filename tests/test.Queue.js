'use strict'

const Queue = require('..').Queue
const assert = require('assert').strict

// New instance should be empty
let q = new Queue()
assert.strictEqual(q instanceof Queue, true)
assert.strictEqual(q.size, 0)

// Add something to the queue
// and check if enqueue returns the proper node
let one = q.enqueue('one')
assert.strictEqual(one.data, 'one')
assert.strictEqual(one.next == null, true)
assert.strictEqual(q.size, 1)
let two = q.enqueue('two')
assert.strictEqual(two.data, 'two')
assert.strictEqual(one.next.data, 'two')
assert.strictEqual(one.next == null, false)
assert.strictEqual(two.next == null, true)
assert.strictEqual(q.size, 2)

// And now remove something from the queue
// Returns and removes the top element
let wasTopElement = q.dequeue()
assert.strictEqual(q.size, 1)
assert.strictEqual(wasTopElement.data, 'one')

// Test if the stock is empty
assert.strictEqual(q.isEmpty(), false)
q.dequeue() // it should be now empty
assert.strictEqual(q.isEmpty(), true)
assert.strictEqual(q.size, 0)

// Test clear function
q.enqueue('adam')
assert.strictEqual(q.size, 1)
q.enqueue('kasia')
assert.strictEqual(q.size, 2)
assert.strictEqual(q.clear(), true) // success in clearing the queue
assert.strictEqual(q.size, 0)
assert.strictEqual(q.isEmpty(), true)

// End of file
console.log('Test Queue OK')
