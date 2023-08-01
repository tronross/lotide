const assert = require('chai').assert;
const findKey = require('../findKey');

const cats = {
  Cat1: "Barlo",
  Cat2: "Peach",
  Cat3: "Aktar",
  Cat4: "Boobooboo",
  Cat5: "Huxley"
};

describe("#findKey", () => {
  it("returns the correct key when callback is strict equal to a string", () => {
    assert.equal(findKey(cats, x => x === "Peach"), "Cat2");
  });



});