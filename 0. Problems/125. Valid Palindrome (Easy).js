/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  ss = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      ss += String.fromCharCode(s.charCodeAt(i) + 32);
    }
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      ss += s[i];
    }
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      ss += s[i];
    }
  }

  s = ss;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const aVal = "a".charCodeAt(0);
  const zVal = "z".charCodeAt(0);

  const ZVal = "Z".charCodeAt(0);
  const val0 = "0".charCodeAt(0);
  const val9 = "9".charCodeAt(0);

  const deltaCase = zVal - ZVal;

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
      let iVal = s.charCodeAt(i);
      if (iVal <= ZVal && !(iVal >= val0 && iVal <= val9)) {
          iVal += deltaCase;
      }

      let jVal = s.charCodeAt(j);
      if (jVal <= ZVal && !(jVal >= val0 && jVal <= val9)) {
          jVal += deltaCase;
      }

      if((iVal < aVal || iVal > zVal) && !(iVal >= val0 && iVal <= val9)) {
          i++;
          continue;
      }
      if((jVal < aVal || jVal > zVal) && !(jVal >= val0 && jVal <= val9)) {
          j--;
          continue;
      }

      if (iVal !== jVal){
          return false;
      }

      i++;
      j--;
  }

  return true;
};


var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^0-9a-z]+/g,"")
  const sRev = s.split("").reverse().join("")
  return s === sRev
};