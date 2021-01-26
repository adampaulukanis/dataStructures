'use strict';

const Queue = require('../src/Queue');

class Stack {
    #data = [];

    push (element) {
        this.#data.push(element);
        return this.#data;
    }

    pop () {
        return this.#data.splice(0, 1);
    }

    // Return the top without removing
    peek () {
        return this.#data[0];
    }

    isEmpty () {
        return this.#data.length === 0;
    }

    // Remove all elements
    clear () {
        this.#data = [];
        return this.#data.length === 0;
    }

    toString(){
        return String(this.#data);
    }
};

module.exports = Stack;
