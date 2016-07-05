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

for every number in the range, push to an array it's multiples leading up to all the numbers in the range multiplied together
*/

//1. normalize input (validate and sort values in ascending order)
function normalize(arr) {
  if (arr === undefined || arr.length !== 2) {
    console.log('Please enter an array of two positive integers!');
    return undefined;
  }

  for (i=0; i<arr.length; i++) {
    if (typeof(arr[i]) !== 'number' || arr[i] < 0) {
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

//2. create arrays of multiples for each number within the input range




function multiplesFor(arr) {

  var arrOfArrs = [];
  const ARR_MIN = Math.min(...arr);
  console.log('ARR_MIN is: ' + ARR_MIN);
  const ARR_MAX = Math.max(...arr);
  console.log('ARR_MAX is: ' + ARR_MAX);

  for (i=ARR_MIN; i<=ARR_MAX; i++) {
    console.log(i);
  }
}

function getMultipleCeiling(arr) {
  var quotient = 1;
  for (i=ARR_MIN, i<=ARR_MAX; i++;) {
    console.log(i*1);
  }
  console.log(quotient);
  //return quotient;
}
getMultipleCeiling(arr);

//const MULTIPLE_CEILING = ;


function smallestCommons(arr) {
  multiplesFor(normalize(arr));
}
smallestCommons([1,3]);

/*
REFERENCES
  - least common multiples: https://www.mathsisfun.com/least-common-multiple.html
  - arr.sort() && function compareNumbers(a, b): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Creating_displaying_and_sorting_an_array
*/
