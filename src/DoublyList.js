'use strict'

function Node (data) {
  this.data = data
  this.previous = null
  this.next = null
}

function DoublyList () {
  this._length = 0
  this.head = null
  this.tail = null
}

let n = new Node(null)
console.log(n)

module.exports = DoublyList
