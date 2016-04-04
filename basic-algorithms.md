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

