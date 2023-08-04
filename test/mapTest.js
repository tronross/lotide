const assert = require('chai').assert;
const map = require('../map');

const words = ["a", "screaming", "comes", "across", "the", "sky"];

describe("#map", () => {
  it("returns an array containing the first letter of each string when the callback is word => word[0] called on an array of strings", () => {
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['a', 's', 'c', 'a', 't', 's']);
  });

  it("does not mutate the input array", () => {
    const words1 = words;
    const words2 = words; 
    map(words1, word => word[0]);
    assert.deepEqual(words1, words2);
  });

});