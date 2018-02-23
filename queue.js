class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

const q = new Queue();

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

const q = new Queue();

q.add(1);
q.add(2);
q.add(3);
let removed = q.remove();

console.log(q);
console.log(removed);
