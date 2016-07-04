/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

/*
APPROACH
1. normalize input (validate and sort values in ascending order)
2. create arrays of multiples for each number within the input range
3. return the lowest value that each array contains

*/

function normalize(arr) {
  for (i=0; i<arr.length; i++) {
    if (typeof(arr[i]) !== 'number') {
      console.log('Please enter an array of two positive integers!');
      return undefined;
    }
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  arr = arr.sort(compareNumbers);
  console.log('normalized arr is: [' + arr + ']');
  return arr;
}



function smallestCommons(arr) {
  normalize(arr);
}
smallestCommons([5,1]);

/*
REFERENCES
  - least common multiples: https://www.mathsisfun.com/least-common-multiple.html
  - function compareNumbers(a, b): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Creating_displaying_and_sorting_an_array
  -
*/
