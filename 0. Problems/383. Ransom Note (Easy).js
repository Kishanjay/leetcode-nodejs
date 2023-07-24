/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let mmap = {};
  for (let i = 0; i < magazine.length; i++) {
    let c = magazine[i];
    if (c in mmap) {
      mmap[c]++;
    } else {
      mmap[c] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let c = ransomNote[i];

    if (!(c in mmap)) {
      return false;
    } else {
      let rem = --mmap[c];
      if (rem < 0) {
        return false;
      }
    }
  }

  return true;
};
