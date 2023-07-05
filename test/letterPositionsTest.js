const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns the correct index of a letter from an input string", () => {
    assert.deepEqual(letterPositions("only hushed murmurs in the villages").v, [27]);
  });

});