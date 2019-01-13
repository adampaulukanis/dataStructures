'use strict'
console.log( '......................' )
console.log( 'start program' )
console.log( '......................' )

module.exports = {
  Queue:    require('./src/Queue.js'),
  Tree:     require('./src/Tree.js')
}

  function Node (data) {
    this.data = data
    this.parent = null
    this.children = []
  }
const myModule = ( () => {
  // Private
  function findIndex(arr, data) {
    let index
    for (let i=0; i<arr.length;i++) {
      if (arr[i].data === data) {
        index = 1
      }
    }
    return index
  }

  // Public
  function Tree (data) {
    let node = new Node (data)
    this._root = node
  }
  Tree.prototype.traverseDF = function (callback) {
    (function recurse (currentNode) {
      for (let i=0, length=currentNode.children.length; i<length; i++) {
        recurse (currentNode.children[i])
      }
      callback (currentNode)
    }) (this._root)
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
    }
    else {
      throw new Error ('Cannot add node tto a non-existing parent.')
    }
  }

  Tree.prototype.remove = function (data, fromData, traversal) {
    let tree = this
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
      }
      else {
        childToRemove = parent.children.splice(index, 1)
      }
    }
    else {
      throw new Error('Parent does not exist.')
    }
    return childToRemove
  }

  return Tree
}) ()

console.log( '......................' )
console.log( myModule )
let my = new myModule('siema')
my._root.children.push(new Node('hello'))
my._root.children[0].parent = my //(new Node('hello'))

console.log( '......................' )
my.contains(function (node) {
  if (node.data === 'two') {
    console.log('>>>', node)
  }
  else {
    console.log ('node\'s children=', node.children)
  }
}, my.traverseDF)
console.log( '......................' )
let tree = new myModule('CEO')
tree.add('VP of Happines', 'CEO', tree.traverseDF)
tree.add('VP of Finance', 'CEO', tree.traverseDF)
tree.add('VP of Sadness', 'CEO', tree.traverseDF)

tree.add('Director of Puppies', 'VP of Happines', tree.traverseDF)
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseDF)
//console.log(tree)
console.log(tree._root.children)
//console.log( my._root.children[0] )
console.log( '......................' )
console.log( '......................' )
console.log( '......................' )
console.log( '......................' )
console.log(tree)
console.log(tree._root.children.data)
tree.remove('VP of Happines', 'CEO', tree.traverseDF)
console.log(tree)
console.log(tree._root.children.data)
