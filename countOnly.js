// FUNCTION IMPLEMENTATION
// Checks to see if equal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Function countOnly
// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results ={};

  for(const item of allItems){
    if(itemsToCount[item]){
      if(results[item]){
        results[item] += 1;
      }
      else{
        results[item] = 1;
      }
    }
  }

  return results;
};


