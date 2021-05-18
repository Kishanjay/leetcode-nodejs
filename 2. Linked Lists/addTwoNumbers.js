/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = [];
  let curry = 0;
  while (l1 || l2) {
    let val = curry;
    if (l1) { 
      val += l1.val;
    }
    if (l2) {
      val += l2.val;
    }
    curry = val >= 10 ? 1 : 0;
    result.push(val%10);

    l1 = l1 ? l1.next : undefined
    l2 = l2 ? l2.next : undefined;
  }
  if (curry) {
    result.push(1);
  }

  return arrToList(result);
};

function arrToList(a) {
  let l;
  for (let i = 0; i < a.length; i++ ){
    l = new ListNode(a[a.length-1-i], l)
  }
  return l;
}

test([2,4,3], [5,6,4, 1]);
// test([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]);

function test(a, b) {
  const l1 = arrToList(a);
  const l2 = arrToList(b);

  const l = addTwoNumbers(l1, l2);
  console.log({l})
}



function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}