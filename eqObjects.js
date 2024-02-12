const eqArrays = require("./eqArrays");



// eqObject Function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let state = false;

  // checks the length of keys
  if (key1.length === key2.length) {
    key1.forEach((element) => {
      if (key2.includes(element) && object1[element] === object2[element]) {
        state = true;
      } else if (
        Array.isArray(object1[element]) &&
        Array.isArray(object2[element])
      ) {
        state = eqArrays(object1[element], object2[element]);
      } else {
        state = false;
      }
    });
  }
  return state;
};

module.exports = eqObjects;