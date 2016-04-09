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


**Check if an input string matches the ending of another input string**
(confirm the ending challenge)

```js
function confirmEnding(str, target) {
  if (target === str.substr(-target.length)) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

```


**Repeat an input string an input number of times**

```js
function repeatStringNumTimes(str, num) {
  // repeat after me
  var emptyStr = '';
  if (num < 0) {
    return emptyStr;
  } else {
    return str.repeat(num);
  }
}

repeatStringNumTimes("abc", 3);
```

**Truncate a given string if the string is longer than a given max string length**

```js
function truncateString(str, num) {
  // the next 2 lines were the first iteration of code I got to solve one of the rules, it lead me to the general solution
  //var x = str.substr(0,num-3);
  //return x.concat('...');
  if (str.length > num) {
    if (num <= 3) {
      return str.substr(0,num).concat('...');
    } else {
      return str.substr(0,num-3).concat('...');
    }
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
```


**Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array**

```js
function chunkArrayInGroups(arr, size) {
  /* references:
      http://stackoverflow.com/questions/31838834/free-code-camp-bonfire-chunky-monkey
      https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Chunky-Monkey
  */
  var newArr = [];
  var y;
  for (i=0; i<arr.length; i+=size) {
    y = newArr.push(arr.slice(i,size+i));
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
```


**Return the remaining elements of an array after chopping off n elements from the head**

```js
function slasher(arr, howMany) {
  // thanks to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  var removeHowManyFromHead = [];
  removeHowManyFromHead = arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);
```


**Mutations**


```js
function mutation(arr) {
  for (i=0; i<arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  for (x=0; x<arr[1].length; x++) {
    if (arr[0].indexOf(arr[1][x]) < 0) {
      return false;
    }
  }// no else statement is made, this for loop only serves to return false if a character in arr[1] is not found in arr[0].
  return true;// if the function makes it this far that means that every character in arr[1] is found in arr[0], ie SHIT IS TRUE
}

mutation(["hello", "heY"]);

/*
More checks:

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
*/


```


**Remove elements with a falsy value from an array**

"Falsy bouncer" challenge

```js
function bouncer(arr) {
  var filteredArr = [];
  filteredArr = arr.filter(removeFalsyValues);
  return filteredArr;
}

function removeFalsyValues(value) {
  return Boolean(value);
}

bouncer([7, "ate", "", false, 9]);

// big thanks to Coding Tutorials 360
// https://www.youtube.com/watch?v=Xu5zy0EZB5M

// ps - i don't understand exactly why the Boolean and filter methods work together for this solution
// some how the following links didn't help reach a solution:
//    http://stackoverflow.com/questions/26899092/javascript-array-manipulation-to-delete-odd-array-elements#26899108
//    http://www.diveintojavascript.com/core-javascript-reference/the-array-object/array-filter
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
//    
```

**Filter an array if it contains elements found in another array**

this was the Seek and Destroy challenge.

```js
function destroyer(arr) {

  var passedArray = arr;//gets the first legitimate thing passed the destroyer function, which is an array in this case
  var passedFilter = Array.prototype.slice.call(arguments, 1);

  var filteredArray = passedArray.filter(function(el){
    if (passedFilter.indexOf(el) === -1) {
      return true;
    }
    return false;
  });

  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
Helpful links:
https://www.youtube.com/watch?v=q_MXH_Ponpg
https://www.youtube.com/watch?v=QSVGOeCxin0
http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

and the big !SO post that I found which was from 5 years ago but which included a month-old response from another Free Code Camper who provided a solution that I was able to read and understand what is happening:
http://stackoverflow.com/questions/7353917/filter-array-using-another-arrays-elements
*/

//A previous attempt at this solution included:
function destroyer(input) {
  // Remove all the values
  var inputAsArray = Array.prototype.slice.call(arguments);// create a true array out of the input passed to the destroyer function
  var arrayToSearch = inputAsArray.slice(0,1);// create new array containing the array to be searched
  var arrayOfArgs = inputAsArray.slice(1,inputAsArray.length);// create new array with the elements to search for in the array to be searched

  /*
  The above 3 arrays could've been written in only 2 lines of code creating only 2 variables like so:

  var arrayToSearch = Array.prototype.slice.call(arguments).slice(0,1);
  var arrayOfArgs = Array.prototype.slice.call(arguments).slice(1,Array.prototype.slice.call(arguments).length);
  */

  var output = arrayToSearch.filter(function(el) {
    if (arrayOfArgs.indexOf(el) > -1) {
      return false;
    }
    return true;
  });

  return output;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```


**Return the index position of given number inserted into and then sorted array**

The Where Do I Belong challenge

```js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr = arr.sort(function(a,b){
    return a-b;
  });

  var index;//set up the answer; index gets passed value from the indexOf statement

  for (i=0; i<arr.length; i++) {
    if (arr[i] === num) {
      index = arr.indexOf(arr[i]);
    }
 }

  //return "the index is: " + index + " and the arr is: " + arr;
  return index;
}

getIndexToIns([5, 3, 20, 3], 5);

/*
more tests:
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
*/

/*
References:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
The one trick here is about Unicode code point order

    Description
    Edit

    If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Cherry" comes before "banana". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.

    var fruit = ['cherries', 'apples', 'bananas'];
    fruit.sort(); // ['apples', 'bananas', 'cherries']

    var scores = [1, 10, 2, 21];
    scores.sort(); // [1, 10, 2, 21]
    // Watch out that 10 comes before 2,
    // because '10' comes before '2' in Unicode code point order.

*/

```


**Shift cipher, or Caesars Cipher - shift the values of the provided letters by 13 places**

```js
function rot13(str) { // LBH QVQ VG!
  var newStr = '';
  for (i=0; i<str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
      newStr = newStr + String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) < 91) {
      newStr = newStr + String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/*
References:

https://en.wikipedia.org/wiki/ROT13
http://unicode-table.com/en/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/

```


****


```js

```
