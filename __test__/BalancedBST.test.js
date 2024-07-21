const Node = require('../src/Node');
const { BuildTree } = require('../src/BuildTree');
const { PrettyPrint } = require('../src/PrettyPrint');
const Tree = require('../src/BalancedBST');

describe('Binary Search Tree 1', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('constructor initializes tree correctly', () => {
    expect(tree.root.data).toBe(5);
    expect(tree.root.left.data).toBe(2);
    expect(tree.root.right.data).toBe(7);
  });

  test('insert method adds new value correctly', () => {
    tree.insert(10);
    expect(tree.find(10)).not.toBeNull();
    expect(tree.find(10).data).toBe(10);
  });

  test('deleteItem method removes value correctly', () => {
    tree.deleteItem(3);
    expect(tree.find(3)).toBeNull();
  });

  test('find method returns correct node', () => {
    let node = tree.find(4);
    expect(node).not.toBeNull();
    expect(node.data).toBe(4);
  });

  test('levelOrder method traverses tree correctly', () => {
    const result = [];
    tree.levelOrder((value) => result.push(value));
    expect(result).toEqual([5, 2, 7, 1, 3, 6, 8, 4, 9]);
  });

  test('recursiveLevelOrder method traverses tree correctly', () => {
    const result = [];
    tree.recursiveLevelOrder((value) => result.push(value));
    expect(result).toEqual([5, 2, 7, 1, 3, 6, 8, 4, 9]);
  });

  test('inOrder method returns sorted array', () => {
    const result = tree.inOrder();
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('preOrder method returns correct array', () => {
    const result = tree.preOrder();
    expect(result).toEqual([5, 2, 1, 3, 4, 7, 6, 8, 9]);
  });

  test('postOrder method returns correct array', () => {
    const result = tree.postOrder();
    expect(result).toEqual([1, 4, 3, 2, 6, 9, 8, 7, 5]);
  });

  test('height method returns correct height', () => {
    expect(tree.height()).toBe(4);
  });

  test('depth method returns correct depth', () => {
    let node = tree.find(4);
    expect(tree.depth(node)).toBe(3);
  });

  test('isBalanced method returns true for balanced tree', () => {
    expect(tree.isBalanced()).toBe(true);
  });

  test('rebalance method rebalances the tree correctly', () => {
    tree.insert(10);
    tree.insert(11);
    tree.insert(12);
    expect(tree.isBalanced()).toBe(false);
    tree.rebalance();
    expect(tree.isBalanced()).toBe(true);
  });
});

describe('Binary Search Tree 2', () => {
  let tree;

  beforeEach(() => {
    const randomArray = getRandomArray(100, 101);
    tree = new Tree(randomArray);
  });

  test('Confirm the tree is balanced after creation', () => {
    expect(tree.isBalanced()).toBe(true);
  });

  test('Print all elements in level, pre, post, and in order', () => {
    const levelOrder = [];
    const preOrder = [];
    const postOrder = [];
    const inOrder = [];

    tree.levelOrder((value) => levelOrder.push(value));
    tree.preOrder((value) => preOrder.push(value));
    tree.postOrder((value) => postOrder.push(value));
    inOrder.push(...tree.inOrder());

    console.log('Level Order:', levelOrder);
    console.log('Pre Order:', preOrder);
    console.log('Post Order:', postOrder);
    console.log('In Order:', inOrder);

    expect(levelOrder.length).toBeGreaterThan(0);
    expect(preOrder.length).toBeGreaterThan(0);
    expect(postOrder.length).toBeGreaterThan(0);
    expect(inOrder.length).toBeGreaterThan(0);
  });

  test('Unbalance the tree by adding numbers > 100', () => {
    tree.insert(150);
    tree.insert(200);
    tree.insert(250);
    expect(tree.isBalanced()).toBe(false);
  });

  test('Balance the tree by calling rebalance', () => {
    tree.insert(150);
    tree.insert(200);
    tree.insert(250);
    expect(tree.isBalanced()).toBe(false);
    tree.rebalance();
    expect(tree.isBalanced()).toBe(true);
  });

  test('Print all elements in level, pre, post, and in order after rebalancing', () => {
    tree.insert(150);
    tree.insert(200);
    tree.insert(250);
    tree.rebalance();

    const levelOrder = [];
    const preOrder = [];
    const postOrder = [];
    const inOrder = [];

    tree.levelOrder((value) => levelOrder.push(value));
    tree.preOrder((value) => preOrder.push(value));
    tree.postOrder((value) => postOrder.push(value));
    inOrder.push(...tree.inOrder());

    console.log('Level Order after rebalancing:', levelOrder);
    console.log('Pre Order after rebalancing:', preOrder);
    console.log('Post Order after rebalancing:', postOrder);
    console.log('In Order after rebalancing:', inOrder);

    expect(levelOrder.length).toBeGreaterThan(0);
    expect(preOrder.length).toBeGreaterThan(0);
    expect(postOrder.length).toBeGreaterThan(0);
    expect(inOrder.length).toBeGreaterThan(0);
  });
});

function getRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}
