const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  
  it("input array still has the same number of elements ", () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("leaves the original array intact", () => {
    let words1 = words;
    tail(words);
    assert.deepEqual(words, words1);
  });

  it("returns an empty tail when fed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an empty tail when fed an array with one element", () => {
    assert.deepEqual(tail([55]), []);
  });

});