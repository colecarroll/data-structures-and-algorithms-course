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

q.add("first in line");
q.add("second in line");
q.add("third in line");
q.remove();
