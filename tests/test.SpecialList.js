'use strict';

const assert = require('assert');
const SpecialList = require('../src/SpecialList.js');

const testArr = [
    { complete: true, value: 'Lorem Ipsum' },
    { complete: true, value: 'dolor sit amet' },
    { complete: false },
    { complete: true, value: 'adipiscing elit' }
];

describe('testing SpecialList', function()
    {
        let myList;

        describe('iterating', function(){
            beforeEach(function(){
                myList = new SpecialList(testArr);
            });
            afterEach(function(){
                myList = null;
            });

            it('the exact data passed to the SpecialList constructor', function(){
                let counter = 0;
                for(let item of myList){
                    assert(item === testArr[counter++]);
                }
            });

            it('values', function(){
                let counter = 0;
                for(let value of myList.values()){
                    assert(value === testArr.filter(i => i.complete).map(i => i.value)[counter++]);
                }
            });
        });
    });
