'use strict';

const assert = require('assert').strict;
const { SinglyList } = require('..');

describe('testing SinglyList', function(){
    let list;

    beforeEach(function(){
        list = new SinglyList();
    });

    afterEach(function(){
        list = null;
    });

    it('is empty?', function(){
        assert(list.isEmpty() === true);
    });

    it('gets the size', function(){
        assert(list.size === 0);
    });

    it('display SinglyList', function(){
        assert(list.toString() === ''); // list is empty so nothing to display
    });

    describe('insert --- one function to do it all (data only)', function(){
        it('at the beginning of the list (when list is empty)', function(){
            assert(list.size === 0);
            assert(list.isEmpty() === true);
            assert(list.insert('kaszana').data === 'kaszana');
            assert(list.size === 1);
            assert(list.isEmpty() === false);
            assert(list.toString() === 'kaszana');
        });

        it('at the end of the list (when list is not empty)', function(){
            assert(list.insert('kaszana').data === 'kaszana');
            assert(list.size === 1);
            assert(list.isEmpty() === false);
            assert(list.toString() === 'kaszana');
            list.insert('smalec');
            assert(list.size === 2);
            assert(list.isEmpty() === false);
            assert(list.toString() === 'kaszana->smalec');
            list.insert('chleb');
            assert(list.size === 3);
            assert(list.isEmpty() === false);
            assert(list.toString() === 'kaszana->smalec->chleb');
        });
        describe('at the exact position (pos, data)', function(){
            beforeEach(function(){
                list.insert('Jesiotr');
                list.insert('Puto');
                list.insert('KaszanA');
            });

            it('beginning (pos = 1)', function(){
                assert(list.size === 3);
                list.insert(1, 'test');
                assert(list.size === 3);
                assert(list.toString() === 'test->Puto->KaszanA');
            });

            it('2nd', function(){
                assert(list.size === 3);
                list.insert(2, 'test');
                assert(list.size === 3);
                assert(list.toString() === 'Jesiotr->test->KaszanA');
            });

            it('end (pos = list.size)', function(){
                assert(list.size === 3);
                list.insert(list.size, 'test');
                assert(list.size === 3);
                assert(list.toString() === 'Jesiotr->Puto->test');
            });

            it('wrong position (-1) throws error', function(){
                assert.throws(
                    () => {
                        list.insert(-1, 'ups');
                    },
                    /^Error: wrong pos parameter$/
                );
            });

            it('wrong position (100) throws error', function(){
                assert.throws(
                    () => {
                        list.insert(100, 'ups');
                    },
                    /^Error: wrong pos parameter$/
                );
            });
        });
    });

    describe('search at', function(){
        beforeEach(function(){
            list.insert('one');
            list.insert('two');
            list.insert('three');
        });
        afterEach(function(){
            list = null;
        });

        it('beginning (pos = 1)', function(){
            assert(list.searchAt(1).data === 'one');
        });

        it('provided position (2)', function(){
            assert(list.searchAt(2).data === 'two');
        });

        it('provided position (3)', function(){
            assert(list.searchAt(3).data === 'three');
        });

        it('provided position (4)', function(){
            list.insert('four');
            assert(list.searchAt(4).data === 'four');
        });

        it('provided position (5)', function(){
            list.insert('four');
            list.insert('five');
            assert(list.searchAt(5).data === 'five');
        });

        it('wrong position (-1) throws error', function(){
            assert.throws(
                () => {
                    list.searchAt(-1);
                },
                /^Error: wrong pos parameter$/
            );
        });

        it('wrong position (100) throws error', function(){
            assert.throws(
                () => {
                    list.searchAt(100);
                },
                /^Error: wrong pos parameter$/
            );
        });
    });

    describe('remove at', function(){
        let list;
        beforeEach(function(){
            list = new SinglyList();
            list.insert('one');
            list.insert('two');
            list.insert('three');
            list.insert('four');
            list.insert('five');
        });
        afterEach(function(){
            list = null;
        });

        it('beginning (pos = 1)', function(){
            assert(list.size === 5);
            assert(list.removeAt(1).data === 'one');
            assert(list.toString() === 'two->three->four->five');
            assert(list.size === 4);
        });

        it('provided position (2)', function(){
            assert(list.removeAt(2).data === 'two');
            assert(list.toString() === 'one->three->four->five');
            assert(list.size === 4);
        });

        it('provided position (3)', function(){
            assert(list.removeAt(3).data === 'three');
            assert(list.toString() === 'one->two->four->five');
            assert(list.size === 4);
        });

        it('provided position (4)', function(){
            assert(list.removeAt(4).data === 'four');
            assert(list.toString() === 'one->two->three->five');
            assert(list.size === 4);
        });

        it('provided position (5)', function(){
            assert(list.removeAt(5).data === 'five');
            assert(list.toString() === 'one->two->three->four');
            assert(list.size === 4);
        });

        it('wrong position (-1) throws error', function(){
            assert.throws(
                () => {
                    list.removeAt(-1);
                },
                /^Error: wrong pos parameter$/
            );
        });

        it('wrong position (100) throws error', function(){
            assert.throws(
                () => {
                    list.removeAt(100);
                },
                /^Error: wrong pos parameter$/
            );
        });
    });
});
