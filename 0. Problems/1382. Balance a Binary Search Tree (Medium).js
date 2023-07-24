/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let arr = [];
  let stack = [];

  let node = root;

  while (node) {
    if (node.left) {
      stack.push(node);
      const ln = node.left;
      node.left = null;
      node = ln;
    } else {
      arr.push(node.val);

      if (node.right) {
        node = node.right;
      } else {
        node = stack.pop();
      }
    }
  }

  return createBinarySearchTree(arr);
};

function createBinarySearchTree(arr) {
  if (arr.length === 0) {
    return;
  }

  const halfI = Math.floor(arr.length / 2);
  const left = createBinarySearchTree(arr.slice(0, halfI));
  const right = createBinarySearchTree(arr.slice(halfI + 1));
  return new TreeNode(arr[halfI], left, right);
}

console.log(createBinarySearchTree([1, 2, 3, 4, 5, 6, 7]));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

balanceBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
