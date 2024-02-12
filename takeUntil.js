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


module.exports = takeUntil;


