'use strict';

const { PriorityQueue } = require('..');
const assert = require('assert').strict;

describe('testing Priority Queue', function(){
    let q;

    beforeEach(function(){
        q = new PriorityQueue();
    });

    afterEach(function(){
        q = null;
    });

    it('is empty?', function(){
        assert(q.isEmpty() === true);
    });

    it('prints starting from highest to lowest priority (toString)', function(){
        // this is tightly bond with enqueue...the same code actually could go into enqueue()
        assert(q.toString() === '');
        assert(q.isEmpty() === true);
        q.enqueue('Adam', 10);
        assert(q.toString() === 'Adam '); // last character is space
        q.enqueue('Ewa', 20);
        q.enqueue('Maria', 5);
        assert(q.toString() === 'Maria Adam Ewa ');
        assert(q.isEmpty() === false);
    });

    it('adds to the queue according to its priority (enqueue)', function(){
        assert(q.isEmpty() === true);
        q.enqueue('Adam', 1);
        assert(q.isEmpty() === false);
        q.enqueue('Ewa', 2);
    });

    it('removes the top element / the one with the lowest priority (dequeue)', function(){
        assert(q.isEmpty() === true);
        q.enqueue('Adam', 1);
        assert(q.isEmpty() === false);
        let removedElement = q.dequeue();
        assert(removedElement.data === 'Adam');
        assert(removedElement.priority === 1);
        assert(q.isEmpty() === true);
        q.enqueue('Adam');
        q.enqueue('Ewa');
        q.enqueue('Kaszanka', 18);
        assert(q.isEmpty() === false);
        assert(q.toString() === 'Adam Ewa Kaszanka ');
    });

    it('returns the front element without deletation (front)', function(){
        assert(q.front() === undefined);
        q.enqueue('Adam', 18);
        assert(q.front().data === 'Adam');
        assert(q.front().priority === 18);
        q.enqueue('Ewa', 22);
        assert(q.front().data === 'Adam');
        assert(q.front().priority === 18);
    });

    it('returns the last element of the Priority Queue (rear)', function(){
        assert(q.rear() === undefined);
        q.enqueue('Adam', 1);
        assert(q.rear().data === 'Adam');
        q.enqueue('Ewa', 10);
        assert(q.rear().data === 'Ewa');
    });
});
