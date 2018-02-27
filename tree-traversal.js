class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      for (let child of node.children) {
        arr.push(child);
      }
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      for (let i = node.children.length - 1; i >= 0; i--) {
        arr.unshift(node.children[i]);
      }
      fn(node);
    }
  }

  recursiveDFS(fn, node = this.root) {
    if (!node) {
      return;
    }
    fn(node.data);
    this.dfs(fn, node.left);
    this.dfs(fn, node.right);
  }
}
