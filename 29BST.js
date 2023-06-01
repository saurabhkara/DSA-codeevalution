class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value && root.left === null) {
      root.left = newNode;
      return;
    }
    if (root.value <= newNode.value && root.right === null) {
      root.right = newNode;
      return;
    }
    if (root.value > newNode.value && root.left !== null) {
      this.insertNode(root.left, newNode);
    } else {
      this.insertNode(root.right, newNode);
    }
  }

  preOrder(root) {
    if (!root) {
      return;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  inOrder(root) {
    if (!root) {
      return;
    }
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  postOrder(root) {
    if (!root) {
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

  levelOrder(root) {
    let queue = [];
    if (!root) {
      return;
    }
    queue.push(root);
    while (queue.length) {
      if (queue[0].left) {
        queue.push(queue[0].left);
      }
      if (queue[0].right) {
        queue.push(queue[0].right);
      }
      let node = queue.shift();
      console.log(node.value);
    }
  }

  search(root, key) {
    if (!root) {
      console.log("Trees is not avaialble");
      return false;
    } else {
      if (root.value === key) {
        return true;
      } else if (root.value > key) {
        return this.search(root.left, key);
      } else {
        return this.search(root.right, key);
      }
    }
  }

  minValue(root) {
    if (!root) {
      return;
    } else {
      if (root.left) {
        return this.minValue(root.left);
      } else {
        return root.value;
      }
    }
  }

  maxValue(root) {
    if (!root) {
      return;
    } else {
      if (root.right) {
        return this.maxValue(root.right);
      } else {
        return root.value;
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
     root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.right) {
        return root.left;
      } else if (!root.left) {
        return root.right;
      }else{
        root.value = this.minValue(root.right);
        root.right=this.deleteNode(root.right,root.value);
      }
    }
    return root;
  }
  
}

const bst = new BST();
bst.isEmpty();
bst.insert(5);
bst.insert(8);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(7);
bst.insert(9);
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// console.log(bst.search(bst.root,4));
// console.log(bst.minValue(bst.root));
// console.log(bst.maxValue(bst.root));
// bst.levelOrder(bst.root);
bst.delete(8);
// bst.inOrder(bst.root);
bst.levelOrder(bst.root);
