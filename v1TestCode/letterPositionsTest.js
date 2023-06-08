const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TEST CODE:

console.log("only hushed murmurs in the villages"); // source string
console.log(letterPositions("only hushed murmurs in the villages")); // logs the returned object to the console
assertArraysEqual(letterPositions("only hushed murmurs in the villages").v, [27]); // asserts if the letter v from the input string corresponds to its property in the returned object