
/*
# Where art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whereAreYou(collection, source) {
  var arr = [];
  // Only change code below this line

  var srcVal = '';
  //console.log('`Object.keys(source)` returns: ' + srcProp);
  //console.log('`Object.keys(source).toString` returns: ' + Object.keys(source).toString());
  //console.log('`srcPropStr` returns: ' + srcPropStr);

  //console.log(collection[0][srcPropStr]);

  console.log('the length of the source answer object is: ' + source.length);
  //for (Object.keys(source)) {
    var srcProp = Object.keys(source);
    var srcPropStr = srcProp.toString();
    for (i=0; i<collection.length; i++) {
      if (collection[i].hasOwnProperty(srcProp) && collection[i][srcProp] == source[srcProp]) {
        console.log('YES! Object ' + [i] + ' contains the correct `property: value` --> `{ ' + srcProp + ': "' + source[srcProp] + '" }`!!');
        arr.push(collection[i]);
      } else if (collection[i].hasOwnProperty(srcProp) && collection[i][srcProp] != source[srcProp]) {
        console.log('sorry charlie, object ' + [i] + ' has the property "' + srcProp + '" but it doesn\'t have the right value');
      } else {
        console.log('sorry charlie, object ' + [i] + ' doesn\'t share the property "' + srcProp);
      }
    }
  //}
  //console.log(collection[0].hasOwnProperty(srcProp));

  //collection[0][srcProp] == source[srcProp]
  //console.log('The value of the source\'s property is: ' + source[srcProp]);


  console.log('For the answer, the returned array is: ' + arr);
  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


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


var sourcePropArray = Object.getOwnPropertyNames(dict);

for (z=0; z<sourcePropArray.length; z++){
  console.log('dict contains the property: ' + sourcePropArray[z]);
}


/*

I think the solution I'm after lies somewhere in the following link and code below:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/

var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
