var myNode = require('../my-node.js');

var linkedList = function() {
  this.head = null;
  this.size = 0;
};

linkedList.prototype.insertFirst = function(element) {
  var oldHead;
  var node = new myNode(element);
  if (this.head == null) {
    this.head = node;
  } else {
    this.head = node;
    node.addNext(oldHead);
    oldHead = this.head;
  }
  this.size++;
};

linkedList.prototype.removeFirst = function() {
  if (this.head.next === null) {
    this.head = null;
  } else {
    this.head = this.head.next;
  }
  this.size--;
};

linkList.prototype.insertLast = function(element) {
  var node = new myNode(element);
  if (this.head === null) {
    this.head = node;
  } else {
    var currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.addNext(node);
  }
  this.size++;
}

linkedList.prototype.tail = function() {
  var currentNode = this.head;
  while(currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

linkedList.prototype.removeLast = function() {
  var currentNode = this.head;
  if(currentNode.next === null){
    this.head = null;
  } else {
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
  this.size--;
};

LinkedList.prototype.traverseTo = function(index) {
  if (index === 0) {
    return this.head;
  }
  var currentNode = this.head;
  var currentIndex = 0;
  while(currentIndex < index) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  return currentNode;
}

module.exports = linkedList;

