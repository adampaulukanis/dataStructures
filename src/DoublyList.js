'use strict';

class Node extends require('./BaseNode.js') {
	prev = null;
}

module.exports = class DoublyList{
	#head = null;
	#tail = null;
	#length = 0;

	isEmpty(){
		return this.#length === 0;
	}

	get size(){
		return this.#length;
	}
};
