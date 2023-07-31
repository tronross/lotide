const assert = require('chai').assert;
const countLetters = require('../countLetters');

const cat = "A cat is not a dog";
const catCount = { a: 3, c: 1, t: 2, i: 1, s: 1, n: 1, o: 2, d: 1, g: 1 };

describe("#countLetters", () => {
  it("correctly counts all the letters in an input string", () => {
    const countedCat = countLetters(cat);
    assert.deepEqual(countedCat, catCount);
  });

  it("does not mutate the input string", () => {
    countLetters(cat);
    assert.equal(cat, "A cat is not a dog");
  });

});