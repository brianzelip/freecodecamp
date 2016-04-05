## From the section Basic Algorithm Scripting

**reverse a string**

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("Greetings from Earth");
```

**Factorialize a given number**
```js
function factorialize(num) {
  var facArray = [];
  var product = 1;

  for (i = num; i > 0; i--) {
    facArray.push(i);
  }
  console.log(facArray);
  
  for (x = 0; x < facArray.length; x++) {
    product = product * facArray[x];
  }

  console.log(product);
  return product;
}

factorialize(0);
// factorialize(0) returns 1 which is in line with the rules of Factorialize.
```


**Check to see if a string is a palindrome**
(According to the rules of the challenge, non-alphanumeric characters needed to be removed. The challenge's definition of alphanumeric does not appear to include underscores, although the docs say that the the underscore is an alphanum char. This is the reason for the brackets and underscore in the regex)


```js
function palindrome(str) {
  // Good luck!
  var strAlphaNumify = str.replace(/[\W_]/gi,'');
  var strLowerify = strAlphaNumify.toLowerCase();
  
  if (strLowerify === strLowerify.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome("almostomla");
/*
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true. 
*/


```


**Find the longest word in a string**

```js
function findLongestWord(str) {

  var arrayOfStrings = str.split(' ');
  var arrayOfLetterCounts = [];
  
  for (i = 0; i < arrayOfStrings.length; i++) {
    arrayOfLetterCounts.push(arrayOfStrings[i].length);
  }
  
  arrayOfLetterCounts.sort(function(a,b){
    return b-a;
  });
  
  return arrayOfLetterCounts[0];
  
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");

```

**Capitalize the first letter of every word in a string and lower case all other letters**

```js
function titleCase(str) {
  var loweredAndSplit = str.toLowerCase().split(' ');
  for (i=0; i<loweredAndSplit.length; i++) {
    loweredAndSplit[i] = loweredAndSplit[i][0].toUpperCase() + loweredAndSplit[i].slice(1);
    // THANKS !SO! http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript#1026087
  }
  return loweredAndSplit.join(' ');
}

titleCase("I'm a little tea pot");

```


**Return Largest Numbers in Arrays**

```js
function largestOfFour(arr) {
  // You can do this!
  var y; // this is the variable in the for loop that will take the returned length of the new array created from the first and largest value in each of arr's sub arrays.
  var newArray = []; // this is the new array to be created from the first and largest values in each of arr's sub arrays.
  for (i=0; i<arr.length; i++) {
    arr[i].sort(function(a,b) {
      return b - a;
    });
    y = newArray.push(arr[i][0]);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === str.charAt(str.length-1)) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


/*

a solution that only works when the target string is one letter

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === str.charAt(str.length-1)) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


*/
