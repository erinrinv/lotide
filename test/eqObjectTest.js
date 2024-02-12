const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const cd = { c: "1", d: ["2", 3] };
  it("should return true for (ab, ba)", () => {
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("should return false for (ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("should return true for (cd, dc)", () => {
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("should return false for (cd, cd2)", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});


// TEST CODE

//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject = { size: "medium", color: "red" };
//eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEquals(eqObjects(shirtObject, anotherShirtObject), true);

//const longSleeveShirtObject = {
//  size: "medium",
 // color: "red",
//  sleeveLength: "long",
//};
//eqObjects(shirtObject, longSleeveShirtObject); // => false
//assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false);