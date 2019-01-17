'use strict'

// const Queue = require('..').Queue
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

function findIndex (arr, data) {
  let index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = 1
    }
  }
  return index
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
  // let counter = 0
  queue.enqueue(this._root)
  let currentTree = queue.dequeue()
  while (currentTree) {
    for (let i = 0, length = currentTree.data.children.length; i < length; i++) {
      queue.enqueue(currentTree.data.children[i])
    }
    callback(currentTree)
    currentTree = queue.dequeue()
  }
}

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback)
}

Tree.prototype.add = function (data, toData, traversal) {
  let child = new Node(data)
  let parent = null
  let callback = function (node) {
    if (node.data === toData) {
      parent = node
    }
  }

  this.contains(callback, traversal)

  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('Cannot add node to a non-existing parent.')
  }
}

Tree.prototype.remove = function (data, fromData, traversal) {
  // let tree = this
  let parent = null
  let childToRemove = null
  let index
  let callback = function (node) {
    if (node.data === fromData) {
      parent = node
    }
  }
  this.contains(callback, traversal)
  if (parent) {
    index = findIndex(parent.children, data)
    if (index === undefined) {
      throw new Error('Node to remove does not exist.')
    } else {
      childToRemove = parent.children.splice(index, 1)
    }
  } else {
    throw new Error('Parent does not exist.')
  }
  return childToRemove
}

module.exports = Tree
