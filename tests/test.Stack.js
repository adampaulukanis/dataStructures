'use strict'

const assert = require('assert').strict
const Stack = require('../src/Stack')

let bookStack = new Stack()
let emptyStack = new Stack()

const sBook1 = 'Book 1 - Title'
const sBook2 = 'Gal Anonim - Moja Bukwica'

// { Add an item onto the top of the stack
assert.deepEqual(bookStack.push(sBook1), [sBook1])
assert.deepEqual(bookStack.push(sBook2), [sBook1, sBook2])
// } Add an item onto the top of the stack

// { Return and remove the top element
assert.deepEqual(emptyStack.pop(), undefined)
assert.deepEqual(bookStack.pop(), sBook1)
// } Return and remove the top element

// { Return the top without removing
assert.deepEqual(bookStack.peek(), sBook2)
assert.deepEqual(emptyStack.peek(), undefined)
// } Return the top without removing

// { Test if the stack is empty
assert.deepEqual(emptyStack.isEmpty(), true)
assert.deepEqual(bookStack.isEmpty(), false)
// } Test if the stack is empty

// { Remove all elements
assert.deepEqual(emptyStack.clear(), true)
assert.deepEqual(bookStack.clear(), true)
assert.deepEqual(emptyStack.isEmpty(), true)
assert.deepEqual(bookStack.isEmpty(), true)
// } Remove all elements

// End
console.log('Test Stack OK')
