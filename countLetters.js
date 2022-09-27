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

  for (const letter of sentence) {
    if (lettersCount[letter]) {
      lettersCount[letter] += 1;
    } else if (letter === ' ') {
    } else {
      lettersCount[letter] = 1;
    }
  }
  return lettersCount;
};

//Test Code:
console.log(countLetters("A cat is not a dog."));
assertEqual((countLetters("A cat is not a dog.")), "A cat is not a dog.");

console.log(countLetters("A lantern was burning close to the wall above."));
assertEqual((countLetters("A lantern was burning close to the wall above.")), "A lantern was burning close to the wall above.");

console.log(countLetters("Heavy rain is falling across parts of Florida as Hurricane Ian advances on the state"));
assertEqual((countLetters("Heavy rain is falling across parts of Florida as Hurricane Ian advances on the state")), "Heavy rain is falling across parts of Florida as Hurricane Ian advances on the state");

  