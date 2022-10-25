const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION
// without: Takes a source array and an array of elements to remove, and returns a new array that contains the elements _not_ removed. The source array is unchanged.
const without = function(source, itemsToRemove) {
  const array = [...source];

  for (let element of itemsToRemove) {
    for (let j = 0; j < array.length; j++) {
      if (element === array[j]) {
        array.splice([j], 1);
      }
    }
  }
  return array;
};


// TEST CODE

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without(["banana", "canteloupe", "watermelon"], ["banana"]), ["canteloupe", "watermelon"]); // => Pass

assertArraysEqual(without([17, 99, 104, 155], [99]), [17, 104, 155]); // => Pass

// Test Cases (b): Original array is not changed

const words = ["hello", "world", "lighthouse"];
const OrigWords = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function:
console.log("Original array: ", OrigWords, "Source array after without(): ", words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => Pass

module.exports = without;