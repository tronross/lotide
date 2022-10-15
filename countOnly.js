const assertEqual = require('./assertEqual');

// FUNCTION
// countOnly: takes in a collection of items (strings) and return counts for a specific subset of those items (strings).
const countOnly = function(allItems, itemsToCount) { // allItems: an array of strings to be searched, itemsToCount: an object specifying what to count
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


// TEST CODE:
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1); // One Jason
assertEqual(result1["Karima"], undefined); // undefined (no Karimas)
assertEqual(result1["Fang"], 2); // Two Fangs
assertEqual(result1["Agouhanna"], undefined); // undefined (no Agouhannas counted (value is false))

module.exports = countOnly;