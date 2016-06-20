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

  str = str.toLowerCase();

  console.log(str);
  return str;
}

fearNotLetter("ABCE");
