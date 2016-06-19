/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {

  if (typeof(str) !== 'string' || /[^ACGTacgt]/.test(str)) {
    console.log('Please enter a valid dna string.');
    return;
  }

  str = str.toUpperCase();//narrow the pot of what we have to validate against
  var strArr = str.split('');//create an array where each element is one character in str
  var arrOfArrs = [];//set up the array of arrays

  for (i=0; i<strArr.length; i++) {
    arrOfArrs.push(Array.of(strArr[i]));//for every element in strArr, add a new array to arrOfArrs
  }

  for (e=0; e<arrOfArrs.length; e++) {//push the appropriate letter to each array
    if (arrOfArrs[e][0] === 'A') {
      arrOfArrs[e].push('T');
    } else if (arrOfArrs[e][0] === 'T') {
      arrOfArrs[e].push('A');
    } else if (arrOfArrs[e][0] == 'C') {
      arrOfArrs[e].push('G');
    } else if (arrOfArrs[e][0] == 'G') {
      arrOfArrs[e].push('C');
    }
  }

  return arrOfArrs;
}

pairElement('attg');

/*
References
  - Array.of() (SAVED THE FUCKING DAY!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
  - typeof(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  - reg exp (not in pattern): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  - toUpperCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
  - str.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  - arr.push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/
