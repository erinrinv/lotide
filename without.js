
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

//FUNCTION IMPLEMENTATION
// uses eqArray function and calls its and displays whether array != or =
const assertArayEqual = function(array1,array2){
  const result = eqArrays(array1,array2);

  if(result == false){
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);

};


//Without function
// takes two parameters an array and an item to remove from array

const without = function(array,remove){
 
 // iterates over the array 
  for(let i = 0; i < array.length; i++){
    // iterates over element of prvided from remove 
    for(let b = 0; b < remove.length; b++){
      // if a match removes element from existing array
      if(array[i] === remove[b]){
        array.splice(i,1);
      }
    }
    // returns modified array
    return array;

  }


};

//test code
//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertAraysEqual(words, ["hello", "world", "lighthouse"]);
