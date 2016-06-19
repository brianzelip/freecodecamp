/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translatePigLatin(str) {
  str = str.toLowerCase(); //lowercase that input
  if (typeof(str) !== 'string') {// get rid of invalid input from the get go
    console.log('Please input a string.');
    return;
  } else if (/^[a|e|i|o|u|A|E|I|O|U]/.test(str)) {//
    str = str + 'way';
  } else {
    strUpper = str.toUpperCase();//make uppercase to give yourself less content to check against
    var chr;
    for (i=0; i<strUpper.length; i++) {//find the index of the first vowel
      chr = strUpper.charAt(i);
      if (chr === 'A' || chr === 'E' || chr === 'I' || chr === 'O' || chr === 'U') {
        break;
      }
    }
    if (i<strUpper.length) {//check for the existance of a vowel in the given string
      strArr = str.split('');
      var x = 0;
      while (x<i) {
        strArr.push(strArr[0]);//add the consonant(s) to the end of the array
        strArr.splice(0,1);//remove the consonant from the beginning of the array
        //console.log('strArr ended up as: ' + strArr);
        x++;
      }
      str = strArr.join('') + 'ay';
    } else {
      console.log('fugde there is not one vowel in the string');
    }
  }
  console.log('The string translated to pig latin is: ' + str);
  return str;
}

translatePigLatin("Trans");

/*
  References

  - Regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  - typeof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  - str.charAt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  - str.indexOf (didn't use this for finding vowels): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  - approach for finding the first vowel: http://technotip.com/216/position-left-most-vowel-javascript/
  - while loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  - arr.push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  - arr.splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  - arr.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  - great !so answer for removing an array element: http://stackoverflow.com/a/5767357/2145103
  - str.split() (didn't use this): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  - str.substr() (didn't use this): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
*/
