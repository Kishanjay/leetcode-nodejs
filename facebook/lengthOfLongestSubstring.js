/**
  Given a string s, find the length of the longest substring without repeating characters.

  Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Example 4:
  Input: s = ""
  Output: 0
 */


/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
  
//   let maxCount = 0;

//   // start point
//   for (let i = 0; i < s.length; i++) {

//     let chars = new Map();
//     let count = 0;
//     inner: 
//     for (let j = i; j < s.length; j ++) {
//       let char = s[j];
      
//       if (chars.has(char)) {
//         maxCount = Math.max(maxCount, count);
//         break inner;
//       }
      
//       chars.set(char, true);
//       count += 1;
//     }
//     maxCount = Math.max(count, maxCount);
//   }

//   return maxCount;
// };


var lengthOfLongestSubstring = function(s) {
  let maxCount = 0;

  let start = 0;
  let end = 0;

  let chars = new Map();
  while (end < s.length) {
    
    let char = s[end];

    if (chars.has(char) && chars.get(char) >= start){ // ignore all the older skipped characters
      maxCount = Math.max(maxCount, end-start); // @ previous char contained the longest streak
      start = chars.get(char)+1;
    }

    chars.set(char, end);
    end ++;
  }

  maxCount = Math.max(maxCount, end-start);

  return maxCount;
};

assert(lengthOfLongestSubstring("abcabcbb"), 3, "Example 1")
assert(lengthOfLongestSubstring("bbbbb"), 1, "Example 2")
assert(lengthOfLongestSubstring("pwwkew"), 3, "Example 3")
assert(lengthOfLongestSubstring(" "), 1, "Example 4")
assert(lengthOfLongestSubstring("dvdf"), 3, "Example 5")
assert(lengthOfLongestSubstring("abba"), 2, "Example 6")

function assert(a,b, msg) {
  if (a !== b) {
    console.log(`Assertion failure [${a} !== ${b}] (${msg})`);
  } else {
    console.log("success");
  }
}