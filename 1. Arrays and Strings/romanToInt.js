/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let index = s.length -1 - i;

    let c = s[index];
    let next = index >= 1 ? s[index-1] : undefined;

    if (c === 'I'){
      total += 1;
    }
    else if (c === 'V'){
      total += 5;
      if (next === 'I') {
        total --;
        i++;
      }
    }
    else if (c === 'X'){
      total += 10;
      if (next === 'I') {
        total --;
        i++;
      }
    }
    else if (c === 'L'){
      total += 50;
      if (next === 'X') {
        total -= 10;
        i++;
      }
    }
    else if (c === 'C'){
      total += 100;
      if (next === 'X') {
        total -= 10;
        i++;
      }
    }
    else if (c === 'D'){
      total += 500;
      if (next === 'C') {
        total -= 100;
        i++;
      }
    }
    else if (c === 'M'){
      total += 1000;
      if (next === 'C') {
        total -= 100;
        i++;
      }
    }
  }
  return total; 
};

var romanToInt = function(s) {
  const map = { 
    I: 1,
    V: 5, 
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    undefined: 0,
  };

  let total = 0;
  let i = 0;
  while (i < s.length) {
    let c = s[i];
    let next = i+1 < s.length ? s[i+1] : undefined;
    
    if (map[c] < map[next]) {
      total += map[next] - map[c];
      i+=2;
    } else {
      total += map[c];
      i++;
    }
  }
  return total;
}
assert(romanToInt("IV"), 4, "Q1");
assert(romanToInt("XV"), 15, "Q2");
assert(romanToInt("IIII"), 4, "Q3");
assert(romanToInt("LVIII"), 58, "Q4");
assert(romanToInt("MCMXCIV"), 1994, "Q5");


function assert(a,b, msg) {
  if (a !== b) {
    console.log(`Assertion failure [${a} !== ${b}] (${msg})`);
  } else {
    console.log("success");
  }
}

