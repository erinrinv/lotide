

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


module.exports = without;

