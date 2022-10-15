# Lotide
## Library


### assertEqual
asertEqual compares two values and prints a message to the console asserting whether they are strictly equal or not.

### assertArraysEqual
assertArraysEqual compares two arrays and prints a message to the console asserting whether they are strictly equal or not.

### countLetters
countLetters takes in a string and returns an object containing counts of each letter that appears in the string.

### countOnly
countOnly takes in an array of strings and an object specifying what strings to count, and returns an object containing those strings and their count. 

### eqArrays
eqArrays checks if two input arrays are identical, element by element.

### findKeyByValue
findKeyByValue takes in an object and a value, scans the object and returns the first key which contains the given value.

### flatten
flatten takes an array with other arrays inside (one level of arrays only), and flattens it into a single-level array.

### head
head returns the head of an array, and returns undefined in the event of an empty array.

### letterPositions
letterPositions takes in a string and returns an object with properties (arrays) that correspond to the individual letters and their indices in the input string.

### middle
middle returns an array containing the middle element(s) of an input array. If the input array contains two or fewer elements, middle returns an empty array.

### tail
tail returns a shallow copy of the tail of the input array, leaving the input array unchanged.

### without 
without takes a source array and an array of elements to remove, and returns a shallow copy of the array with the elements removed.

## Tests
##### Tests implemented via mocha and chai. If a function is not referred to below, it is tested via assertion code from this lotide library implementation.

### assertEqualTest
Test code to compare (identical and different) strings, numbers, and booleans; additional test for type coercion.

### assertArraysEqualTest
Test code to assert passes or fails, along with logging the input arrays and condition tested.

### eqArraysTest
Test code to assert passes or fails, along with logging the input arrays and condition tested.

### headTest
Test code to assert successfully returning the heads of several arrays, and returning undefined for an empty array.

### middleTest
Test code asserts fails as a proxy for the return array being different from the input array, also logs the input array and the returned array.

### tailTest
Test code returning a shallow copy of the tail of the input array. It logs the input array, tail array, and asserts that the input array's length remains unchanged (as a proxy for the input array remaining unchanged).