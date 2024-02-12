//TEST CODE

const middle = require("../middle");
//const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

//assertArraysEqual(middle([1])); // => []
//assertArraysEqual(middle([1, 2])); // => []
//assertArraysEqual(middle([1, 2, 3])); // => [2]
//assertArraysEqual(middle([1, 2, 3, 4, 5])); // => [3]
//assertArraysEqual(middle([1, 2, 3, 4])); // => [2, 3]
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});