/////////////////
// countLetters
/////////////////

/**
 * Takes in a sentence (as a string) and returns an object containing the count of each letter from that sentence.
 *
 * @param {string} sentence String to count the letters in.
 * @returns {object} Returns key-value pairs corresponding to letters and their count.
 */

const countLetters = function (sentence) {
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

module.exports = countLetters;