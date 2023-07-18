const assert = require('chai').assert;
const countLetters = require('../countLetters');

const cat = "A cat is not a dog";

describe("#countLetters", () => {
  it("does not mutate the input string", () => {
    const countedCat = countLetters(cat);
    assert.equal(cat, "A cat is not a dog");
  });

 


});