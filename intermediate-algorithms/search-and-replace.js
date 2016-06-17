/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
    console.log(after);
  }
  var newString = str.replace(before, after);
  console.log(newString);
  return newString;
}

myReplace("A quick brown fox jumped over the lazy dog", "Dog", "cat");
/*
Peace to the following resources:
-http://stackoverflow.com/a/8334645/2145103 (check if first letter is capitalized)
-http://stackoverflow.com/a/1026087/2145103 (capitalize first letter)
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
*/
