
/*
# Where art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/


// SEE the end of this file for documentation of the three Stack Overflow answers submitted to my question about this algorithm.


// My for...in solution upgraded with the help of [the solution I checked for the answer to my question on !so about this algorithm](http://stackoverflow.com/a/37845407/2145103).

function whereAreYou(collection, source) {
  var arr = [];

  for (i=0; i<collection.length; i++) {
    var matches = true;
    for (var prop in source) {
      if (!collection[i].hasOwnProperty(prop) || collection[i][prop] !== source[prop]) {
        matches = false;
      }
    }
    if (matches) {
      arr.push(collection[i]);
    }
  }
  console.log('arr is: ' + arr);
  return arr;
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "c": 2 }], { "a": 1, "b": 2 });

//** The for...in solution (which doesn't satisfy the need for accounting for more than one keyvalue pair in source)**
/*
function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (i=0; i<collection.length; i++) {
    for (var prop in source) {
      if (collection[i].hasOwnProperty(prop) && collection[i][prop] == source[prop]) {
        console.log('Collection\'s object ' + [i] + ' contains the source\'s key:value pair(s)!');
        arr.push(collection[i]);
      } else {
        console.log('shit fuck');
      }
    }
  }
  console.log('The array `arr` is: ' + arr);
  // Only change code above this line
  return arr;
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
*/
//end keyvalue pair limited solution
/*my !SO question post about this algorithm: http://stackoverflow.com/questions/37845249/check-if-any-object-in-an-array-of-objects-contains-all-of-the-key-value-pairs-i

  and see other useful links:
    - http://bob.yexley.net/iterating-over-javascript-objects/
    -
*/

/*
My first solution did too much unneccesary shit, and also only served the use case that the source that is passed contains only one key:value pair. The challenge requires handling one or more key:value pairs in the source. So I had to figure out a way to identify each key:value pair in the source, and iterate over each pair.

The solution came in the form of [the documentation for the for...in loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in), and specifically, this provided code exmaple:

  ```js
  var obj = {a:1, b:2, c:3};

  for (var prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
  }
  ```

The earlier, and wrong, solution is archived below for posterity's sake, and to be able to later see what I did as something in there may be of use.

**BEGIN PREVIOUS SOLUTION**

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

*/




/*
[My question about this algoritm on Stack Overflow](http://stackoverflow.com/questions/37845249/check-if-any-object-in-an-array-of-objects-contains-all-of-the-key-value-pairs-i)


//[The first, and accepted, answer](http://stackoverflow.com/a/37845407/2145103):

```
function findObjects(collection, source) {
    var result = [];

    for (i=0; i<collection.length; i++) {
        var matches = true;
        for (var prop in source) {
            if (!collection[i].hasOwnProperty(prop) || collection[i][prop] !== source[prop]) {
                matches = false;
                break;
            }
        }
        if (matches) {
            result.push(collection[i]);
        }
    }
    return result;
}
```

Basically, you have to check ALL properties and make sure they match, and then only then do you add it to your result array.


//[The second answer](http://stackoverflow.com/a/37845415/2145103):

You could use some array methods, like Array#map

   The map() method creates a new array with the results of calling a provided function on every element in this array.

and Array#every

   The every() method tests whether all elements in the array pass the test implemented by the provided function.

and get the properties of source first with Object.keys.

   The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

```
function findObjects(collection, source) {
   var keys = Object.keys(source);          // get all properties of source
   return collection.filter(function (c) {  // filter collection
       return keys.every(function (k) {     // check every key
           return c[k] === source[k];       // compare value of collection and source
       });
   });
}

console.log(findObjects([{ "a": 1, "b": 2 }, { "a": 1 }, { "b": 2, "c": 2 }], { "a": 1, "b": 2 }))
```

and

The same in ES6 syntax (read more: Arrow functions)
    Basically this style is a short writing of
    function (x) { return y; }
    became
              x =>        y
```
function findObjects(collection, source) {
    const keys = Object.keys(source);
    return collection.filter(c => keys.every(k => c[k] === source[k]));
}

console.log(findObjects([{ "a": 1, "b": 2 }, { "a": 1 }, { "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
```


//[The third answer](http://stackoverflow.com/a/37846037/2145103):

The solution using Object.keys, Array.forEach and Array.some functions:

```
function findObjects(arr, source) {
    var keys = Object.keys(source), result = [];
    arr.forEach(function(v){
        !keys.some((k) => source[k] !== v[k]) && result.push(v);
    });

    return result;
}

console.log(findObjects([{ "a": 1, "b": 2 }, { "a": 1 }, { "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
// it will output [{"a":1,"b":2}]
```

*/
