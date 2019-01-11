'use strict'

function Node ( data ) {
  this.data = data
  this.next = null
}

function Queue () {
  this.first = null
  this.size = 0
}

Queue.prototype.enqueue = function (data) {
  let node = new Node ( data )

  if (!this.first) {
    this.first = node
  }
  else {
    let n = this.first
    while (n.next) {
      n = n.next
    }
    n.next = node
  }
  this.size++
  return node
}

/* dequeue() removes the first element */
Queue.prototype.dequeue = function () {
  let temp = this.first
  if (!temp) {
    return null
  }
  this.first = this.first.next
  this.size--
  return temp
}

module.exports = Queue
