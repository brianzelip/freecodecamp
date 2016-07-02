/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function prependDashesToCapitals(str) {
  return str.replace(/[A-Z]/g, '-$&');
}

function replaceUnderscoresWithDashes(str) {
  return str.replace(/_/g, '-');
}

function replaceSpacesWithDashes(str) {
  return str.replace(/\s/g, '-');
}

function truncateGroupedDashes(str) {
  return str.replace(/-+/g, '-');
}

function trimLeadingDash(str) {
  return str.replace(/^-/, '');
}

function toLower(str) {
  return str.toLowerCase();
}

function spinalCase(str) {
  str = prependDashesToCapitals(str);
  str = replaceUnderscoresWithDashes(str);
  str = replaceSpacesWithDashes(str);
  str = truncateGroupedDashes(str);
  str = trimLeadingDash(str);
  str = toLower(str);
  console.log(str);
  return str;
}

spinalCase("Teletubbies say Eh-oh");

/*
REFERENCES
  - regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  - str.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  - str.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  - arr.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  - str.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  - insertDash (decided not to use this approach, but might be a useful future reference): http://stackoverflow.com/a/23196488/2145103

  FUNNY HOW IT ALL CAME DOWN TO:
    - functions with return statements
    - str.replace
    - regex

    THANKS YOU DON'T KNOW JS!!
*/
