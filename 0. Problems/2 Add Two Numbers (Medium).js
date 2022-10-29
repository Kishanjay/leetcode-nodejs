/**
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
  Example 2:

  Input: l1 = [0], l2 = [0]
  Output: [0]
  Example 3:

  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]
  
  Constraints:
  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) {
    return;
  }

  let next = addTwoNumbers(l1?.next, l2?.next);
  const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

  if (val >= 10) {
    if (!next) {
      next = new ListNode(1, undefined);
    } else {
      next.val += 1;
    }

    let _next = next;
    while (_next.val >= 10) {
      if (!_next.next) {
        _next.next = new ListNode(1, undefined);
      } else {
        _next.next.val += 1;
      }
      _next.val = _next.val % 10;
      _next = _next.next;
    }
  }

  return new ListNode(val % 10, next);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToListNode(arr) {
  let result = undefined;
  for (let i = 0; i < arr.length; i++) {
    result = new ListNode(arr[arr.length - 1 - i], result);
  }
  return result;
}
function listNodeToArr(ln) {
  if (!ln) {
    return [];
  }

  const result = [ln.val];
  while (ln.next) {
    ln = ln.next;

    result.push(ln.val);
  }

  return result;
}

const r = addTwoNumbers(arrToListNode([5]), arrToListNode([5]));
// 9999999
// 9999
// ------- +
// 89990001
console.log(listNodeToArr(r));
