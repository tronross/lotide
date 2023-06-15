const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("returns a one-dimensional array when fed a two-dimensional array of numbers", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns a one-dimensional array when fed a two-dimensional array of strings", () => {
    assert.deepEqual((flatten(['yes', ['no'], 'maybe'])), ['yes', 'no', 'maybe']);
  });

  it("returns a one-dimensional array maintaining types when fed a two-dimensional array of strings and numbers", () => {
    assert.deepEqual((flatten(['yes', 17, ['no', 999], 'maybe'])), ['yes', 17, 'no', 999, 'maybe']);
  });

  it("returns an empty array when fed an empty array", () => {
    assert.deepEqual((flatten([])), []);
  });
  // it("returns 'So' for ['So', 'much', 'meow']", () => {
  //   assert.strictEqual(head(['So', 'much', 'meow']), 'So');
  // });

  // it("fails when trying to return the head of an empty array", () => {
  //   assert.isNotOk(head([]), 'this will fail');
  // });

});


// // TEST CODE
// // Test case (a):
// console.log("Source array: ", [1, 2, [3, 4], 5, [6]]);
// console.log("Flattened array: ", flatten([1, 2, [3, 4], 5, [6]]));
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

// // Test case (b):
// console.log("Source array: ", ["1", "2", "3", ["11", "12"]]);
// console.log("Flattened array: ", flatten(["1", "2", "3", ["11", "12"]]));
// assertArraysEqual((flatten(["1", "2", "3", ["11", "12"]])), ["1", "2", "3", "11", "12"]);

// // Test case (c):
// console.log("Source array: ", ['yes', ['no'], 'maybe']);
// console.log("Flattened array: ", flatten(['yes', ['no'], 'maybe']));
// assertArraysEqual((flatten(['yes', ['no'], 'maybe'])), ['yes', 'no', 'maybe']);