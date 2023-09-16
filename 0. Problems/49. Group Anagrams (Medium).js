/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = {};

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");

    if (!(sortedWord in groups)) {
      groups[sortedWord] = [word];
    } else {
      groups[sortedWord].push(word);
    }
  }

  return Object.values(groups);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
  const groups = [];

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");

    let group = groups.find((g) => g.key === sortedWord);

    if (!group) {
      group = {
        key: sortedWord,
        words: [],
      };
      groups.push(group);
    }

    group.words.push(word);
  }

  return groups.map((group) => group.words);
};
