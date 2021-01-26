'use strict';

const Node = require('./BaseNode.js');

class Queue{
    #first = null;
    #size;
    constructor(){
        this.#size = 0;
    }

    get size(){
        return this.#size;
    }

    /* adds an item to the top of the stack */
    enqueue(data){
        let node = new Node(data);
        if (!this.#first) {
            this.#first = node;
        } else {
            let n = this.#first;
            while (n.next) {
                n = n.next;
            }
            n.next = node;
        }
        ++this.#size;
        return node;
    }

    /* returns and removes the top element */
    dequeue(){
        let temp = this.#first;
        if (!temp) {
            return null;
        }
        this.#first = this.#first.next;
        --this.#size;
        return temp;
    }

    isEmpty(){
        return this.#first == null;
    }

    /* removes all elements */
    clear(){
        while (this.#first) {
            this.#first = this.#first.next;
            --this.#size;
        }
        return this.#size === 0;
    }

    toString(){
        let str = '';
        let n = this.#first;
        if (!n) return str; // when the queue is empty
        str = n.data;
        while (n.next) {
            n = n.next;
            str += ` ${n.data}`;
        }
        return str;
    }
};

module.exports = Queue;
