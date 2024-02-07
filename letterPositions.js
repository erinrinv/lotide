//FUNCTION IMPLEMENTATION

const eqArrays = function (array1, array2) {
  //Check to see if array is equal/same length
    if (array1.length !== array2.length) {
      return false;
    }
    // for to to go through array
    for (let i = 0; i < array1.length; i++) {
      // checks the content of the array and see if they are equal
      if (!Array.isArray(array1[i]) && array1[i] !== array2[i]) {
        return false;
      }
    }
    //testing purpose to see if its true or not in comparsion
    //console.log('a')
    return true
    
  };

//assertArrayEqual function
// uses eqArray function and calls its and displays whether array != or =
const assertArraysEqual = function(array1,array2){
  const result = eqArrays(array1,array2);

  if(result == false){
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);

};







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



// Test Code

assertArraysEqual(letterPositions("hello").e, [1]);
