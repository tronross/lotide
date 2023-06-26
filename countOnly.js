//////////////
// countOnly
//////////////

/**
 * Returns key-value pairs representing the count of the "key" in the source array.
 *
 * @param {array} allItems An array of strings to be searched/counted.
 * @param {object} itemsToCount An object specifying what items to count.
 * @returns {object} Returns the items and their count, if the item is true within itemsToCount.
 */

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