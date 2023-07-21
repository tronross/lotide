const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const petNames = {
  dog: "Polar",
  cat: "Peach",
  bear: "Harold",
  chipmunk: "Franz"
};

describe("#findKeyByValue", () => {
  it("returns the key when its corresponding value is input", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });



});