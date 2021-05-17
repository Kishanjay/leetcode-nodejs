/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertIndex = 0; 
    let previousNum = undefined;
    for (let i = 0; i < nums.length; i++ ){
      if (nums[i] !== previousNum) {
        nums[insertIndex] = previousNum = nums[i];
        insertIndex ++;
      }
    }
    return insertIndex;
};

let a = [1,1,2];
assert(removeDuplicates(a), 2, "Example #1");
assert(a[0], 1, "Example #1.1")
assert(a[1], 2, "Example #1.2")


function assert(a,b, msg) {
  if (a !== b) {
    console.log(`Assertion failure [${a} !== ${b}] (${msg})`);
  } else {
    console.log(`Success (${msg})`);
  }
}

