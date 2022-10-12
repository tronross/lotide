// FUNCTION
// assertEqual: compares two values and prints out a message asserting whether they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Fails
assertEqual(1, 1); // Passes
assertEqual(75, 956); // Fails
assertEqual("Barlo is sooo hungry", "Barlo is sooo hungry"); // Passes
assertEqual(99, "Ice Cream"); // Fails

module.exports = assertEqual;