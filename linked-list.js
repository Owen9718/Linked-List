/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;

    this.length += 1;
    return newNode
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head
    while (current.next) {
      if (!current.next.next) {
        current.next = null
        this.tail = current
        this.length -= 1
        return this.tail
      }
      current = current.next
    }
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let i = 0
    let current = this.head
    while (i < idx) {
      current = current.next
      i += 1
    }
    return current
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let i = 0
    let current = this.head
    while (i < idx) {
      current = current.next
      i += 1
    }
    current.val = val
    return current
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let prev = null
    let newNode = new Node(val)
    let i = 0
    let current = this.head
    if (idx == 0) {
      this.unshift(val)
      return
    }
    if (idx == this.length) {
      this.push(val)
      return
    }
    while (i < idx) {
      prev = current
      current = current.next
      i += 1
    }
    this.length += 1
    newNode.next = current
    prev.next = newNode
    return newNode
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
