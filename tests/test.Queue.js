/* global describe, it */
'use strict'

const assert = require( 'assert' )
const Queue = require ( '../src/Queue.js' )

function Node ( data ) {
  this.data = data
  this.parent = null
  this.children = []
}

describe ( 'Queue', () => {
  it ( 'new instance of Queue should be empty', () => {
    let q = new Queue()
    assert.strictEqual (q.first, null)
    assert.strictEqual (q.size, 0)
  })

  it ( 'enqueue few elements', () => {
    let q = new Queue()
    q.enqueue ( 'one' )
    q.enqueue ( 'two' )
    assert.strictEqual(q.size, 2)
    assert.strictEqual( q.first.data, 'one' )
    assert.strictEqual( q.first.next.data, 'two' )
  })

  it ( 'dequeue empty queue', () => {
    let q = new Queue()
    q.dequeue()
    assert.strictEqual( q.dequeue(), null)
  })

  it( 'dequeue everything, should return empty queue', () => {
    let q = new Queue()
    q.enqueue( 'one' )
    assert.strictEqual(q.dequeue().data, 'one')
    // now q should be empty
    assert.strictEqual(q.first, null)
    assert.strictEqual(q.size, 0)
  })
})
