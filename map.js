// FUNCTION
// map: take in an array and a callback function as arguments, and return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
  console.log('item BEFORE: ', item);
  console.log('item AFTER: ', callback(item));
  console.log('---')
  }
  return results;
}

const words = ["a", "screaming", "comes", "across", "the", "sky"];
const results1 = map(words, word => word[0]);
console.log(results1);