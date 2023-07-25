const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  test_fi: "The Expanse"
};

describe("#findKeyByValue", () => {
  it("returns the key when its corresponding value is input", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });

  it("returns undefined when the input value has no corresponding key", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  });

  it("returns the first key when its corresponding input value has more than one matching key", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
  });

});