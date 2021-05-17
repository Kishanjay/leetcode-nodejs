/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let startI = 0;
  let endI = numbers.length - 1;


  while (startI !== endI){
    let value = numbers[startI] + numbers[endI];

    if (value === target) {
      return [startI+1, endI+1];
    }
    else if (value > target) {
      endI --;
    } else {
      startI ++;
    }
  }

  return [-1, -1]
  throw Error("no solution found");
};