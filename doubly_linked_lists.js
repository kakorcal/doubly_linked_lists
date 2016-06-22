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
  DoublyLinkedList.call(this);
};

DoublyLinkedList.prototype.push = function(val){
  // returns list with the added node
  let node = new Node(val);
  // if list is empty, set list to be new node
  if(!this.length){
    this.head = node;
    this.tail = this.head;
  }else{
    // set node prev to be tail
    node.prev = this.tail;
    // want to attach new node to tail.next
    this.tail.next = node;
    // set the tail to be that new node
    this.tail = node;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.pop = function(){
  // returns the value of the tail
  // if empty list, return undefined
  if(!this.length) return;
  // traverse to the node before the tail
  let counter = 0;
  let val = this.tail.val;
  let currNode = this.head;
  while(counter < this.length - 2){
    currNode = currNode.next;
    counter++;
  }
  // set currNode.next (tail) to be null
  currNode.next = null;
  // set tail to be currNode
  this.tail = currNode;
  this.length--;
  return val;
};

DoublyLinkedList.prototype.unshift = function(val){
  // returns the list with the added value in front of the lists
  let node = new Node(val);
  // if the list is empty, add the new node
  if(!this.length){
    this.head = node;
    this.tail = this.head;
  }else{
    this.head.prev = node;
    // want this.head to be node.next
    node.next = this.head;
    // set head to be the new node
    this.head = node;
  }
  this.length++;
  return this;  
};

DoublyLinkedList.prototype.shift = function(){
  // if the list is empty, return undefined
  if(!this.length) return;
  let val = this.head.val;
  this.head = this.head.next;
  this.head.prev = null;
  this.length--;
  return val;
};

DoublyLinkedList.prototype.get = function(index){
  // // return undefined if invalid index
  // if(!Number.isInteger(index) || index < 0 || index > this.length - 1) return;
  // // return the val of the node at index
  // let currNode = this.head;
  

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