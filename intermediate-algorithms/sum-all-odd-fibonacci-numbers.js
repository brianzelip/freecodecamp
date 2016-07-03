/*
Sum All Odd Fibonacci Numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/


//create an array of the first num Fib numbers
function createFibArr(num) {
  var fibArr = [0,1];
  if (num < 2) {
    return;
  } else if (num > 1) {
    for (i=2; i<=num; i++) {
      fibArr.push(fibArr[i-1]+fibArr[i-2])
    }
  }
  console.log(fibArr);
}

createFibArr(100);



/*
via https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e#.s0wyw04md

function fibonacci(num) {
  if (num <= 1) return 1;
  //console.log(num);//THESE THROW BROWSWER CRASH
  //console.log(fibonacci(num));//THESE THROW BROWSWER CRASH
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));
*/

/*
function
if (num === 0) {
  return 0;
} else if (num === 1) {
  return 1;
} else if (num > 1) {

}
*/

function sumFibs(num) {

  return num;
}

sumFibs(4);

/*
REFERENCES
  - remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
  -
*/
