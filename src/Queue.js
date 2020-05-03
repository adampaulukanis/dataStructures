'use strict'

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function Queue () {
  this.first = null
  this.size = 0 // should be private, read only? this.#size
}

/* adds an item onto the top of the stack */
Queue.prototype.enqueue = function (data) {
  let node = new Node(data)
  if (!this.first) {
    this.first = node
  } else {
    let n = this.first
    while (n.next) {
      n = n.next
    }
    n.next = node
  }
  ++this.size
  return node
}

/* returns and removes the top element */
Queue.prototype.dequeue = function () {
  let temp = this.first
  if (!temp) {
    return null
  }
  this.first = this.first.next
  --this.size
  return temp
}

/* tests if the stack is empty */
Queue.prototype.isEmpty = function () {
  return this.first === null
}

/* removes all elements */
Queue.prototype.clear = function () {
  while (this.first) {
    this.first = this.first.next
    --this.size
  }
  return this.size === 0
}

module.exports = Queue
