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
  return true;
};

//FUNCTION IMPLEMENTATION
// uses eqArray function and calls its and displays whether array != or =
const assertArayEqual = function (array1, array2) {
  const result = eqArrays(array1, array2);

  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

// Function Middle
// posts the middle element of an array

const middle = function (array) {
  let newArray = [];
  // checks if array length is less than 3 if so returns null
  if (array.length < 3) {
    return newArray;
  }
  // if the array length is even then two elements are returned
  else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  }
  // if array is not even and is odd, and calculates
  // the middle element by rounding result of array.length / 2
  else {
    let num = Math.round(array.length / 2);
    newArray.push(array[num - 1]);
    return newArray;
  }
};



//TEST CODE

//console.log(middle([1])); // => []
//console.log(middle([1, 2])); // => []
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4, 5])); // => [3]
//console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]