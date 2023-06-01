// FUNCTION
// countOnly: Takes in a collection of items (strings) and return counts for a specific subset of those items (strings).
// allItems: an array of strings to be searched, itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
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

module.exports = countOnly;