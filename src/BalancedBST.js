const Node = require('./Node');
const { BuildTree } = require('./BuildTree');
const { PrettyPrint } = require('./PrettyPrint');

class Tree {
  /**
   * @param {number[]} array
   */
  constructor(array) {
    if (!Array.isArray(array)) throw new Error('Argument must be an array');
    array.sort();
    this.root = BuildTree([...new Set(array)]);
  }

  /**
   * @param {number} value
   * @returns {Node}
   */
  insert(value, node = this.root) {
    if (node === null) return new Node(value);

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  // insert(value) {
  //   let node = this.root;
  //   while (node) {
  //     if (node.data === value) break;

  //     const isLeft = value < node.data;

  //     if (!node.left || !node.right) {
  //       node.left = isLeft ? new Node(value) : node.left;
  //       node.right = !isLeft ? new Node(value) : node.right;
  //       break;
  //     }

  //     node = isLeft ? node.left : node.right;
  //   }
  // }

  /**
   * @param {number} value
   * @returns {Node}
   */
  deleteItem(value, node = this.root) {
    if (node === null) return node;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (node.left && node.right) {
        let minNode = node.right;

        while (minNode.left) minNode = minNode.left;
        node.data = minNode.data;
        node.right = this.deleteItem(node.data, node.right);

        return node;
      } else if (!node.left && !node.right) return null;
      else return node.left || node.right;
    }

    return node;
  }

  /**
   * @param {number} value
   * @returns {Node}
   */
  find(value, node = this.root) {
    if (node === null || value === node.data) return node;

    if (value < node.data) return this.find(value, node.left);
    return this.find(value, node.right);
  }

  /**
   * @param {function} callback
   */
  levelOrder(callback = undefined) {
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const first = queue.shift();

      if (callback === undefined) console.log(first.data);
      else callback(first.data);

      if (first.left) queue.push(first.left);
      if (first.right) queue.push(first.right);
    }
  }

  /**
   * @param {function} callback
   */
  recursiveLevelOrder(callback = undefined, queue = [this.root]) {
    if (queue.length <= 0) return;

    const first = queue.shift();

    if (first.left) queue.push(first.left);
    if (first.right) queue.push(first.right);

    if (callback === undefined) console.log(first.data);
    else callback(first.data);

    this.recursiveLevelOrder(callback, queue);
  }

  /**
   * @param {function} callback
   * @returns {number[]}
   */
  inOrder(callback = undefined, arr = [], node = this.root) {
    if (node === null) return;

    this.inOrder(callback, arr, node.left);

    if (callback === undefined) arr.push(node.data);
    else callback(node.data);

    this.inOrder(callback, arr, node.right);

    if (callback === undefined) return arr;
  }

  /**
   * @param {function} callback
   * @returns {number[]}
   */
  preOrder(callback = undefined, arr = [], node = this.root) {
    if (node === null) return;

    if (callback === undefined) arr.push(node.data);
    else callback(node.data);

    this.preOrder(callback, arr, node.left);
    this.preOrder(callback, arr, node.right);

    if (callback === undefined) return arr;
  }

  /**
   * @param {function} callback
   * @returns {number[]}
   */
  postOrder(callback = undefined, arr = [], node = this.root) {
    if (node === null) return;

    this.postOrder(callback, arr, node.left);
    this.postOrder(callback, arr, node.right);

    if (callback === undefined) arr.push(node.data);
    else callback(node.data);

    if (callback === undefined) return arr;
  }

  /**
   * @param {Node} node
   * @returns {number}
   */
  height(node = this.root) {
    if (node === null) return 0;

    const lHeight = 1 + this.height(node.left);
    const rHeight = 1 + this.height(node.right);

    return Math.max(lHeight, rHeight);
  }

  /**
   * @param {Node} node
   * @returns {number}
   */
  depth(node, root = this.root) {
    if (node === null || root === null) return node;
    if (node.data === root.data) return 0;

    if (node.data < root.data) {
      return 1 + this.depth(node, root.left);
    } else {
      return 1 + this.depth(node, root.right);
    }
  }

  /**
   * @returns {boolean}
   */
  isBalanced(root = this.root) {
    if (root === null) return root;

    const lHeight = this.height(root.left);
    const rHeight = this.height(root.right);

    return Math.abs(lHeight - rHeight) <= 1;
  }

  rebalance() {
    this.root = BuildTree(this.inOrder());
  }
}

module.exports = Tree;
