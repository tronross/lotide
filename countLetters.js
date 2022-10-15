const assertEqual = require('./assertEqual');

// FUNCTION
// countLetters: Take in a sentence (as a string) and return the count of each letter from that sentence.
const countLetters = function(sentence) {
  const lettersCount = {};
  const forCount = sentence.toLowerCase(); // convert to lower case (to avoid separate counts for upper and lower case)

  for (const letter of forCount) {
    if (letter !== " ") { // do not count spaces
      if (lettersCount[letter]) {
        lettersCount[letter] += 1;
      } else {
        lettersCount[letter] = 1;
      }
    }
  }
  return lettersCount;
};

// TEST CODE
const cat = "A cat is not a dog";
console.log(cat);
console.log(countLetters(cat));
assertEqual(cat, "A cat is not a dog");

const lantern = "A lantern was burning close to the wall above";
console.log(lantern);
console.log(countLetters(lantern));
assertEqual(lantern, "A lantern was burning close to the wall above");

module.exports = countLetters;