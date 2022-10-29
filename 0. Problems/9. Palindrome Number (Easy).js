/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  xStr = x.toString();
  
  for (let i = 0; i < xStr.length/2; i++){
    if (xStr[i] !== xStr[xStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};