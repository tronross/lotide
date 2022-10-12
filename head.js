const assertEqual = require('./assertEqual');

// FUNCTION
// Returns the head of an array as an element.
const head = function(array) {
  const head = array[0];
  return head;
};

// Test Cases
assertEqual(head([5,6,7]), 5); // Passes
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Passes
assertEqual(head([]), 0); // Fails (empty array)
assertEqual(head(["So", "much", "meow"]), "So"); // Passes