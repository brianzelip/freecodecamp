//
// function normalizeInput (arr) {
//   function compareNumbers(a,b) {
//     return a-b;
//   }
//
//   if (typeof(arr) !== 'object' ||
//   arr.length > 2 ||
//   typeof(arr[0]) !== 'number' ||
//   typeof(arr[1]) !== 'number' ||
//   arr[0] < 0 ||
//   arr[1] < 0) {
//     console.log('Please enter an array containing two positive integers!');
//     return;
//   }
//   return arr.sort(compareNumbers);
// }
//
//
// function smallestCommons(arr) {
//
//   if (typeof(arr) !== 'object' ||
//   arr.length > 2 ||
//   typeof(arr[0]) !== 'number' ||
//   typeof(arr[1]) !== 'number' ||
//   arr[0] < 0 ||
//   arr[1] < 0) {
//     console.log('Please enter an array containing two positive integers!');
//     return ;
//   }
//
//   let startNum = Math.min(...arr);
//   let endNum = Math.max(...arr);
//   let maxMultiple = startNum * endNum;
//   // console.log('start = ', startNum, 'endNum = ', endNum, 'maxMultiple = ', maxMultiple);
//   let lcm;
//
//   for (let i = endNum; i < maxMultiple; i++) {
//     if (i%startNum === 0 && i% endNum === 0) {
//       // console.log('the LCM is ', i);
//       // console.log('i is:', i);
//       lcm = i;
//       break;
//     }
//   }
//
//   console.log('the final lcm is', lcm);
//   return lcm;
// }
//
// smallestCommons([1,5]);


function smallestCommons(arr) {

  if (typeof(arr) !== 'object' ||
    arr.length > 2 ||
    typeof(arr[0]) !== 'number' ||
    typeof(arr[1]) !== 'number' ||
    arr[0] < 0 ||
    arr[1] < 0) {

    console.log('Please enter an array containing two positive integers!');
    return;
  }



  let lcm = 0;
  let startNum = Math.min(...arr);
  let endNum = Math.max(...arr);
  let maxMultiple = startNum * endNum;

  let foundAnswer = false;

  let i = endNum;

  while (!foundAnswer) {
    if (i % startNum === 0 && i % endNum === 0){
      foundAnswer = true;
      lcm = i;
      return lcm;
    }
    i++;
  }

  return;

}

// console.log(smallestCommons([13, 1]));


// let x = 1;
// let y = 13;
// for (i=x; i<(y+1); i++) {
//   x = x*i;
//   console.log('i =', i, 'x =', x);
// }




// start exploration


function createRange(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);
  rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
}
// console.log(createRange([5,1]));


/*
  What I want to do is:

  - take an array of two numbers: `arr`
  - create an array of all the consequential numbers, between and including, the two numbers from the original array: `[arr[0]...arr[1]]`
  - create a new array of consequential numbers, where the lowest starting value is the highest value in the consequential numbers array (`arr[1]`), and the highest final value is the product of all numbers in the original consequential numbers array (`[arr[0]...arr[1]]`).
    - Loop through until you find the first number that is evenly divisible by every number in the consequential numbers array (this should be significantly less than the product of all the numbers in the original consequential numbers array).
  -
*/


function verifyInput(arr) {
  if (typeof(arr) !== 'object' ||
  arr.length > 2 ||
  typeof(arr[0]) !== 'number' ||
  typeof(arr[1]) !== 'number' ||
  arr[0] < 0 ||
  arr[1] < 0) {
    console.log('Please enter an array containing two positive integers!');
    return false;
  };
  return arr;
};

function createRangeArray(verifiedArr) {
  let start = Math.min(...verifiedArr);
  let end = Math.max(...verifiedArr);
  rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  };
  return rangeArr;
};

function productOfArr(arr) {
  let product = 1;
  for (let i=0; i<arr.length; i++) {
    product = product * arr[i];
  };
  return product;
};

function createPossibleSCMPool(rangeArr) {
  let possibleSCM = [];
  let startingNum = Math.max(...rangeArr);
  for (let i = startingNum; i <= productOfArr(rangeArr); i++) {
    possibleSCM.push(i)
  }
  // console.log('possibleSCM', possibleSCM);
  return possibleSCM;
}

function isEvenlyDivisible(dividend, divisor) {
  return (dividend % divisor === 0) ? true : false;
}
// console.log('isEvenlyDivisible', isEvenlyDivisible(8, 3));

function findSmallestCommonMultiple(rangeArr) {
  let possibleSCM = createPossibleSCMPool(rangeArr);
  console.log('possibleSCM', possibleSCM);
  let isEvenlyDivisibleByAll = false;

  let scm = 0;

  loop1:
  for (let i = 0; i < possibleSCM.length; i++) {
    isEvenlyDivisibleByAll = true;

    loop2:
    for (let x = 0; x < rangeArr.length; x++) {
      console.log('is ' + possibleSCM[i] + ' evenly divisible by ' + rangeArr[x] + '?', isEvenlyDivisible(possibleSCM[i], rangeArr[x]));
      if (!isEvenlyDivisible(possibleSCM[i], rangeArr[x])) {
        isEvenlyDivisibleByAll = false;
        continue loop1;
      };
    };
    if (isEvenlyDivisibleByAll) {
      // console.log('the ending i', possibleSCM[i]);
      return possibleSCM[i];
    };
  };
};

// console.log(findSmallestCommonMultiple([1,2,3,4,5]));



function smallestCommons(arr) {
  let verifiedArr = verifyInput(arr);
  let rangeArr = createRangeArray(verifiedArr);
  let scm = findSmallestCommonMultiple(rangeArr);

  console.log('scm', scm);
  return scm;
}

smallestCommons([2, 8]);


// function smallestCommons(arr) {
//   verifyInput(arr);
//   createRangeArray(verifiedArr);
//   findSmallestCommonMultiple(rangeArr);
// }


/*
  REFERENCES
    - js labels, used in findSmallestCommonMultiple(), http://stackoverflow.com/a/183197/2145103
    - js labels docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label

*/
