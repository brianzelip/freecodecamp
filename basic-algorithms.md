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
  var x = -(target.length); // setup the char index from which the substring is created from str to compare to the target
  if (target === str.substr(x)) {
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
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}
mutation(["helLlo", "heY"]);


/*
function mutation(arr) {
  for (i=0;i<arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  //console.log("Check if lowercase is working: " + arr);

  for (x=0;x<arr[1].length;x++) {
    if (arr[0].indexOf(arr[1][x]) < 0) {
      return false;
    }
    return true;
  }
  
}

mutation(["helLlo", "heY"]);
*/



/*
function mutation(arr) {
  //lowercase every char in each string
  for (i=0;i<arr.length;i++) {
    arr[i] = arr[i].toLowerCase();
  }
  // check if each char in arr[1] is in arr[0]
  for (x=0; x<arr[1].length; x++) {
    if (arr[0].indexOf(arr[1][x]) !== -1) {
      return false;
    } else
    return true;
  }
}

mutation(["hello", "he"]);
*/```
