function Node(val, next=null, prev=null) {
  this.next = next;
  this.prev = prev;
  this.val = val;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.getNodeAt = function(index){

};

DoublyLinkedList.prototype.clear = function(){

};

DoublyLinkedList.prototype.push = function(){

};

DoublyLinkedList.prototype.pop = function(){

};

DoublyLinkedList.prototype.unshift = function(){

};

DoublyLinkedList.prototype.shift = function(){

};

DoublyLinkedList.prototype.get = function(index){

};

DoublyLinkedList.prototype.set = function(index, val){

};

DoublyLinkedList.prototype.insert = function(index, val){

};

DoublyLinkedList.prototype.remove = function(index){

};

DoublyLinkedList.prototype.reverse = function(){

};

module.exports = DoublyLinkedList;