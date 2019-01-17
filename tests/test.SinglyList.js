/* global describe, it */
'use strict'

const assert = require('assert')
const SinglyList = require('..').SinglyList

describe('Singly-Linked List', () => {
  it('Creates a singly-linked list', () => {
    let slist = new SinglyList()
    assert.strictEqual(slist._length, 0, 'Should be 0!')
    assert.strictEqual(slist.head, null, 'Should be null')
  })
  it('Adds a node', () => {
    let slist = new SinglyList()
    assert.strictEqual(slist.add('value').data, 'value', 'Output should be the same as input!')
    assert.strictEqual(slist._length, 1, 'Should be 1!')

    let d = new Date()
    slist.add(d)
    assert.strictEqual(slist._length, 2)
    assert.strictEqual(slist.head.next.data, d)
    assert.strictEqual(slist.head.next.next, null)
  })
  it('Searches for a node at n-position in list', () => {
    let slist = new SinglyList()
    assert.strictEqual(slist._length, 0)
    // list is empty
    assert.throws(() => {
      slist.searchNodeAt(0)
    },
    /^Error: Failure: non-existent node in this list\./
    )

    slist.add('lorem ipsum')
    assert.strictEqual(slist._length, 1)
    assert.strictEqual(slist.add('lorem').data, 'lorem')
    assert.strictEqual(slist.searchNodeAt(1).data, 'lorem ipsum')
    assert.strictEqual(slist.searchNodeAt(2).data, 'lorem')
  })
  it('Removes a node from list', () => {
    let slist = new SinglyList()
    // remove node at position 0
    assert.throws(() => {
      slist.remove(0)
    },
    /^Error: Failure: non-existent node in this list\./
    )

    // remove node at position 1
    let d = new Date()
    slist.add(d)
    let removedNode = slist.remove(1)
    assert.strictEqual(removedNode.data, d)
    assert.strictEqual(removedNode.next, null)
    assert.strictEqual(slist._length, 0)
    assert.strictEqual(slist.head, null)

    // make a list with random numbers
    function randomIntInc (low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low)
    }
    for (let i = 1; i < 51; i++) {
      slist.add(randomIntInc(0, 12345))
    }
    assert.strictEqual(slist._length, 50)
    // remove random node
    let randomNumber = randomIntInc(2, 50)
    let nodeBeforeDeleting = slist.searchNodeAt(randomNumber)
    assert.strictEqual(slist.remove(randomNumber).data, nodeBeforeDeleting.data)
  })
})
