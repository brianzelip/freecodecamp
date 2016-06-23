/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {

  var newstr = str.replace(/&/i, '&amp;');

  // &colon;&rpar;
  console.log(newstr);
  return str;
}

convertHTML("Dolce & Gabbana");

/*
REFERENCES
  - regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  - html entities: https://dev.w3.org/html5/html-author/charref

*/
