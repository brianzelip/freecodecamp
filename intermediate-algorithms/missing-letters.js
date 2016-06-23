/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function fearNotLetter(str) {

  if (typeof(str) !== 'string') {//make sure input is valid
    console.log('Please input a valid string.');
    return;
  }

  str = str.toLowerCase();//homogenize input
  arrCode = [];//get ready to hold the character codes of each character in str

  for (i=0; i<str.length; i++) {//create array of str character codes
    arrCode.push(str[i].charCodeAt());
    //console.log('arrCode is: ' + arrCode);
  }

  arrCode.sort(compareNumbers);

  function compareNumbers(a, b) {
    return a - b;
  }

  //now arrCode is sorted from least to greatest

  var missing = [];
  var isUndefined = true;
  for (x=0; x<(arrCode.length-1); x++) {
    if ((arrCode[x] + 1) !== arrCode[x+1]) {//find missing values between lowest and highest values
      missing.push((arrCode[x] + 1));
      console.log('missing now contains: ' + missing);
      isUndefined = false;
    }
  }

  if (isUndefined) {//if true, return undefined
    str = undefined;//this is the method for making a variable return undefined
  } else if (!isUndefined) {//if not true return the character from the missing char code
    str = String.fromCharCode(missing[0]);
  }

  console.log(str);
  return str;
}

fearNotLetter("yz");

/*
//THUS BEGINS THE SECOND WRONG SOLUTION

function fearNotLetter(str) {

  if (typeof(str) !== 'string') {
    console.log('Please input a valid string.');
    return;
  }//make sure input is a string

  str = str.toLowerCase();//homogenize input
  arrCode = [];//get ready to hold the character codes of each character in str

  for (i=0; i<str.length; i++) {//create array of str character codes
    arrCode.push(str[i].charCodeAt());
    //console.log('arrCode is: ' + arrCode);
  }

  var max = Math.max(...arrCode);
  var min = Math.min(...arrCode);

  //console.log('Max is: ' + max + ' | Min is: ' + min);

  var fullRangeCode = [];//get ready for the full range of values
  for (x=min; x<(max+1); x++) {//create the full range of values
    fullRangeCode.push(x);
    //console.log(fullRangeCode);
  }

  var fullRangeChars = '';//get ready for the full range of chars
  for (y=0; y<fullRangeCode.length; y++) {
    fullRangeChars += String.fromCharCode(fullRangeCode[y]);
    //console.log(fullRangeChars);
  }

  console.log('The output is: ' + fullRangeChars);
  return fullRangeChars;
}

fearNotLetter("az");

//THUS ENDS THE SECOND WRONG SOLUTION TO THE CHALLENGE, HOWEVER SOME OF THE CODE MAY BE FUTURE RELEVANT
*/


/*
THIS CODE PRESERVED HERE TO DOCUMENT A MISTAKE I MADE.

I was only solving the one use-case that the algorithm needed to solve in the example, which was the use-case where there is only one missing value. What about when there are lots of missing values? The code below can't handle lots of missing values. The min/max approach used above for the solution actually fixes the lots case.

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
    if ((x+1) === arrCode.length - 1 && (arrCode[x] + 1) === arrCode[x+1]) {
      //if the loop is on the second to last value (current index is one less than final index) AND current value + 1 === next value, break!
      //the previous code allowed an invalidation in that the second to last and last values didn't have to have a difference of 1.
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

fearNotLetter("az");
*/

/*
OTHER PROBLEMS FROM MY WORK THRU IN SOLVING THIS CHALLENGE

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
  - undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
  - Math.max(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  - Math.min(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
  - array.concat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  - arr.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
*/
