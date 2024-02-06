// FUNCTION IMPLEMENTATION
// Checks to see if equal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
const assertArayEqual = function(array1,array2){
  const result = eqArrays(array1,array2);

  if(result == false){
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);

};