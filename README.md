# Lotide
## Library


### assertEqual
asertEqual compares two values and prints a message to the console asserting whether they are strictly equal or not.

### assertArraysEqual
assertArraysEqual compares two arrays and prints a message to the console asserting whether they are strictly equal or not.

### eqArrays
eqArrays checks if two input arrays are identical, element by element.

### head
head returns the head of an array, and returns undefined in the event of an empty array.

### middle
middle returns an array containing the middle element(s) of an input array. If the input array contains two or fewer elements, middle returns an empty array.

### tail
tail returns a shallow copy of the tail of the input array, leaving the input array unchanged.





## Tests
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