const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array when fed an array containing a single element", () => {
    assert.deepEqual(middle(['5']), []);
  });

  it("returns an empty array when fed an array containing two elements", () => {
    assert.deepEqual(middle(['5', 5]), []);
  });

  it("returns an array containing a single element when fed an array containing an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns an array containing two elements when fed an array containing an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 77]), [3, 4]);
  });

});