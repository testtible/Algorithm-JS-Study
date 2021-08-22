class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  }

  pop() {
    if (!this.top) {
      return false;
    }
    let data = this.top.data;
    this.top = this.top.next;

    this.count--;
    return data;
  }

  peek() {
    return this.top.data;
  }
}

const stack = new Stack();

console.log(stack);
console.log(stack.push(100));
console.log(stack.push(200));
console.log(stack.push(300));
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack);
