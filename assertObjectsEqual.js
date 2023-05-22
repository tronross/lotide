const eqObjects = require('./eqObjects');

// FUNCTION
// assertObjectsEqual: Takes in two objects and console.logs an appropriate assertion message to the console.
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const perfectMatch = eqObjects(actual, expected);

  if (perfectMatch === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
