var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i ++ ){
    for (let j = i+1; j < nums.length; j ++ ){
      if (i + j === target) {
        return [i,j];
      }
    }
  }
  return result;
};


var twoSum = function(nums, target) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, true);
  }

  for (let num of nums) {
    let goal = target - num;
    if (goal !== num && map.has(goal)) {
      return [num, map.get(goal)]
    }
  }
};



var twoSum = function(nums, target) {
  let map = new Map();
  for (let num of nums) {
    let goal = target - num;
    if (goal !== num && map.has(goal)) {
      return [num, map.get(goal)]
    }
    map.set(num, true);
  }
};
