
// countLetters Function
// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function (string) {
  const count = {};

  for (let letter of string) {
    // filters if there are spaces in string
    if (letter !== " ") {
      // If letter has been already counted then it adds 1 to the count{}
      if (count[letter]) {
        count[letter] += 1;
      }
      // If letter does not exist in the count after going through the loop then it creates it
      else {
        count[letter] = 1;
      }
    }
  }
  // returns the final result
  return count;
};


module.exports = countLetters;
