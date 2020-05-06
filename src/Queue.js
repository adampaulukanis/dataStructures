'use strict'

const Node = require('./Node.js')

class Queue {
  #first = null;
  #size;
  constructor () {
    this.#size = 0
  }

  /* Gets the size of the queue */
  get size () {
    return this.#size
  }

  /* adds an item onto the top of the stack */
  enqueue (data) {
    let node = new Node(data)
    if (!this.#first) {
      this.#first = node
    } else {
      let n = this.#first
      while (n.next) {
        n = n.next
      }
      n.next = node
    }
    ++this.#size
    return node
  }

  /* returns and removes the top element */
  dequeue () {
    let temp = this.#first
    if (!temp) {
      return null
    }
    this.#first = this.#first.next
    --this.#size
    return temp
  }

  /* tests if the stack is empty */
  isEmpty () {
    return this.#first == null
  }

  /* removes all elements */
  clear () {
    while (this.#first) {
      this.#first = this.#first.next
      --this.#size
    }
    return this.#size === 0
  }
} // End of Queue

module.exports = Queue
