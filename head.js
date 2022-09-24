// Assert Equal testing code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to return the head of an array as an element.
const head = function(array) {
  const head = array[0];
  return head;
};

// Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 0);
assertEqual(head(["So", "much", "meow"]));
assertEqual(head(["So", "much", "meow"]), "So");