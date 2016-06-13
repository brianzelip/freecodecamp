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


**Convert a number <= 3999 to Roman Numerals**

``` js
// convert to (all-caps) roman numerals.

var dict = {
  'ones' : {
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
    console.log('fuck that ain\'t a number!');
    return;
  } else if (num > 3999) {
    console.log('fuck that\'s too bigga number hombre!');
  } else {
    var numString = num.toString();
    //console.log(dict[num]);
    console.log('The input is ' + numString.length + ' decimal places long.');
    if (numString > 999) {
      console.log('ur number is greater than 999');
      // THIS IS WHERE THE PICK UP AT //response = dict[]
    } else if (numString > 99) {
      console.log('ur number is greater than 99');
    } else if (numString > 9) {
      console.log('ur number is greater than 9');
    } else {
      console.log('ur number is 9 or less');
    }
  }
  return;
}

convertToRoman(36);

```
