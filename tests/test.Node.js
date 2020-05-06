'use strict'

const Node = require('../src/Node.js')
const assert = require('assert')

let testNode = new Node('testing')

assert.strictEqual(testNode instanceof Node, true)
assert.strictEqual(testNode.data, 'testing')

console.log('Test Node OK')
