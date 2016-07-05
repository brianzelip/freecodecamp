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

//2. create an array of multiples for each number up to ceilingMultiple
/*
APPROACH
for every number from MIN to MAX, push to an arry the sequence of multiples for that number leading up to the ceilingMultiple
*/

//take the normalized input array and return rangeArr which contains
//the sequence of numbers in the range of the passed array values
function makeRangeArr(arr) {
  var rangeArr = [];
  for (a=Math.min(...arr); a<=Math.max(...arr); a++) {
    rangeArr.push(a);
  }
  console.log('rangeArr is: ' + rangeArr);
  return rangeArr;
}
var range = makeRangeArr(normalize([8,5]));
console.log('range is : ' + range);


//take rangeArr array and return the array of all multiples (up to the ceiling)
//of each number in rangeArr
function makeMultiplesArr(arr) {
  //set up vars and get ceiling multiple
  var multiplesArr = [];
  var ceilingMultiple = 1;
  for (i=0;i<arr.length;i++) {
    ceilingMultiple = ceilingMultiple * arr[i];
  }
  console.log('ceilingMultiple is: ' + ceilingMultiple);

  //for every number in the array, push to another array all the multiples of that number leading up to and including the ceilingMultiple

  for (a=0;a<arr.length;a++) {
    for (b=arr[a];b<=(ceilingMultiple/b);b+=b) {
      multiplesArr.push(b);
    }
  }
  console.log('multiplesArr is: ' + multiplesArr);
  return multiplesArr;
}


function smallestCommons(arr) {
  makeMultiplesArr(makeRangeArr(normalize(arr)));
}
smallestCommons([2,4]);

/*
REFERENCES
  - least common multiples: https://www.mathsisfun.com/least-common-multiple.html
  - arr.sort() && function compareNumbers(a, b): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Creating_displaying_and_sorting_an_array
*/
