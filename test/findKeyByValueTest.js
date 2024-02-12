const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("should return drama for The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined for Scrubs", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
  });
});


//test code
//const bestTVShowsByGenre = {
//  sci_fi: "The Expanse",
//  comedy: "Brooklyn Nine-Nine",
//  drama: "The Wire",
//};

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);