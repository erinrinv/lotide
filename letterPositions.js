
// Letter Position Function
// which will return all the indices (zero-based positions) in the string where each character is found.


const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // checks to see if there is not a blank space
    // if not will continue and push the letter
    if (sentence[i] !== " ") {
      // checks if current character is in results if it does then it pushes the index to the corresponding array.
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
      }
      // if it doesnt exists yet then creates new key-value pair where the key is the character and value  is an array with the index of the character.
      else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;


