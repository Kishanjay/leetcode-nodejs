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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isValidSubtree(root, Math.min, Math.max);
};

function isValidSubtree(node, min, max) {
  if (!node) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }
  return isValidSubtree(node.left, min, node.val) && isValidSubtree(node.right, node.val, max);
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function arrToTree(arr) {
  let root = new TreeNode(arr[0])
  
  const queue = [];
  queue.push(root);

  let i = 1;
  while (true){
    let head = queue.shift();

    if (i >= arr.length) {
      break;
    }
    let left = arr[i] && new TreeNode(arr[i]);
    queue.push(left)
    head.left = left;
    i++;

    if (i >= arr.length) {
      break;
    }
    let right = arr[i] && new TreeNode(arr[i]);
    queue.push(right)
    head.right = right;
    i++;
  }
  return root;
}

const sample1 = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(
    7,
    new TreeNode(3),
    new TreeNode(8)
  )
)
console.log(isValidBST(sample1));

test([1, 0]);
test([2,1,3]);
test([5,4,6,null,null,3,7])

function test(a) {
  const result = isValidBST(arrToTree(a));
  console.log({result });
}
