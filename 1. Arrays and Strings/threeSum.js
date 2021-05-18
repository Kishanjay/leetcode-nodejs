/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   // count occurences of each number
//   let dict = {};
//   for (let num of nums){
//     if (!(num in dict)){
//       dict[num] = 0;
//     }
//     dict[num]+=1;
//   }

//   let result = [];
//   let numbers = Object.keys(dict);


//   let hist = {}; // prevent doubles by keeping history
//   for (let i = 0; i < numbers.length; i++) {
//     let key = numbers[i];
//     dict[key] --;
//     key = Number.parseInt(key);

//     for (let j = i; j < numbers.length; j++) {
//       let key2 = numbers[j];
//       if (dict[key2] <= 0){ continue; }
//       dict[key2] --;
//       key2 = Number.parseInt(key2);

//       let cur = key + key2;
//       let complement = Number.parseInt(-1 * cur);

//       if (complement in dict && dict[complement] > 0) {
//         let r = [key, key2, complement].sort();
//         let id = r.join(",");
//         if (!(id in hist)) {
//           result.push(r);
//           hist[id] = true;
//         }
//       }

//       dict[key2] ++;
//     }

//     dict[key] ++;
//   }

//   return result;
// };

var threeSum = function(nums) {

  let hist = new Map();

  nums.sort((a, b) => a-b);

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]){
      continue;
    } // if we already parsed a number skip  it the next time

    let num = nums[i];
    if (num > 0) {
      break; // no need to proceed
    }

    let low = i+1;
    let high = nums.length - 1;

    while (low < high) {
      let val = num + nums[low] + nums[high];
      if (val === 0) {
        let key = [num, nums[low], nums[high]].join(',');
        if (!hist.has(key)){
          hist.set(key)
          result.push([num, nums[low], nums[high]]);
        }
        low++; high--;
      } else if (val < 0) {
        low ++;
      } else {
        high --;
      }
    }

  }


  return result;
}


assert(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]], "Example 1")
assert(threeSum([0,0,0,0,1,1,1,1,-1,-1,-1,-1]), [[-1,0,1],[0,0,0]], "Example 1")

function assert(a,b, msg) {
  if (a !== b) {
    console.log(`Assertion failure (${msg})`);
    console.log({a, b});
  } else {
    console.log("success");
  }
}