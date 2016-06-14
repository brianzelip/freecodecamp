# Solutions from [FreeCodeCamp](https://freecodecamp.com)'s 'Intermediate Algorithm Scripting' section


**Sum all numbers in a range**
-We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
-The lowest number will not always come first.

```js

function sumAll(arr) {

  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var rangeLength = ((max-min) + 1);
  //console.log('the range length is: ' + rangeLength);
  var rangeArr = [];

  for (l=0; l<rangeLength; l++) {
    rangeArr.push(min+l);
    //console.log('The range array is : ' + rangeArr);
  }
  //console.log(range);

  var answer = 0;

  for (i=0; i<rangeArr.length; i++) {
    answer += rangeArr[i];
  }
  //console.log('The summed answer is: ' + answer);
  return answer;
}
sumAll([1,203]);

```


**Diff 2 arrays**
Take two arrays as input, and return a third array that is made up of elements that were only found in one of the two input arrays, but not values that were found in both arrays.
ie: return the third array that contains the difference between the two input arrays.


```js
function diffArray(arr1, arr2) {

  var uniques = [];

  for (i=0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      uniques.push(arr1[i]);
    }
  }

  for (x=0; x<arr2.length; x++) {
    if (arr1.indexOf(arr2[x]) == -1) {
      uniques.push(arr2[x]);
    }
  }

  console.log(uniques);
  return uniques;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

```


**Convert a number <= 3999 to all-caps Roman Numerals**

``` js
var dict = {
  'ones' : {
    '0' : '',
    '1' : 'I',
    '2' : 'II',
    '3' : 'III',
    '4' : 'IV',
    '5' : 'V',
    '6' : 'VI',
    '7' : 'VII',
    '8' : 'VIII',
    '9' : 'IX'
  },
  'tens' : {
    '0' : '',
    '1' : 'X',
    '2' : 'XX',
    '3' : 'XXX',
    '4' : 'XL',
    '5' : 'L',
    '6' : 'LX',
    '7' : 'LXX',
    '8' : 'LXXX',
    '9' : 'XC'
  },
  'hunnids' : {
    '0' : '',
    '1' : 'C',
    '2' : 'CC',
    '3' : 'CCC',
    '4' : 'CD',
    '5' : 'D',
    '6' : 'DC',
    '7' : 'DCC',
    '8' : 'DCCC',
    '9' : 'CM'
  },
  'thou' : {
    '1' : 'M',
    '2' : 'MM',
    '3' : 'MMM'
  }
};

function convertToRoman(num) {
  var response = '';
  if (typeof(num) !== 'number') {
    // the input has to be a number
    response = 'fuck that ain\'t a number bro!';
  } else if (num > 3999) {
    // the input has to be less than 3999, there's a website that my work laptop has in history that explains why this is the case. tldr; from 4000+ they put a horizontal line over the letter to show that number x 1000.
    response = 'fuck that\'s too bigga number hombre!';
  } else {
    var numString = num.toString();
    // now we convert the valid input number to a string so that we can access each string character (or decimal place) to convert the input number to R.N. Roman Numerals are concerned with the left-side of the number first, as opposed to ours which always begins with the ones place. The dictionary above provides the translations, in addition with divvying up each string character or decimal place given the four-level logic below.
    if (num > 999) {
      //console.log('ur number is greater than 999');
      response = dict.thou[numString[0]] + dict.hunnids[numString[1]] + dict.tens[numString[2]] + dict.ones[numString[3]];
    } else if (num > 99 && num <= 999) {
      //console.log('ur number is greater than 99');
      response = dict.hunnids[numString[0]] + dict.tens[numString[1]] + dict.ones[numString[2]];
    } else if (num > 9 && num <= 99) {
      //console.log('ur number is greater than 9');
      response = dict.tens[numString[0]] + dict.ones[numString[1]];
    } else {
      //console.log('ur number is 9 or less');
      response = dict.ones[numString[0]];
    }
  }
  console.log('The response from your input is: ' + response);
  return response;
}

convertToRoman(500);
```


**Where art thou**
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

```js

function whereAreYou(collection, source) {
  var arr = [];
  // Only change code below this line

  var srcProp = Object.keys(source);
  var srcPropStr = srcProp.toString();
  var srcVal = '';
  console.log(srcProp);
  console.log(srcPropStr);

  console.log(collection[0].srcPropStr);

  /*for (i=0; i<collection.length; i++) {
    if (collection[i].hasOwnProperty(srcProp)) {
      console.log('The property that they share is: ' + collection[i].srcPropStr);
    } else {
      console.log('shit :(');
    }
  }*/

  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```
