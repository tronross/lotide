//ASSERTION HELPER CODE:
// assertEqual: compare two values and print out a message asserting whether they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION
// findKey: Takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value. (If no key is found, it returns undefined.)
const findKey = function(object, callback) {
  let firstKey = "";

  for (const item in object) {
    const key = ""
    console.log(item);
    console.log(callback(item));
    //if (item[key] === callback())
  }
  //return 
}





findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// const findKeyByValue = function(objToSearch, searchValue) {
//   let matchKey = "";

//   for (const key in objToSearch) {
//     if (searchValue === objToSearch[(key)]) {
//       matchKey = key;
//     }
//   }
//   return matchKey;
// };