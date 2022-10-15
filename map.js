const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION
// map: take in an array and a callback function as arguments, and return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE:
const words = ["a", "screaming", "comes", "across", "the", "sky"];

// Case a:
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'a', 's', 'c', 'a', 't', 's' ]);

// Case b:
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, [ 'A', 'SCREAMING', 'COMES', 'ACROSS', 'THE', 'SKY' ]);

// Case c:
const results3 = map(words, word => word.length);
assertArraysEqual(results3 , [ 1, 9, 5, 6, 3, 3 ]);

module.exports = map;