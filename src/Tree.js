// TODO: implement traverseBF
'use strict'

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
  throw Error ( 'Not implemented yet!' )
}

module.exports = Tree
