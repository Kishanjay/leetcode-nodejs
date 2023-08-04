/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  wordDict.sort((a, b) => b.length - a.length);

  wordDict = removeSupersets(wordDict);

  let solvableIndexes = {};
  let curS = "";
  for (let i = s.length - 1; i >= 0; i--) {
    solvableIndexes[i] = false;
    curS = s[i].concat(curS);
    for (const word of wordDict) {
      if (
        curS.startsWith(word) &&
        (word.length + i >= s.length ||
          solvableIndexes[word.length + i] === true)
      ) {
        solvableIndexes[i] = true;
        break;
      }
    }
  }

  return solvableIndexes[0];
};

function removeSupersets(wordDict) {
  let result = [...wordDict];
  let i = 0;
  while (i < result.length) {
    const s = result.splice(i, 1)[0];
    if (wordBreak2(s, result)) {
      continue;
    } else {
      result.splice(i, 0, s);
      i++;
    }
  }

  return result;
}

function wordBreak2(s, wordDict) {
  if (wordDict.includes(s)) {
    return true;
  }

  for (const word of wordDict) {
    if (s.startsWith(word)) {
      const subResult = wordBreak2(s.slice(word.length), wordDict);
      if (subResult) {
        return true;
      }
    }
  }

  return false;
}

const r = wordBreak(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaba",
  [
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
    "aaaaaaaaaa",
    "ba",
  ]
);
console.log(r);
