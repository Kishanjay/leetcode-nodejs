/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return head;
  }

  const map = new Map();

  const newHead = new Node();
  let newCur = newHead;
  let cur = head;
  while (true) {
    map.set(cur, newCur);
    newCur.val = cur.val;

    if (cur.next) {
      newCur.next = new Node(); // Add the next node w/o reason
      newCur = newCur.next;
      cur = cur.next; // Move to the next node.
    } else {
      break;
    }
  }

  cur = head;
  newCur = newHead;
  while (cur) {
    if (cur.random) {
      if (map.has(cur.random)) {
        newCur.random = map.get(cur.random);
      } else {
        console.log(`unexpected.`);
      }
    }
    newCur = newCur.next;
    cur = cur.next;
  }

  return newHead;
};
