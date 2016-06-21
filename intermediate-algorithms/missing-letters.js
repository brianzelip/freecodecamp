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
    console.log('arrCode is: ' + arrCode);
  }

  arrCode.sort(compareNumbers)

  function compareNumbers(a, b) {
    return a - b;
  }

  console.log('The last arrCode before finding the missing value(s): ' + arrCode);

  var missing = [];//get ready to find which values are missing
  for (x=0; x<arrCode.length; x++) {
    if (x === arrCode.length - 1) {//if on the final element of arrCode. IF THIS ISN'T FIRST THEN YOU GET AN INFINITE LOOP IN UR BROWSER + CRASH
      break;
    } else if ((arrCode[x] + 1) !== arrCode[x+1]) {//find missing values between lowest and highest values
      missing.push((arrCode[x] + 1));
      console.log('missing now contains: ' + missing);
    }
  }

  var allNumbers = arrCode.concat(missing).sort(compareNumbers);
  console.log(allNumbers);


  console.log('-------------------');
  console.log('arrCode[0+1] is: ' + arrCode[0+1]);

  console.log('str ended up as: ' + str);
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
  - array.concat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  - arr.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString


*/
