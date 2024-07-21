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
   */
  insertValue(value) {

  }

  /**
   * @param {number} value
   */
  deleteItem(value) {

  }

  /**
   * @param {number} value 
   * @returns {Node}
   */
  find(value) {
    
  }
}

const arr = [3, 2, 1, 2, 5, 4, 1, 2, 3, 7, 6];
const tree = new Tree(arr);

PrettyPrint(tree.root);
