class List {
  constructor() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  }

  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    let insertPosition = this.find(after);
    if (insertPosition > -1) {
      this.dataStore.splice(insertPosition + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  remove() {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  front() {
    this.position = 0;
  }

  end() {
    this.position = this.listSize - 1;
  }

  previous() {
    if (this.position > 0) {
      --this.position;
    }
  }

  next() {
    if (this.position < this.listSize - 1) {
      ++this.position;
    }
  }

  length() {
    return this.listSize;
  }

  currentPosition() {
    return this.position;
  }

  moveTo(position) {
    this.position = position;
  }

  getElement() {
    return this.dataStore[this.position];
  }

  contains() {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }
}
