// FUNCTION
// middle: A function to extract the middle element(s) of an array.
const middle = function(array) {
  let middleArray = [];
  
  if (array.length <= 2) {
    return middleArray;

  } else if ((array.length % 2) !== 0) {
    const midElement = (Math.floor(array.length / 2));
    middleArray.push(array[midElement]);
    return middleArray;

  } else if ((array.length % 2) === 0) {
    const midElelment = (array.length / 2);
    middleArray.push(array[(midElelment - 1)]);
    middleArray.push(array[midElelment]);
    return middleArray;
  }
};

module.exports = middle;