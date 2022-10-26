const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION
// takeUntil: Takes in an array and a callback function and returns a slice of the array with elements taken from the beginning until the callback returns a truthy value.
const takeUntil = function(array, callback) {
  const arraySlice = [];

  for (let element of array) {
    if (callback(element)) {
      return arraySlice;
    } else {
      arraySlice.push(element);
    }
  }
  return arraySlice;
};

// TEST CODE:
// Case a:
const data1 = ['onions', 'tomatoes', 'bread', 'cheese', 'leather', 'felt'];
const results1 = takeUntil(data1, x => x === 'leather');
assertArraysEqual(results1, ['onions', 'tomatoes', 'bread', 'cheese']);

// Case b:
const data2 = ['a', 'screaming', 'comes', 'across', 'the', 'sky'];
const results2 = takeUntil(data2, x => x.length < 7 && x.length > 5);
assertArraysEqual(results2, ['a', 'screaming', 'comes']);

// Case c:
const data3 = [2.66, 5.5, 1.66, -56, 55.77, 112];
const results3 = takeUntil(data3, x => Number.isInteger(x));
assertArraysEqual(results3, [2.66, 5.5, 1.66]);

module.exports = takeUntil;