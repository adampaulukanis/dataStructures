'use strict'

const message = {
  EINVPOS: 'Failure: non-existent node in this list.'
}

function Node (data) {
  this.data = data
  this.next = null
}

function SinglyList () {
  this._length = 0
  this.head = null
}

SinglyList.prototype.add = function (value) {
  let node = new Node(value)
  let currentNode = this.head

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node
    this._length++

    return node
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next
  }

  currentNode.next = node
  this._length++

  return node
}

SinglyList.prototype.searchNodeAt = function (position) {
  let currentNode = this.head
  let length = this._length
  let count = 1

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.EINVPOS)
  }

  // 2nd use-case: a valid position
  while (count < position) {
    currentNode = currentNode.next
    count++
  }
  return currentNode
}

SinglyList.prototype.remove = function (position) {
  let currentNode = this.head
  let length = this._length
  let count = 0
  let beforeNodeToDelete = null
  let nodeToDelete = null
  let deletedNode = null

  // 1st use-case: an invalid position
  if (position < 1 || position > length) {
    throw new Error(message.EINVPOS)
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
    this.head = currentNode.next
    deletedNode = currentNode
    currentNode = null
    this._length--

    return deletedNode
  }

  // 3rd use-case: any other node is to be removed
  while (count < position) {
    beforeNodeToDelete = currentNode
    nodeToDelete = currentNode
    currentNode = currentNode.next
    count++
  }
  beforeNodeToDelete.next = nodeToDelete.next
  deletedNode = nodeToDelete
  nodeToDelete = null
  this._length--

  return deletedNode
}

module.exports = SinglyList
