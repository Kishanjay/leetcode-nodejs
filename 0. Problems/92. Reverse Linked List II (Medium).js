/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let cur = head;

  let leftPtr = undefined;
  let i = 1;
  while (cur && i !== left) {
    leftPtr = cur;
    cur = cur.next;

    i++;
  }

  let stack = [];
  while (cur && i !== right) {
    stack.push(cur);

    cur = cur.next;
    i++;
  }
  let end = cur?.next;

  stack.push(cur);

  if (!leftPtr) {
    leftPtr = stack.pop();
    head = leftPtr;
  }

  while (stack.length) {
    const nextNode = stack.pop();
    leftPtr.next = nextNode;
    leftPtr = leftPtr.next;
  }

  if (end) {
    leftPtr.next = end;
  } else if (leftPtr) {
    leftPtr.next = null;
  }

  return head;
};
