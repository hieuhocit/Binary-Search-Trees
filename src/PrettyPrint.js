/**
 * @param {Tree} node
 * @param {string} prefix
 * @param {boolean} isLeft
 */
function PrettyPrint(node, prefix = '', isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    PrettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    PrettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

module.exports = { PrettyPrint };