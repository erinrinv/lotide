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

// Function Map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test code
const words = ["ground", "control", "to", "major", "tom"];

const test1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const test2 = map(words, (word) => word + ' ' + 'test');
assertArraysEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

const test3 = map(words, (word) => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

const test4 = map(words, (word) => word[4]);
assertArraysEqual(results4, ['n', 'r', undefined, 'r', undefined]);