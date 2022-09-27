// TEST/ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// countLetters: Take in a sentence (as a string) and return the count of each letter from that sentence.
const countLetters = function(sentence) {
const lettersCount = {};

for (letter of sentence) {
  if (lettersCount[letter]) {
    lettersCount[letter] += 1;
  } else if (letter === ' ') {
  } else {
    lettersCount[letter] = 1;
  }
  }
  console.log(lettersCount);
};

//Test Code:

countLetters("A lantern was burning close to the wall above.");

//console.log(letter);
  