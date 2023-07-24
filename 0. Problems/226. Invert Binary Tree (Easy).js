/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const arr = treeToArr(root);
  console.log(arr);
  return arrToTree(arr);
};

function arrToTree(arr) {
  if (!arr || arr.length === 0) {
    return;
  }
  if (arr.length === 1) {
    const r = new TreeNode(arr[0]);
    return r;
  }
  if (arr.length === 2) {
    // bigger one is the left child
    const r = new TreeNode(arr[0], new TreeNode(arr[1]));
    return r;
  }
  if (arr.length === 3) {
    const r = new TreeNode(arr[1], new TreeNode(arr[2]), new TreeNode(arr[0]));
    return r;
  }

  const mid = Math.floor(arr.length / 2);
  const r = new TreeNode(
    arr[mid],
    arrToTree(arr.slice(mid + 1)),
    arrToTree(arr.slice(0, mid))
  );
  return r;
}

// DFS algorithm
function treeToArr(tree) {
  const arr = [];
  const stack = [];

  let node = tree;

  let visitLeft = true;
  while (node) {
    if (node.left && visitLeft) {
      stack.push(node);
      node = node.left;
    } else {
      arr.push(node.val);
      if (node.right) {
        visitLeft = true;
        node = node.right;
      } else {
        // This popped node shouldn't have its left child visited since we already been there.
        visitLeft = false;
        node = stack.pop();
      }
    }
  }
  return arr;
}
