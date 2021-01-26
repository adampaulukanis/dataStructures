'use strict';

const assert = require('assert').strict;
const Base = require('../src/Base.js');

describe('testing the base class', function(){
    it('xxx');
});

let adam = new Base();
for (let value of adam){
    console.log(value);
}
let myIterator = {
    next: function(){
        return { done: true }
    }
};
