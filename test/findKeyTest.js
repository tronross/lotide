const assert = require('chai').assert;
const findKey = require('../findKey');

const cats = {
  Cat1: "Barlo",
  Cat2: "Peach",
  Cat3: "Aktar",
  Cat4: "Boobooboo",
  Cat5: "Huxley"
};

const lunch = {
  "Burger": 10,
  "Pizza": 12,
  "Falafel": 7,
  "Sushi": 12,
  "Steak": 25
};

describe("#findKey", () => {
  it("returns the correct key when the callback is === to a particular string", () => {
    assert.equal(findKey(cats, x => x === "Peach"), "Cat2");
  });

  it("returns the correct key when the callback is < a particular number", () => {
    assert.equal(findKey(lunch, x => x < 10), "Falafel");
  });

});