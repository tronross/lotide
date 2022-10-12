const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
// Array of strings
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log("Original array: ", words); // Check integrity of original array
console.log("Tail: ", tail(words)); // Check tail

//Array of numbers
const numbers = [77, 105, 83.75, 1000];
tail(numbers); // no need to capture the return value since we are not checking it
assertEqual(numbers.length, 4); // original array should still have 4 elements!
console.log("Original array: ", numbers); // Check integrity of original array
console.log("Tail: ", tail(numbers)); // Check tail