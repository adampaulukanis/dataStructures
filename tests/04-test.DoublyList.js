/* global describe, it */
'use strict'

const assert = require('assert')
const DoublyList = require('..').DoublyList

describe('Doubly-Linked List', () => {
  it('Creates a list', () => {
    let dlist = new DoublyList()
    assert.strictEqual(dlist._length, 0)
    assert.strictEqual(dlist.head, null)
    assert.strictEqual(dlist.tail, null)
  })
  it('Adds a node', () => {
    assert.strictEqual(false)
  })
  it('Searches for a node at n-position in list', () => {
    assert.strictEqual(false)
  })
  it('Removes a node from a list', () => {
    assert.strictEqual(false)
  })
})
