const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns a one-dimensional array when fed a two-dimensional array of numbers", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns a one-dimensional array when fed a two-dimensional array of strings", () => {
    assert.deepEqual((flatten(['yes', ['no'], 'maybe'])), ['yes', 'no', 'maybe']);
  });

  it("returns a one-dimensional array when fed a two-dimensional array of strings and numbers, without mutating types", () => {
    assert.deepEqual((flatten(['yes', 17, ['no', 999], 'maybe'])), ['yes', 17, 'no', 999, 'maybe']);
  });

  it("returns an empty array when fed an empty array", () => {
    assert.deepEqual((flatten([])), []);
  });

});