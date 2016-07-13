function smallestCommons(arr) {
  if (typeof(arr) !== 'object' ||
  arr.length > 2 ||
  arr[0] < 0 ||
  arr[1] < 0 ||
  typeof(arr[0]) !== 'number' ||
  typeof(arr[1]) !== 'number') {
    console.log('Please enter an array containing two positive integers!');
    return;
  }

  function compareNumbers(a,b) {
    return a-b;
  }

  arr.sort(compareNumbers)
  console.log(arr);
}

smallestCommons([22,6]);
