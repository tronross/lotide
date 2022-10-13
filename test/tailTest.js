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

// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   });



// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// // TEST CODE
// // Array of strings
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log("Original array: ", words); // Check integrity of original array
// console.log("Tail: ", tail(words)); // Check tail

// //Array of numbers
// const numbers = [77, 105, 83.75, 1000];
// tail(numbers); // no need to capture the return value since we are not checking it
// assertEqual(numbers.length, 4); // original array should still have 4 elements!
// console.log("Original array: ", numbers); // Check integrity of original array
// console.log("Tail: ", tail(numbers)); // Check tail