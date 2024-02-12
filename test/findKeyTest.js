const findKey = require("../findKey");
const assert = require('chai').assert;
// Chai
escribe("#findKey", () => {
  const test = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("should return noma for x => x.stars === 2", () => {
    assert.strictEqual(findKey(test, x => x.stars === 2), "noma");
  });
  it("should return Akaleri for x => x.stars === 2", () => {
    assert.strictEqual(findKey(test, x => x.stars === 3), "Akaleri");
  });
});

//findKey({
//  "Blue Hill": { stars: 1 },
//  "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
 // "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
//}, x => x.stars === 2) // => "noma"



//assertEqual(findKey({
 // "Blue Hill": { stars: 1 },
 // "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
 // "Ora":       { stars: 2 },
 // "Akelarre":  { stars: 3 }
//}, x => x.stars === 2), "noma");

//assertEqual(findKey({
 // "Blue Hill": { stars: 1 },
 // "Akaleri":   { stars: 3 },
 // "noma":      { stars: 2 },
 // "elBulli":   { stars: 3 },
 // "Ora":       { stars: 2 },
 // "Akelarre":  { stars: 3 }
//}, x => x.stars === 1), "Blue Hill");

//assertEqual(findKey({
 // "Blue Hill": { stars: 1 },
 // "Akaleri":   { stars: 3 },
 // "noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
 // "Ora":       { stars: 2 },
 // "Akelarre":  { stars: 3 }
//}, x => x.stars === 2), "jill");

//assertEqual(findKey({
//  "Blue Hill": { stars: 1 },
//  "Akaleri":   { stars: 3 },
//"noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
//}, x => x.stars === 3), "Akaleri");