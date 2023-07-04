////////////////////
// letterPositions
////////////////////

/**
 * Takes in a string and returns an object containing keys that correspond to the letters in the input string and arrays containing the indices of where in the string the letters appeared.
 *
 * @param {string} sentence Two-dimensional array to be "flattened".
 * @returns {object} Returns an object with "letter" keys and array values which contain indices of the letter's occurance.
 */

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];

    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;