'use strict';

module.exports = class Node{
  data;
  next = null;
  constructor(data){
    this.data = data;
  }
};
