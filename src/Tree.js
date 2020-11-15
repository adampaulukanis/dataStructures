'use strict';

const { Queue, Node } = require('..');

function Treee(){};

Treee.prototype.traverseDF = function (callback) {
	(function recurse (currentNode) {
		for (let i = 0, length = currentNode.children.length; i < length; i++) {
			recurse(currentNode.children[i]);
		}
		return callback(currentNode);
	})(this._root);
}

Treee.prototype.traverseBF = function (callback) {
	let queue = new Queue();
	// let counter = 0
	queue.enqueue(this._root);
	let currentTreee = queue.dequeue();
	while (currentTreee) {
		for (let i = 0, length = currentTreee.data.children.length; i < length; i++) {
			queue.enqueue(currentTreee.data.children[i]);
		}
		callback(currentTreee);
		currentTreee = queue.dequeue();
	}
}

Treee.prototype.contains = function (callback, traversal) {
	traversal.call(this, callback);
}

Treee.prototype.add = function (data, toData, traversal) {
	let child = new Node(data);
	let parent = null;
	let callback = function (node) {
		if (node.data === toData) {
			parent = node;
		}
	}

	this.contains(callback, traversal)

	if (parent) {
		parent.children.push(child);
		child.parent = parent;
	} else {
		throw new Error('Cannot add node to a non-existing parent.');
	}
}

Treee.prototype.remove = function (data, fromData, traversal) {
	// let tree = this
	let parent = null;
	let childToRemove = null;
	let index;
	let callback = function (node) {
		if (node.data === fromData) {
			parent = node;
		}
	}

	this.contains(callback, traversal);

	if (parent) {
		index = parent.children.map(el => el.data).indexOf(data);
		if (index > -1) {
			childToRemove = parent.children.splice(index, 1);
		} else {
			throw new Error('Node to remove does not exist.');
		}
	} else {
		throw new Error('Parent does not exist.');
	}
	return childToRemove;
}

module.exports = class Tree{
	#root = null;
	constructor(data){
		this.#root = new Node(data);
	}
};
