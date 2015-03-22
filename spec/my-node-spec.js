var myNode = require('../my-node.js');

  describe('Node', function() {
    describe('#new', function() {
      var el = 'first element';
      var node = new myNode(el);

      it('should be instantiate with a new node', function() {
        expect(node.value).toEqual(el);
      });
    });

  describe('#addNext', function() {
    var first_el = 'first element';
    var second_el = 'second_element';
    var node = new myNode(first_el);
    var nextNode = new myNode(second_el);

    it('should set second_el to the next node', function() {
      node.addNext(nextNode);
      expect(node.next).toEqual(nextNode);
    });
  });

  describe('#removeNext', function() {
    var first_el = 'first element';
    var second_el = 'second_element';
    var node = new myNode(first_el);
    var nextNode = new myNode(second_el);

    it('should be able to remove the next node and point to null', function() {
      node.addNext(nextNode);
      node.removeNext();
      expect(node.next).toEqual(null);
    });
  });

});

