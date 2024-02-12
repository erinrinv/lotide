
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
  

  module.exports = eqArrays;