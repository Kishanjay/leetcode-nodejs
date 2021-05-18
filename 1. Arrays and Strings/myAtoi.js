/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    [char, digit, ...s] = s;
    let factor = 1;
    if (!/[0-9]/.test(char)){
      if (char !== '-' && char !== '+'){ 
        return 0;
      }
      if (char === '-'){
        factor = -1;
      }
      if (!/[0-9]/.test(digit)){
        return 0;
      }

      s = [digit, ...s].join('');
    } else {
      s = [char, digit, ...s].join('');
    }

    let num = Number.parseInt(s);

    if (factor === -1) {
      return Math.min(2**31, num) * factor;
    } else {
      return Math.min((2**31)-1, num);
    }
};

var myAtoi = function(s) {

  let i = 0;
  let total = 0;
  let sign = 1;
  
  // skip spaces
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // skip sign
  if (s[i] === '-') {
    sign = -1;
    i++;
  }
  else if (s[i] === '+') {
    i++;
  }

  let zeroCC = ("0").charCodeAt(0);
  let nineCC = ("9").charCodeAt(0);

  // parse numbers 
  while (i < s.length) {
    let cc = s.charCodeAt(i);

    if (cc < zeroCC || cc > nineCC) {
      break;
    }

    let num = cc - zeroCC;
    total *= 10;
    total += num;

    i++;
  }

  return (sign === 1) ? Math.min(2**31-1, total) : (Math.min(2**31, total) * -1);
}

assert(myAtoi("42"), 42, "Q1");
assert(myAtoi("-42"), -42, "Q2");
assert(myAtoi("4193 with words"), 4193, "Q3");
assert(myAtoi("words and 987"), 0, "Q4");
assert(myAtoi("-91283472332"), -2147483648, "Q5");
assert(myAtoi("91283472332"), 2147483647, "Q6");
assert(myAtoi("  123"), 123, "custom");
assert(myAtoi("  -123"), -123, "custom");
assert(myAtoi("  -123x"), -123, "custom");
assert(myAtoi("  +-123"), 0, "custom");
assert(myAtoi("  -+123"), 0, "custom");




function assert(a,b, msg) {
  if (a !== b) {
    console.log(`Assertion failure [${a} !== ${b}] (${msg})`);
  } else {
    console.log("success");
  }
}

