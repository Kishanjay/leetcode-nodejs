function sortArray(nums: number[]): number[] {
  pivotSwap(nums, 0, nums.length-1);
  return nums;
};

function pivotSwap(nums, startI, startJ) {
  if (startI >= startJ) {
    return;
  }

  let i = startI;
  let j = startJ
  let pivot = Math.floor((i+j)/2);

  while (i < j) {
    if (nums[i] < nums[pivot]) {
      i++;
      continue;
    }
    else if (nums[j] > nums[pivot]) {
      j--;
      continue;
    }
    

    let n = nums[j];
    nums[j] = nums[i];
    nums[i] = n;
    if (i === pivot) {
      pivot = j
      i++
    }
    else if (j === pivot) {
      pivot = i;
      j--
    }
    else {
      i++;
      j--;
    }
  }
  
  // pivot swap rightside
  pivotSwap(nums, pivot+1, startJ)
  
  // pivot swap leftside
  pivotSwap(nums, startI, pivot-1)
}

const arr = [-74,48,-20,2,10,-84,-5,-9,11,-24,-91,2,-71,64,63,80,28,-30,-58,-11,-44,-87,-22,54,-74,-10,-55,-28,-46,29,10,50,-72,34,26,25,8,51,13,30,35,-8,50,65,-6,16,-2,21,-78,35,-13,14,23,-3,26,-90,86,25,-56,91,-13,92,-25,37,57,-20,-69,98,95,45,47,29,86,-28,73,-44,-46,65,-84,-96,-24,-12,72,-68,93,57,92,52,-45,-2,85,-63,56,55,12,-85,77,-39]
// const arr = [-74,2,10,-9]

// -2, 3 -5
// -2, -5 3
sortArray(arr)
console.log({arr})