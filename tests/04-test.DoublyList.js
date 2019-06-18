/* global describe, it */
'use strict'

const assert = require('assert')
const DoublyList = require('..').DoublyList

describe('Doubly-Linked List', function () {
  it('Creates a list', function () {
    let dlist = new DoublyList()
    assert.strictEqual(dlist._length, 0)
    assert.strictEqual(dlist.head, null)
    assert.strictEqual(dlist.tail, null)
  })

  it('Adds a node', function () {
    let dlist = new DoublyList()
    let d = new Date()
    // add the first value
    dlist.add(d)
    assert.strictEqual(dlist._length, 1)
    assert.strictEqual(dlist.head.data, d)
    assert.strictEqual(dlist.tail.data, d)
    // add more values to the list
    for (let i = 1; i < 5; i++) {
      dlist.add(i)
    }
  })

  it('Searches for a node at n-position in list', function () {
    let dlist = new DoublyList()
    let nodeOne = dlist.add('one')
    assert.throws(
      () => {
        dlist.searchNodeAt(0)
      },
      /^Error: Failure: non-existing node in list\./
    )
    assert.throws(
      () => {
        dlist.searchNodeAt(-100)
      },
      /^Error: Failure: non-existing node in list\./
    )
    assert.throws(
      () => {
        dlist.searchNodeAt(100)
      },
      /^Error: Failure: non-existing node in list\./
    )
    assert.deepStrictEqual(dlist.searchNodeAt(1), nodeOne)

    // add few more nodes
    let arrOfNumbersInRussian = [ 'один', 'два', 'три', 'четыре', 'пять', 'шесть' ]
    for (let i = 0; i < arrOfNumbersInRussian.length; i++) {
      dlist.add(arrOfNumbersInRussian[i])
    }
    for (let i = 0; i < arrOfNumbersInRussian.length; i++) {
      assert.strictEqual(dlist.searchNodeAt(i + 2).data, arrOfNumbersInRussian[i])
      /*
       * Check if the next node is what I am expecting it to be.
       * This is the reason why I created the array of numbers in Russian...
       */
      assert.strictEqual(dlist.searchNodeAt(i + 1).next.data, arrOfNumbersInRussian[i])
    }
  })

  it('Removes a node from a list', function () {
    let dlist = new DoublyList()
    for (let i = 1; i < 10; i++) {
      dlist.add(i)
    }
    // First test for invalid positions
    assert.throws(
      () => {
        dlist.remove(-1000)
      },
      /^Error: Failure: non-existing node in list\./
    )
    assert.throws(
      () => {
        dlist.remove(100)
      },
      /^Error: Failure: non-existing node in list\./
    )
    assert.throws(
      () => {
        dlist.remove(0)
      },
      /^Error: Failure: non-existing node in list\./
    )
    let dlist2 = new DoublyList()
    let tempString = 'only me, just text :-)'
    dlist2.add(tempString)
    let tempObj = dlist2.remove(1)
    assert.strictEqual(tempObj.data, tempString)
  })
})
