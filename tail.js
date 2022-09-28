// Assert Equal testing code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Return a shallow copy of the tail of the array.
const tail = function(array) {
  return array.slice(1);
};

// Test Case:
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log("Original array: ", words); // Check integrity of original array
console.log("Tail: ", tail(words)); // Check tail