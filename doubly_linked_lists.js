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
  // return undefined if invalid index
  if(!Number.isInteger(index) || index < 0 || index > this.length - 1) return;
  // return the val of the node at index
  let currNode = this.head;
  let counter = 0;
  while(counter < index){
    currNode = currNode.next;
    counter++;
  }
  return currNode;
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
  // if the length is one, clear the list
  let val = this.head.val;
  if(this.length === 1){
    this.clear();
  }else{
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;    
  }
  return val;
};

DoublyLinkedList.prototype.get = function(index){
  // return undefined if invalid index
  if(!Number.isInteger(index) || index < 0 || index > this.length - 1) return;
  // return the val of the node at index
  let currNode = this.head;
  let counter = 0;
  while(counter < index){
    currNode = currNode.next;
    counter++;
  }
  return currNode.val;
};

DoublyLinkedList.prototype.set = function(index, val){
  // check valid syntax
  let node = this.getNodeAt(index);
  if(!node) return;
  node.val = val;
  return this;
};

DoublyLinkedList.prototype.insert = function(index, val){
  // set currNode to be node before the place where
  // newNode should be placed
  let currNode = this.getNodeAt(index - 1);
  let newNode = new Node(val);
  // edge case empty list or adding to tail
  if(!this.length || index === this.length){
    return this.push(val);
  }else if(index === 0){
    // edge case insert to head
    return this.unshift(val);
  }else{
    // generic case
    // is valid node?
    if(!currNode) return;

    newNode.prev = currNode.next.prev;
    newNode.next = currNode.next;
    currNode.next.prev = newNode;
    currNode.next = newNode;
    this.length++
    return this;
  }
};

DoublyLinkedList.prototype.remove = function(index){
  // Returns the value of the removed node
  // edge case head and tail
  if(index === 0) return this.shift();
  if(index === this.length - 1) return this.pop();

  // generic case
  // get node at index
  let rmNode = this.getNodeAt(index);  
  if(!rmNode) return;

  let rmVal = rmNode.val;
  // connect node before and after rmNode
  rmNode.prev.next = rmNode.next;
  rmNode.next.prev = rmNode.prev;
  this.length--;
  return rmVal; 
};

DoublyLinkedList.prototype.reverse = function(){
  // return the list reversed
  // empty list
  if(!this.length) return;
  // one node
  if(this.length === 1) return this;
  // two or more nodes
  if(this.length > 1){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    
    let currNode = this.head;
    while(currNode){
      let temp = currNode.next;
      currNode.next = currNode.prev;
      currNode.prev = temp;
      currNode = currNode.next;
    }
  }
  return this;
};

module.exports = DoublyLinkedList;