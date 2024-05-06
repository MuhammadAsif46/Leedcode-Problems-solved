// LeetCode first example solved the problem is:
//  number of special letters return size:

let numberOfSpecialCharacters = function (word) {
  let specialCharc = new Set();

  for (const char of word) {
    if (
      char.toLowerCase() !== char.toUpperCase() &&
      word.includes(char.toLowerCase()) &&
      word.includes(char.toUpperCase())
    ) {
      specialCharc.add(char.toLowerCase());
    }
  }

  return specialCharc.size;
};

numberOfSpecialCharacters("aaAbcBC");
// numberOfSpecialCharacters("abc");
// numberOfSpecialCharacters("abBCab");
// numberOfSpecialCharacters("aSifAsia"); //own hand
