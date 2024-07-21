const Node = require('./Node');

/**
 * @param {number[]} array
 * @returns {Node}
 */
function BuildTree(array) {
  if (array.length <= 0) return null;

  const mid = Number.parseInt((array.length - 1) / 2);
  const node = new Node(array[mid]);

  node.left = BuildTree(array.slice(0, mid));
  node.right = BuildTree(array.slice(mid + 1));

  return node;
}

module.exports = { BuildTree };
