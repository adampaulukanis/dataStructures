module.exports = class Node {
  constructor (data, priority = 0) {
    this.data = data;
    this.next = null;
    this.previous = null;
    this.parent = null;
    this.children = [];
    this.priority = priority;
  }
};
