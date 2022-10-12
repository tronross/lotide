const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
// Asserts returning the head of several arrays, and returning undefined for an empty array.
assertEqual(head([5,6,7]), 5); // Passes
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Passes
assertEqual(head(["So", "much", "meow"]), "So"); // Passes
assertEqual(head([]), 0); // Fails (empty array)