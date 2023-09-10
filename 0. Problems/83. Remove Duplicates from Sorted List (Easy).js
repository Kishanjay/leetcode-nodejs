/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  let cur = head;
  let curValue = head.val;
  let firstNodeWithValue = head;

  while (cur) {
    if (curValue !== cur.val) {
      firstNodeWithValue.next = cur;
      firstNodeWithValue = cur;
      curValue = cur.val;
    }

    cur = cur.next;
  }

  if (firstNodeWithValue) {
    firstNodeWithValue.next = null;
  }

  return head;
};
