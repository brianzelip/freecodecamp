/*
# Convert a number <= 3999 to all-caps Roman Numerals

*/

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
    // the input has to be less than 3999, see the following website for an explanation of ths shortcoming of Roman numerals -- https://www.quora.com/Which-is-the-Roman-numeral-for-ten-thousand-and-why-is-it-symbolized-that-way. tldr; from 4000+ they put a horizontal line over the letter to show that number x 1000.
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
