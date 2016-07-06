/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

/*
APPROACH
1. normalize input (validate and sort values in ascending order)
2. take the normalized input array and return rangeArr which contains the sequence of numbers in the range of the passed array values
3. take rangeArr array, create the sorted array of all multiples up to the ceiling for each number in rangeArr, and return the first multiple to be found rangeArr.length times
*/

//utility - globally accessible sort function
function compareNumbers(a, b) {
  return a - b;
}

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

  arr = arr.sort(compareNumbers);
  //console.log('normalized arr is: [' + arr + ']');
  return arr;
}

//2. take the normalized input array and return rangeArr which contains
//the sequence of numbers in the range of the passed array values
function makeRangeArr(arr) {
  var rangeArr = [];
  for (a=Math.min(...arr); a<=Math.max(...arr); a++) {
    rangeArr.push(a);
  }
  //console.log('rangeArr is: ' + rangeArr);
  return rangeArr;
}

//3. take rangeArr array, create the sorted array of all multiples up to the ceiling
//for each number in rangeArr, and return the first multiple to be found rangeArr.length times
function getSCM(arr) {
  //set up vars and get ceiling multiple
  var multiplesArr = [];
  var ceilingMultiple = 1;
  for (i=0;i<arr.length;i++) {
    ceilingMultiple = ceilingMultiple * arr[i];
  }
  //console.log('ceilingMultiple is: ' + ceilingMultiple);

  //for every number in the array, push to another array all the multiples of that number thru ceilingMultiple
  for (a=0; a<arr.length; a++) {
    //console.log('a is: ' + a + ' and arr[a] is: ' + arr[a]);
    for (z = arr[a]; z<=ceilingMultiple; z+=arr[a]) {
     //console.log('z is: ' + z);
     multiplesArr.push(z);
    }
  }
  //console.log('multiplesArr unsorted is: ' + multiplesArr);

  //sort all multiples in ascending order
  multiplesArr = multiplesArr.sort(compareNumbers);
  //console.log('multiplesArr sorted is: ' + multiplesArr);

  //get scm
  var scm;

  for (y=0; y<multiplesArr.length; y++) {
    if (multiplesArr[y] === multiplesArr[y+arr.length-1]) {
      scm = multiplesArr[y];
      break;
    }
  }//this is the trick to my solution - it returns the first number that is found in the array of sorted multiples rangeArr.length times!

  console.log('scm is: ' + scm);
  return scm;
}

function smallestCommons(arr) {
  getSCM(makeRangeArr(normalize(arr)));
}
smallestCommons([1,10]);

/*
REFERENCES
  - least common multiples: https://www.mathsisfun.com/least-common-multiple.html
  - arr.sort() && function compareNumbers(a, b): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Creating_displaying_and_sorting_an_array
  - solution to finding duplicates that i didn't use but worked for me during iteration: http://stackoverflow.com/a/2440343/2145103
*/
