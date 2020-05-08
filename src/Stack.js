'use strict'

const Queue = require('../src/Queue')

/*
 * Stack class is ought to implement the following methods
*/
module.exports = class Stack {
  #data = []

  // Add an item onto the top of the stack
  push (element) {
    this.#data.push(element)
    return this.#data
  }

  // Return and remove the top element
  pop () {
    return this.#data.splice(0, 1)[0]
  }

  // Return the top without removing
  peek () {
    return this.#data[0]
  }

  // Test if the stack is empty
  isEmpty () {
    return this.#data.length === 0
  }

  // Remove all elements
  clear () {
    this.#data = []
    // another way would be this.#data.length = 0
    return this.#data.length === 0
  }
} // End of Stack
