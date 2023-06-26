const assert = require('chai').assert;
const countOnly = require('../countOnly');

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

const countNames = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe("#countOnly", () => {
  it("returns an object containing the property 'Fang': 2 when the input array has two 'Fang's", () => {
    const counts = countOnly(firstNames, countNames);

    assert.equal(counts["Fang"], 2)
  });

  it("returns an object containing the property 'Jason': 1 when the input array has one 'Jason'", () => {
    const counts = countOnly(firstNames, countNames);

    assert.equal(counts["Jason"], 1)
  });

  it("does not contain a property referencing an item if the input array does not contain it", () => {
    const counts = countOnly(firstNames, countNames);

    assert.equal(counts["Steve-o"], undefined)
  });

  it("does not contain a property referencing an item if the input object's corresponding key is false", () => {
    const counts = countOnly(firstNames, countNames);

    assert.equal(counts["Agouhanna"], undefined)
  });

});