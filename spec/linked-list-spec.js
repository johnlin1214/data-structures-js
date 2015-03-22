var linkedList = require('../linked-list.js');
var myNode = require('../my-node.js');

  describe('linkedList', function() {
    describe('#insertFirst', function() {
      var list = new linkedList();
      var node = "First Node";
      it('should be insert a node at the head of empty LinkedList', function() {
        list.insertFirst(node);
        expect(list.head.value).toEqual(node);
      });

      it('should be insert a node at the head of non-empty inkedList', function() {
        var secondNode = "Second Node";
         list.insertFirst(node);
         list.insertFirst(secondNode);
         expect(list.head.value).toEqual(secondNode);
         expect(list.head.next.value).toEqual(node);
      });
    });
  });

