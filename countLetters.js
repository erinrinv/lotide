// FUNCTION IMPLEMENTATION
// Checks to see if equal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function
// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 

const countLetters = function(string){
  const count = {};

  for(let letter of string){
    if(letter !== " "){
      if(count[letter]){
        count[letter] += 1;

      }
      else{
        count[letter] = 1;
      }
    }

  }
  return count;
};


console.log(countLetters("lighthouse in the house"));