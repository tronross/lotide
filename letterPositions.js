// A function to compare two arrays and assert if they are equal.
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const arraysEqual = eqArrays(arrayOne, arrayTwo);
 
  if (arraysEqual) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal.");
  }
};


// A function to check if arrays are identical
const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true;

  if (arrayOne.length !== arrayTwo.length) {
    equal = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false;
      }
    }
    return equal;
  }
};


// letterPositions: Returns an object containing keys that correspond to the individual letters in the input (argument) and values that are arrays containing the indices of where in the string the letters appeared.

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i ++) {
    if (letter !== " ") {
      if (results[letter]) {
      results[letter.push(i)]; 
    } else {
      results[letter = [i]];
      console.log(results);
    }
  }
}

  //return results;
}