/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let previous = Math.min;
  let cursor = nums.length - 1;
  while (cursor >= 0) {
    let cur = nums[cursor];

    if (cur < previous) {
      break;
    }
    previous = cur;

    cursor --;
  }
  // just reverse the whole array
  if (cursor === -1) {
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
      let temp = nums[i];
      nums[i] = nums[nums.length - 1 - i];
      nums[nums.length - 1 - i] = temp;
    }
    // console.log(nums);
    return
  }

  let selectedLeft = nums[cursor];
  let selectedLeftIndex = cursor;

  cursor ++;
  // pick last element that is bigger
  while (cursor <= nums.length - 1) {
    let cur = nums[cursor];
    if (cur <= selectedLeft){
      break;
    }

    cursor ++;
  }

  let selectedRight = nums[cursor - 1];
  let selectedRightIndex = cursor - 1;


  nums[selectedLeftIndex] = selectedRight;
  nums[selectedRightIndex] = selectedLeft;

  let offset = selectedLeftIndex+1;

  for (let i = 0; i < Math.floor((nums.length-selectedLeftIndex) / 2); i++){ 
    let temp = nums[i + offset];
    nums[i + offset] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = temp;
  }

  // console.log(nums);
};


// nextPermutation([6,7,4,8,6,5,3,2]); // 6 7 5 2 3 4 6 8

// nextPermutation([1,2,3]);

// nextPermutation([1,2,3,4]);

// nextPermutation([3,2,1]);
// nextPermutation([4, 3,2,1]);

// nextPermutation([1,1,5]);

// nextPermutation([1]);

// nextPermutation([1, 3, 2]);

// nextPermutation([2,3,1]);