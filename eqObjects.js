// FUNCTION IMPLEMENTATION
// Checks to see if equal

const assertEquals = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
        result = true;
      } else if (
        Array.isArray(object1[element]) &&
        Array.isArray(object2[element])
      ) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEquals(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false);