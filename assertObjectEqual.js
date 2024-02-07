// FUNCTION IMPLEMENTATION
// Checks to see if equal

const assertEquals = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to compare two arrays together and return true or false if they are equal

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



// eqObject Function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let state = false;

  // checks the length of keys
  if (key1.length === key2.length) {
    key1.forEach((element) => {
      if (key2.includes(element) && object1[element] === object2[element]) {
        state = true;
      } else if (
        Array.isArray(object1[element]) &&
        Array.isArray(object2[element])
      ) {
        state = eqArrays(object1[element], object2[element]);
      } else {
        state = false;
      }
    });
  }
  return state;
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};






