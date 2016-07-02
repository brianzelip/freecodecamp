/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/


function prependDashesToCapitals(str) {
  return str.replace(/[A-Z]/g, '-$&');
}

function spinalCase(str) {
  str = prependDashesToCapitals(str);
  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');


/*
REFERENCES
  - regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  - str.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  - str.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  - arr.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  - str.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  - insertDash: http://stackoverflow.com/a/23196488/2145103
*/
