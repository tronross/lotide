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

const songs = {
  "The Botttom Line": { artist: "O.V. Wright", length: 313 },
  "I Don't Do Windows": { artist: "O.V. Wright", length: 224 },
  "That's the Way I Feel About 'Cha": { artist: "O.V. Wright", length: 515 }
};

describe("#findKey", () => {
  it("returns the correct key when the callback is === to a particular string", () => {
    assert.equal(findKey(cats, x => x === "Peach"), "Cat2");
  });

  it("returns the correct key when the callback is < a particular number", () => {
    assert.equal(findKey(lunch, x => x < 10), "Falafel");
  });

  it("returns undefined when the callback returns a falsy value", () => {
    assert.equal(findKey(lunch, x => x < 5), undefined);
  });

});