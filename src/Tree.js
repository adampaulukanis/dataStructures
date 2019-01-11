'use strict'

//const Queue = require('..').Queue
const Queue = require('./Queue.js')


function Node (data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree (data) {
  let node = new Node(data)
  this._root = node
}

Tree.prototype.traverseDF = function (callback) {
  (function recurse (currentNode) {
    for (let i = 0, length = currentNode.children.length; i < length; i++) {
      recurse(currentNode.children[i])
    }
    return callback(currentNode)
  })(this._root)
}

Tree.prototype.traverseBF = function (callback) {
  let queue = new Queue()
  let counter = 0
  queue.enqueue(this._root)
  let currentTree = queue.dequeue()
  while (currentTree) {
    for (let i=0, length=currentTree.data.children.length; i<length; i++) {
      queue.enqueue(currentTree.data.children[i])
    }
    callback(currentTree)
    currentTree = queue.dequeue()
  }
}

module.exports = Tree
