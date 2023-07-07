const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Fails
assertEqual("Barlo is sooo hungry", "Barlo is sooo hungry"); // Passes
assertEqual(1, 1); // Passes
assertEqual(75, 956); // Fails
assertEqual(99, "Ice Cream"); // Fails
assertEqual(true, true); // Passes
assertEqual(true, false); // Fails
console.log("Test for type coercion (string vs number):");
assertEqual('55', 55); // Fails