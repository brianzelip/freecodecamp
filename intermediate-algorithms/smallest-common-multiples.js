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

"use strict";
/*
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

  for (let i=0; i<arr.length; i++) {
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
  for (let a=Math.min(...arr); a<=Math.max(...arr); a++) {
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
  var ceilingMultiple = 1;//if 0, the quotient will always remain 0 instead of reach the ceiling
  for (let i=0;i<arr.length;i++) {
    ceilingMultiple = ceilingMultiple * arr[i];
  }
  //console.log('ceilingMultiple is: ' + ceilingMultiple);

  //for every number in the array, push to another array all the multiples of that number thru ceilingMultiple
  for (let a=0; a<arr.length; a++) {
    //console.log('a is: ' + a + ' and arr[a] is: ' + arr[a]);
    for (let z = arr[a]; z<=ceilingMultiple; z+=arr[a]) {
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

  for (let y=0; y<multiplesArr.length; y++) {
    if (multiplesArr[y] === multiplesArr[y+arr.length-1]) {
      scm = multiplesArr[y];
      break;
    }
  }//this is the trick to my solution - it returns the first number that is found in the array of sorted multiples rangeArr.length times!

  console.log('scm is: ' + scm);
  return scm;
}

function smallestCommons(arr) {
  return getSCM(makeRangeArr(normalize(arr)));
}
smallestCommons([7,13]);*/

/*

          HOLY SHIT!

          CHECK OUT https://github.com/FreeCodeCamp/FreeCodeCamp/issues/7098



*/


/*

Here's my investigation of the above solution to the same FCC challenge I found on github

WORK IN PROGRESS
*/
var whileLoopIteration = 0;
function smallestCommons(arr) {
  arr.sort();
  console.log('arr.sort() is: ' + arr);
  var count = arr[0];

  var keepGoing = true;

  while (keepGoing) {
    whileLoopIteration ++;
    //console.log('For this iteration, count began as: ' + count);
    count += 1;
    //console.log('and during this iteration count became: ' + count);
    var calcArr = [];
    //console.log('For this iteration calcArr began as: ' + calcArr);

    for (var i = arr[0]; i <= arr[1]; i++) {
      calcArr.push(count % i);
      //console.log('i is: ' + i + '\ncount('+count+')%i('+i+') is: '+count%i+'\ncalcArr became: [' + calcArr + ']');
    }
    //console.log('and during this iteration calcArr became: ' + calcArr);
    //console.log('\n');
    if (checkArray(calcArr)) {
      keepGoing = false;
      // break;
    }
  }

  console.log('The smallest common multiple between ' + arr[0] + ' and ' + arr[1] + ' is: ' + count);
  return count;
}

function checkArray(arr2) {
  //console.log('checkArray FIRED!');
  for (var i = 1; i < arr2.length; i++) {
    if (arr2[i - 1] !== arr2[i]) {
      return false;
    }
  }
  console.log('The while loop iterated ' + whileLoopIteration + ' times.');
  return true;
}

smallestCommons([10,2]);





/*
REFERENCES
  - least common multiples: https://www.mathsisfun.com/least-common-multiple.html
  - arr.sort() && function compareNumbers(a, b): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Creating_displaying_and_sorting_an_array
  - solution to finding duplicates that i didn't use but worked for me during iteration: http://stackoverflow.com/a/2440343/2145103
*/
