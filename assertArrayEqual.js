
//assertArrayEqual function
// uses eqArray function and calls its and displays whether array != or =
const assertArayEqual = function(array1,array2){
  const result = eqArrays(array1,array2);

  if(result == false){
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
  else{
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  
};


module.exports = assertArraysEqual;