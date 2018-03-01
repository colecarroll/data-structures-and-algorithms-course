class HashTable {
  constructor(bucketCount) {
    this.bucketCount = bucketCount;
    this.buckets = [];
    for (let i = 0; i < this.bucketCount; i++) {
      this.buckets.push({});
    }
  }

  hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 10;
  }

  getBucket(key) {
    return this.buckets[this.hashFunction(key)];
  }

  setPair(key, value) {
    const hash = this.hashFunction(key);
    const index = this.getBucket(key);
    index[key] = value;
  }

  lookup(lookupKey) {
    const index = this.getBucket(lookupKey);
    return index[lookupKey];
  }
}
