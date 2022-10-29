/**
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 
Constraints:
1 <= s.length <= 20
1 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // console.log({ s, p });

  let si = 0;
  let i = 0;
  for (; i < p.length; i++) {
    pc = p[i];
    // console.log({ sr: s.slice(si), pr: p.slice(i) });

    if (i + 1 < p.length && p[i + 1] === "*") {
      continue; // Go to next p
    } else if (s[si] === pc || pc === ".") {
      si++;
    } else if (pc === "*") {
      while (s[si] === p[i - 1] || p[i - 1] === ".") {
        // For every match like this, go to the next pp, or stick with the current pp - if ANY is a match, its a match.
        if (isMatch(s.slice(si), p.slice(i + 1))) {
          return true;
        }

        si++;
        if (si >= s.length) break;
      }
    } else {
      return false;
    }

    if (si > s.length) {
      return false;
    }
  }

  if (si < s.length) {
    return false;
  }

  return true;
};

// console.log(isMatch("aa", "a"));
// console.log(isMatch("aa", "a*"));
// console.log(isMatch("aab", "c*a*b"));
// console.log(isMatch("aaa", "a*a"));
// console.log(isMatch("aaaabbbbb", ".*b*"));
// console.log(isMatch("aaaaa", "ab*a*c*a*a"));

// console.log(isMatch("a", "a*a"));

// console.log(isMatch("bbbba", ".*a*a"));
// console.log(isMatch("bbbbaa", ".*a*aa"));

// console.log(isMatch("a", ".*..a*"));
// console.log(isMatch("a", "..a*"));
