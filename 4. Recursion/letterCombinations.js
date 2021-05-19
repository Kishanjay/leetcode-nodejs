/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z']
  ];

  let result = [];
  for (let d of digits) {
    let chars = map[d-2];

    if (!result.length) {
      result = chars;
      continue;
    }
    
    let newResult = [];
    for (let c of chars) {
      for (let entry of result){
        newResult.push(entry + c);
      }
    }

    result = newResult
  }  
  return result;
};

console.log(letterCombinations("23"));