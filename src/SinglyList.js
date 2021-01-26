'use strict';

const Node = require('./BaseNode.js');

const checkPosition = function(pos, max){
    if (pos < 1 || pos > max)
        throw new Error('wrong pos parameter');
}

module.exports = class SinglyList{
    #length = 0;
    #head = null;

    get size(){
        return this.#length;
    }

    isEmpty(){
        return this.#length === 0;
    }

    toString(){
        let str = '';
        let n = this.#head;
        if (!n) return str; // empty list
        str += n.data;
        while (n.next){
            n = n.next;
            str += `->${n.data}`;
        }
        return str;
    }

    /**
     * insert(data) when only one parameter
     * insert(pos, data)
     */
    insert(pos, data){
        let count = 1;
        let currentNode = this.#head;
        let node;
        let oldNode;

        if (arguments.length < 2){ // no pos argument
            data = pos; // this is needed because there is only one argument provided!
            node = new Node(data);

            // empty list
            if (!currentNode){
                this.#head = node;
                ++this.#length;
                return node;
            }

            // now not empty list
            while (currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            ++this.#length;
            return node;
        }

        checkPosition(pos, this.size);
        // insertAtPosition
        while (count < pos){
            currentNode = currentNode.next;
            ++count;
        }

        node = new Node(data);
        currentNode.data = node.data;
        return currentNode;
    }

    searchAt(pos){
        checkPosition(pos, this.size);
        let currentNode = this.#head;
        if (pos === 1) return currentNode;
        for (let i = 1; i < pos; ++i){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    removeAt(pos){
        checkPosition(pos, this.size);
        let currentNode = this.#head;
        let prevNode;
        if (pos === 1){
            --this.#length;
            this.#head = currentNode.next;
            return currentNode;
        }
        for (let i = 1; i < pos; ++i){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
        --this.#length;
        return currentNode;
    }
};
