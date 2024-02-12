

//Function findKeyByValue
//which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function (object, value) {
  const keyArray = Object.keys(object);
  for (let key of keyArray) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;



