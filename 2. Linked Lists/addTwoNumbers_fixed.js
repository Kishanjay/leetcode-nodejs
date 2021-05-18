/**
 * Fixed - or at least how I feel like this question should've been.
 * 
 * Honestly since the assignment says to add the numbers in reverse
 * [2,4,3] + [5,6,4,1]
 * 
 * Logically the sum would then become
 * 1465 + 243
 * 
 * However the sum becomes this instead
 * 465 + 243 and the extra characters are just added to the back == 7081
 */



var addTwoNumbers = function(l1, l2) {
  let l1end = toDoublyLinkList(l1);
  let l2end = toDoublyLinkList(l2);
  
  let result = [];
  let p1 = l1end;
  let p2 = l2end;
  let curry = 0;
  while (p1 || p2) {
    let val = curry;
    if (p1) { 
      val += p1.val;
    }
    if (p2) {
      val += p2.val;
    }
    curry = val >= 10 ? 1 : 0;
    result.push(val%10);

    p1 = p1 ? p1.prev : undefined
    p2 = p2 ? p2.prev : undefined;
  }
  if (curry) {
    result.push(1);
  }
  return arrToList(result);
};

function toDoublyLinkList(l) {
  let cursor = l;
  let head;
  while (true){
    cursor.prev = head;
    head = cursor;

    if (!cursor.next){
      break;
    }

    cursor = cursor.next;
  }
  return cursor;
}

function arrToList(a) {
  let l;
  for (let i = 0; i < a.length; i++ ){
    l = new ListNode(a[a.length-1-i], l)
  }
  return l;
}

test([2,4,3], [5,6,4]);
test([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]);

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