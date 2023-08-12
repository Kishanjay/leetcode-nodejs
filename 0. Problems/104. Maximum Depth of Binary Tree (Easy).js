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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }

  let maxLeft = maxDepth(root.left);
  let maxRight = maxDepth(root.right);

  return 1 + Math.max(maxLeft, maxRight);
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let currentNode = root;
  let currentLevel = 1;
  let maxLevel = currentLevel;
  let nodeHist = [];

  while (true) {
    currentNode.visited = true;

    if (currentNode.left !== null && !currentNode.left.visited) {
      console.log(`left`);
      nodeHist.push(currentNode);
      currentNode = currentNode.left;
      currentLevel++;

      maxLevel = Math.max(maxLevel, currentLevel);
    } else if (currentNode.right !== null && !currentNode.right.visited) {
      console.log(`right`);
      nodeHist.push(currentNode);
      currentNode = currentNode.right;
      currentLevel++;

      maxLevel = Math.max(maxLevel, currentLevel);
    } else if (!nodeHist.length) {
      break;
    } else {
      currentNode = nodeHist.pop();
      currentLevel--;
    }
  }

  return maxLevel;
};
