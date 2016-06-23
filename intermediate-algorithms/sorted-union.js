/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {

  //console.log('the args are: ' + arguments);
  //console.log('args lenght is: ' + arguments.length);

  let uniques = [];//get ready to capture uniques

  for (a=0; a<arguments.length; a++) {//first traverse the arrays in the arguments passed
    //console.log('argument ' + a + ' is: ' + arguments[a]);
    for (e=0; e<arguments[a].length; e++) {//now traverse each element of each array passed
      //console.log('index ' + e + ' of argument ' + a + ' is: ' + arguments[a][e]);
      if (uniques.indexOf(arguments[a][e]) === -1) {
        uniques.push(arguments[a][e]);
        //console.log('uniques was updated with: ' + arguments[a][e]);
      }
    }
  }

  //console.log(uniques);

  return uniques;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
REFERENCES
  - Arguments.object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  - let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  - arr.indexOf() [they even have an example showing the solution to this challenge (although I figured it out before reading it)]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  - Array.prototype.reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

*/
