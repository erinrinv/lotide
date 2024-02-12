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

module.exports = middle;

