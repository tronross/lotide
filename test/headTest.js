const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns a single element when fed an array containing a single element", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns 'So' for ['So', 'much', 'meow']", () => {
    assert.strictEqual(head(['So', 'much', 'meow']), 'So');
  });

  it("fails when trying to return the head of an empty array", () => {
    assert.isNotOk(head([]), 'this will fail');
  });

});