'use strict';

class SpecialList{
    #data;
    constructor(data){
        this.#data = data;
        this.public = 'Cześć Adam!';
    };

    [Symbol.iterator](){
        return this.#data[Symbol.iterator]();
    };

    values(){
        return this.#data
            .filter(i => i.complete)
            .map(i => i.value)
        [Symbol.iterator]();
    };
};

module.exports = SpecialList;
