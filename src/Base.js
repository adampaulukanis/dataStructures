class Base{
    constructor(){};

    next(){
        return { value: 'Adam', done: true };
    };

    [Symbol.iterator](){
        return this;
    };
};

module.exports = Base;
