'use strict';

class Node extends require('./BaseNode.js'){
    priority;
    constructor(data, priority = 0){
        super(data);
        this.priority = priority;
    }
}

/*
 * Priority Queue
 *
 * Each element has an priority property associated with it.
 * Elements are added as per the priority.
 * Lowest priority elements are removed first.
 */
module.exports = class PriorityQueue{
    #items = [];

    isEmpty(){
        return this.#items.length === 0;
    }

    toString(){
        let str = '';
        for (let i = 0; i < this.#items.length; ++i){
            str += this.#items[i].data + ' ';
        }
        return str;
    }

    enqueue(data, priority){
        let node = new Node(data, priority);
        let contain = false;

        // add node at the correct location
        for (let i = 0; i < this.#items.length; ++i){
            if (this.#items[i].priority > node.priority){
                this.#items.splice(i, 0, node);
                contain = true;
                break;
            }
        }

        // node has highest priority
        if (!contain)
            this.#items.push(node);
    }

    dequeue(){
        // Because I decided to add nodes to the Priority Queue according to the
        // priority, removing nodes is as ease as removing the top / front element.
        if (!this.isEmpty())
            return this.#items.shift();
    }

    front(){
        return this.#items[0];
    }

    rear(){
        return this.#items[this.#items.length -1];
    }
};
