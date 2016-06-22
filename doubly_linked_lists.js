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

module.exports = DoublyLinkedList;