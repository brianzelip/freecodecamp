/*
# Sum all numbers in a range
  -We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
  -The lowest number will not always come first.

*/

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
