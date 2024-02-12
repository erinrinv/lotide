const assertEqual = require('../assertEqual');
const tail = require("../tail");
const assert = require('chai').assert;


// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
//assertEqual(words.length, 3);

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});