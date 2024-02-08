// FUNCTION IMPLEMENTATION
// Checks to see if equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (!Array.isArray(array1[i]) && array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Correct the function name from assertAraysEqual to assertArraysEqual
const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);

  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

//Function takeUntil
// return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. 
const takeUntil = function(array, callback) {
  let newArray = [];
  for(let i = 0; i <array.length; i++){
    if(callback(array[i])){
      newArray = array.slice(0, i);
      return newArray;
    }
  }
  return newArray;
};




// Test Code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
