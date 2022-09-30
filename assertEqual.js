// FUNCTION
// assertEqual: compare two values and print out a message asserting whether they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(75, 956);
assertEqual("Barlo is sooo hungry", "Barlo is sooo hungry");
assertEqual(99, "Ice Cream");