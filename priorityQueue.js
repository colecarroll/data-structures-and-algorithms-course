class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    let priority = this.dataStore[0].priority;
    for (let i = 1; this.dataStore.length; i++) {
      if (this.dataStore[i].priority < priority) {
        priority = i;
      }
    }
  }
}
