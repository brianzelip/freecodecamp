/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {

  var dict = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };

  //console.log(dict['&']);

  var keys = Object.keys(dict);//since you can't access javascript object properties by number for iterating (try console.logging dict[1] for example), you have to make an array of the keys using Object.keys()

  for (i=0; i<str.length; i++) {//for every character in str
    for (k=0; k<keys.length; k++) {//for every property name in keys, if the str character matches the property name, then replace with that property's value.
      //console.log("dict." + prop + " = " + dict[prop]);
      if (str[i] === keys[k]) {
        //console.log('Houston we have a match! str[i] value is: ' + str[i] + ' and keys[k] value is: ' + keys[k] + ', and the value dict[k] is: ' + dict[keys[k]]);
        //console.log('AH HEM! keys[k] is: ' + keys[k] + '.\nAH HEM! str[i] is: ' + str[i] + '.\nAH HEM! dict[keys[k]] is: ' + dict[keys[k]] + '.');
        str = str.replace(str[i], dict[keys[k]]);
      }
    }
  }

  //console.log('keys.length (ie: the length of the dict object) is: ' + keys.length);
  //console.log('str is now: ' + str);
  return str;
}

convertHTML("Dolce & Gabbana, not to mention 3 > 2!!");

/*
REFERENCES
  - regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  - html entities: https://dev.w3.org/html5/html-author/charref
  - str.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  - Object.keys(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  - what is grep: https://kb.iu.edu/d/afiy
  - html entity: https://developer.mozilla.org/en-US/docs/Glossary/Entity
*/
