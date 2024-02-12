// Paste assert from assertequal.js.
// Tail will check array to see if its the same
// but cant modify it so tail function will create new array without the
// "head" element



const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
};

module.exports = tail;