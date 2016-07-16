
function normalize(arr) {
  function compareNumbers(a,b) {
    return a-b;
  }

  if (typeof(arr) !== 'object' ||
  arr.length > 2 ||
  typeof(arr[0]) !== 'number' ||
  typeof(arr[1]) !== 'number' ||
  arr[0] < 0 ||
  arr[1] < 0) {
    console.log('Please enter an array containing two positive integers!');
    return;
  }

  return arr.sort(compareNumbers);
}


function smallestCommons(arr) {
  normalize(arr);
  console.log('arr is: ' + arr);
  return arr;
}

smallestCommons([22,6]);
