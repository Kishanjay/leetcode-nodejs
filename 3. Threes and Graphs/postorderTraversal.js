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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) {
      return [];
  }
  
  return traverse(root);
};

function traverse(node) {
  let result = [];
  if (node.left) {
      result = [...result, ...traverse(node.left)];
  }
  if (node.right) {
      result = [...result, ...traverse(node.right)];
  }
  result.push(node.val);
  return result;
}