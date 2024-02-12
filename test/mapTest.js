const map = require("../map");
const { assert } = require("chai");

describe("#map", () => {
  const words1 = ["ground", "control", "to", "major", "tom"];
  it("should return [ 'g', 'c', 't', 'm', 't' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  const numbers = [1, 2, 3, 4, 5];
  it("should return [ 2, 4, 6, 8, 10 ] for 'numbers, nb => nb * 2'", () => {
    assert.deepEqual(map(numbers, nb => nb * 2), [ 2, 4, 6, 8, 10 ]);
  });
});

// Test code
//const words = ["ground", "control", "to", "major", "tom"];

//const test1 = map(words, (word) => word[0]);
//assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

//const test2 = map(words, (word) => word + ' ' + 'test');
//assertArraysEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

//const test3 = map(words, (word) => word.length);
//assertArraysEqual(results3, [6, 7, 2, 5, 3]);

//const test4 = map(words, (word) => word[4]);
//assertArraysEqual(results4, ['n', 'r', undefined, 'r', undefined]);