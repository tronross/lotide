const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION
// letterPositions: Returns an object containing properties that correspond to the letters in the input and arrays containing the indices of where in the string the letters appeared.

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i ++) {
    let letter = sentence[i];

    if (letter !== " ") {
      if (results[letter]) {
        results[(letter)].push(i);
      } else {
        results[sentence[i]] = [(i)];
      }
    }
  }
  return results;
};


// TEST CODE:
console.log("only hushed murmurs in the villages"); // source string
console.log(letterPositions("only hushed murmurs in the villages")); // logs the returned object to the console
assertArraysEqual(letterPositions("only hushed murmurs in the villages").v, [27]); // asserts if the letter v from the input string corresponds to its property in the returned object

module.exports = letterPositions;