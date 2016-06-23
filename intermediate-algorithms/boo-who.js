/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/


function booWho(bool) {

  if (typeof(bool) === 'boolean') {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}

booWho(null);

/*
REFERENCES
  - Boolean objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
  - typeof(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/
