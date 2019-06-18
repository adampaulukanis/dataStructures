/* global describe, it */
'use strict'

const assert = require('assert')
const Tree = require('..').Tree

// TODO: is it really needed here as is?
function Node (data) {
  this.data = data
  this.parent = null
  this.children = []
}

describe('Tree', function () {
  it('Traverse the tree with depth-first search', function () {
    // { create a tree
    let tree = new Tree('one')
    let tempArr = []

    tree._root.children.push(new Node('two'))
    tree._root.children[0].parent = tree

    tree._root.children.push(new Node('three'))
    tree._root.children[1].parent = tree

    tree._root.children.push(new Node('four'))
    tree._root.children[2].parent = tree

    tree._root.children[0].children.push(new Node('five'))
    tree._root.children[0].children[0].parent = tree._root.children[0]

    tree._root.children[0].children.push(new Node('six'))
    tree._root.children[0].children[1].parent = tree._root.children[0]

    tree._root.children[2].children.push(new Node('seven'))
    tree._root.children[2].children[0].parent = tree._root.children[2]
    // }

    tree.traverseDF(function (node) {
      tempArr.push(node.data)
    })

    assert.strictEqual(tempArr.length, 7)
    assert.strictEqual(tempArr.includes('one'), true)
    assert.strictEqual(tempArr.includes('two'), true)
    assert.strictEqual(tempArr.includes('three'), true)
    assert.strictEqual(tempArr.includes('four'), true)
    assert.strictEqual(tempArr.includes('five'), true)
    assert.strictEqual(tempArr.includes('six'), true)
    assert.strictEqual(tempArr.includes('seven'), true)
  })

  it('Traverse the tree with breadth-first search', function () {
    // { create a tree
    let tree = new Tree('one')
    let tempArr = []

    tree._root.children.push(new Node('two'))
    tree._root.children[0].parent = tree

    tree._root.children.push(new Node('three'))
    tree._root.children[1].parent = tree

    tree._root.children.push(new Node('four'))
    tree._root.children[2].parent = tree

    tree._root.children[0].children.push(new Node('five'))
    tree._root.children[0].children[0].parent = tree._root.children[0]

    tree._root.children[0].children.push(new Node('six'))
    tree._root.children[0].children[1].parent = tree._root.children[0]

    tree._root.children[2].children.push(new Node('seven'))
    tree._root.children[2].children[0].parent = tree._root.children[2]
    // }

    tree.traverseBF(function (node) {
      // Can you see what wrong is here?
      // assert.strictEqual(/one|two|three|four|five|six|seven|jeden/.test(node.data.data), true)
      tempArr.push(node.data.data)
    })
    assert.strictEqual(tempArr.length, 7)
    assert.strictEqual(tempArr.includes('one'), true)
    assert.strictEqual(tempArr.includes('two'), true)
    assert.strictEqual(tempArr.includes('three'), true)
    assert.strictEqual(tempArr.includes('four'), true)
    assert.strictEqual(tempArr.includes('five'), true)
    assert.strictEqual(tempArr.includes('six'), true)
    assert.strictEqual(tempArr.includes('seven'), true)
    assert.strictEqual(tempArr.includes('seven123'), false)
  })

  it('add a node', function () {
    let tempTree = new Tree('Alfabet')
    tempTree.add('A', 'Alfabet', tempTree.traverseDF)
    assert.throws(() => {
      tempTree.add('B', 'AA', tempTree.traverseDF)
    }, /^Error: Cannot add node to a non-existing parent\.$/
    , 'Where is thrown Error?')
    assert.strictEqual(tempTree._root.data, 'Alfabet')
    assert.strictEqual(tempTree._root.children.length, 1)
    // TODO: check the child of the root
  })

  it('remove node', function () {
    let tempTree = new Tree('A')

    assert.throws(() => {
      tempTree.remove('PARENT DOES NOT EXIST', 'DOES NOT EXIST', tempTree.traverseDF)
    }, /^Error: Parent does not exist\./)

    assert.throws(() => {
      tempTree.remove('DOES NOT EXIST', 'A', tempTree.traverseDF)
    }, /^Error: Node to remove does not exist\./)
  })
})
