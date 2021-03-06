class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//Singly Linked list

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let x = this.head;
    this.head = x.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return x;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let found = this.get(index);
    if (found) {
      found.val = val;
      return true;
    } else {
      return false;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = this.head;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      let nextNode = node.next;
      node.next = prev;
      prev = node;
      node = nextNode;
    }
    return this;
  }
}
