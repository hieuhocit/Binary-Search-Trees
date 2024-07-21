# Binary Search Tree

This repository contains a `Tree` class implementation for a binary search tree (BST) in JavaScript. The class provides methods for insertion, deletion, searching, and various tree traversals. It also includes methods for checking tree balance and rebalancing the tree.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Usage](#usage)
- [Methods](#methods)
- [Example](#example)
- [Author](#author)

## Installation

To use this `Tree` class, make sure you have Node.js installed. Then, clone the repository and install the dependencies:

**1. Clone the repository:**

```
git clone https://github.com/hieuhocit/Binary-Search-Trees.git
```

**2. Install Dependencies:**

```
npm install
```

## Running Tests

**1. Run the tests:**

```
npm test
```

## Usage

```
const Tree = require('./BalancedBST.js');
```

## Methods

`constructor(array)`

- **Parameters:** array (Array of numbers)
- **Description:** Initializes the tree with the unique sorted numbers from the provided array.

`insert(value, node = this.root)`

- **Parameters:**
  - value (Number) The value to be inserted.
  - node (Node): The node to start insertion from. Defaults to the root.
- **Returns:** The updated node.

`deleteItem(value, node = this.root)`

- **Parameters:**
  - value (Number): The value to be deleted.
  - node (Node): The node to start deletion from. Defaults to the root.
- **Returns:** The updated node after deletion.

`find(value, node = this.root)`

- **Parameters:**
  - value (Number): The value to find.
  - node (Node): The node to start the search from. Defaults to the root.
- **Returns:** The node containing the value, or null if not found.

`levelOrder(callback = undefined)`

- **Parameters:** callback (Function): Optional callback function to execute for each node's data.
- **Description:** Performs a level-order (breadth-first) traversal of the tree.
- **Returns:** None (prints data or executes callback).

`recursiveLevelOrder(callback = undefined, queue = [this.root])`

- **Parameters:**
  - callback (Function): Optional callback function to execute for each node's data.
  - queue (Array): The queue used for recursive traversal. Defaults to [this.root].
- **Description:** Performs a recursive level-order traversal of the tree.
- **Returns:** None (prints data or executes callback).

`inOrder(callback = undefined, arr = [], node = this.root)`

- **Parameters:**
  - callback (Function): Optional callback function to execute for each node's data.
  - arr (Array): Array to collect node data if no callback is provided.
  - node (Node): The node to start traversal from. Defaults to the root.
- **Returns:** An array of node data in in-order traversal.

`preOrder(callback = undefined, arr = [], node = this.root)`

- **Parameters:**
  - callback (Function): Optional callback function to execute for each node's data.
  - arr (Array): Array to collect node data if no callback is provided.
  - node (Node): The node to start traversal from. Defaults to the root.
- **Returns:** An array of node data in pre-order traversal.

`postOrder(callback = undefined, arr = [], node = this.root)`

- **Parameters:**
  - callback (Function): Optional callback function to execute for each node's data.
  - arr (Array): Array to collect node data if no callback is provided.
  - node (Node): The node to start traversal from. Defaults to the root.
- **Returns:** An array of node data in post-order traversal.

`height(node = this.root)`

- **Parameters:** node (Node): The node to start from. Defaults to the root.
- **Returns:** The height of the tree.

`depth(node, root = this.root)`

- **Parameters:**
  - node (Node): The node whose depth is to be calculated.
  - root (Node): The starting root node. Defaults to the root.
- **Returns:** The depth of the specified node.

`isBalanced(root = this.root)`

- **Parameters:** root (Node): The root node to check balance. Defaults to the root.
- **Returns:** true if the tree is balanced, otherwise false.

`rebalance()`

- **Description:** Rebalances the tree to ensure it is balanced by rebuilding it from its in-order traversal.

## Example

```
const Tree = require('./Tree');

// Create a new tree with random numbers
const tree = new Tree([10, 5, 15, 3, 7, 12, 18]);

// Insert a new value
tree.insert(20);

// Delete a value
tree.deleteItem(5);

// Find a value
const node = tree.find(15);
console.log(node); // Outputs the node with data 15

// Print tree in different orders
console.log('Level Order:');
tree.levelOrder(value => console.log(value));

console.log('Pre Order:');
console.log(tree.preOrder());

console.log('Post Order:');
console.log(tree.postOrder());

console.log('In Order:');
console.log(tree.inOrder());

// Check if the tree is balanced
console.log('Is Balanced:', tree.isBalanced());

// Rebalance the tree
tree.rebalance();
console.log('Is Balanced after rebalancing:', tree.isBalanced());

```

## Author

This project is developed by [@hieuhocit](https://github.com/hieuhocit).
