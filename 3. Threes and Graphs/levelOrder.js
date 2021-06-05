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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
      return [];
  }
  
  let level = 0;
  let queue = {0: [root]}; // level as key
  
  while (level in queue && queue[level].length) {
      let curQueue = queue[level];
      
      let nextLevel = [];
      for (let i = 0; i < curQueue.length; i++) {
          let cur = curQueue[i];
          if (cur.left) {
              nextLevel.push(cur.left);
          }
          if (cur.right) {
              nextLevel.push(cur.right);
          }
      }
      
      queue[level+1] = nextLevel;
      level += 1;
  }
  
  let result = [];
  for (let i = 0; i < level; i ++ ){
      let levelNodes = queue[i];
      result.push(levelNodes.map(n => n.val));
  }
  
  return result;
  
};