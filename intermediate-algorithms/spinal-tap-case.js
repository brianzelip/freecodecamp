/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {

  //SOLUTION 1
  //THIS SOLUTION ONLY SOLVES THE CASE OF SPACE BETWEEN WORDS
  //first, lowercase all the things
  //str = str.toLowerCase();
  //next, make an array of all the words, then join them with dashes
  //temp1 = str.split(' ').join('-');

  //console.log('str is: ' + str);
  //console.log('temp is: ' + temp1);

  //return temp1;
  //END SOLUTION 1

  //SOLUTION 2
  /*I see that, in the REPL tests ran against my submission to FreeCodeCamp, the solution is held accountable to the following cases:
    - spaces between words
    - camel case, where the first character is lowercase, and then the first letter of all additional words starts with an uppercase
    - unserscores, where all words are separated by underscores

  My next approach will be to make all of the above instances a string separated by spaces, then split and join as in SOLUTION 1.
  */
  console.log('str started out as: ' + str);
  for (i=1; i<str.length; i++) {//starting with i=1 here because I don't care about the first character of the string
    if (str[i] === str[i].toLowerCase().toUpperCase()) {
      console.log(str[i]);
      if (str[(i-1)] === '_') {
        //console.log('there is an underscore up in here!');
        str = str.replace(str[(i-1)], ' ');
      } else if (/[a-z]/.test(str[(i-1)])) {
        console.log('there is an letter just to the left of an uppercase letter up in here!');
        str = str.replace(str[(i-1)], ' ');
      }
    }
  }
  console.log('str ended as: ' + str);
  return str;
}


/*
my scratchpad work during this work:

var str = 'thisIs';

for (i=0; i<str.length; i++) {
  if (str[i] === str[i].toLowerCase().toUpperCase()) {
    if (/[a-z]/.test(str[(i-1)])) {
        console.log('yes the letter before an uppercase letter is lowercase! The uppercase letter is ' + str[i] + ' and the lowercase letter next to it is: ' + str[(i-1)]);
        str = str.replace(str[])
    }
  }
}



*/



spinalCase('This Is Spinal_Tap');


/*
REFERENCES
  - regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  - str.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  - str.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  - arr.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  - str.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  - 
*/
