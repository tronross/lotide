const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters')

// TEST CODE
const cat = "A cat is not a dog";
console.log(cat);
console.log(countLetters(cat));
assertEqual(cat, "A cat is not a dog");

const lantern = "A lantern was burning close to the wall above";
console.log(lantern);
console.log(countLetters(lantern));
assertEqual(lantern, "A lantern was burning close to the wall above");