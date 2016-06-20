/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function fearNotLetter(str) {

  if (typeof(str) !== 'string') {
    console.log('Please input a valid string.');
    return;
  }//make sure input is a string

  str = str.toLowerCase();//homogenize input
  arrCode = [];

  for (i=0; i<str.length; i++) {
    arrCode.push(str[i].charCodeAt());
    console.log(arrCode);
  }

  arrCode.sort(compareNumbers)

  function compareNumbers(a, b) {
    return a - b;
  }

  console.log(arrCode);

  var missing = [];
  for (x=0; x<arrCode.length; x++) {
    if (x === arrCode.length - 1) {
      break;
    } else if ((arrCode[x] + 1) !== arrCode[x+1]) {
      missing.push((arrCode[x] + 1));
      console.log('missing now contains: ' + missing);
    }
  }

  console.log('-------------------');
  console.log(arrCode[0+1]);

  console.log(str);
  return str;
}

fearNotLetter("BACE");


/*

var next = x + 1;
console.log('now is index[' + x + '], next is index[' + (x+1) + '].');
console.log('x is: ' + x);
console.log('arrCode[x] is: ' + arrCode[x]);
console.log('arrCode[x+1] is: ' + arrCode[x+1]);
console.log('arrCode[(x+1)] is: ' + arrCode[(x+1)]);



infinite loop

else if (start + 1 !== arrCode[x] + 1) {
  arrCode.push(start + 1);
  start++;
  console.log('start is now: ' + start);
}

*/


/*
REFERENCES
  - arr.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  - function compareNumbers(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Creating_displaying_and_sorting_an_array
  - str.charCodeAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  - str.fromCharCode(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

*/
