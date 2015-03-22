var myNode = function(value) {
  this.value = value;
  this.next = null;
}

myNode.prototype.addNext = function(nextNode) {
  this.next = nextNode;
}

myNode.prototype.removeNext = function() {
  this.next = null;
}

module.exports = myNode
