/*
Sum All Odd Fibonacci Numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

/*
1. validate input
2. get the index of the first Fibonacci number that is greater than or equal to the number passed to sumOddFibs
3. determine which index value leading up to the Fibonacci number in step 3 is odd and push it to an array
4. sum all the odd fib numbers and return for the solution!
*/


//Global FIB object - create an array of the Fibonacci sequence of numbers up to MAX_SAFE_INTEGER()
  //Due to the limit of JS integer precision, we're not going to dynamically
  //accept anything over a certain value, so this value can be constant.
const FIB = function() {
  var fibSeq = [0,1];
  const FIB_MAX_INDEX = 79;
  for (i=2; i<=FIB_MAX_INDEX; i++) {
    fibSeq.push(fibSeq[i-1]+fibSeq[i-2])
  }
  return fibSeq;
}

//create fibArray. for some reason iterating through FIB()[i] returns undefineds, fibArray doesn't have a problem.
var fibArray = FIB();

//console.log(FIB());
//console.log(fibArray);
//console.log('FIB.length is: ' + FIB().length);
//console.log('FIB()[5] is: ' + FIB()[5]);

//1. validate the user's passed number, returns true || false
function checkIfNumExistsInFIB(num) {
  if (!Number.isSafeInteger(num) || num < 0) {
    console.log('Please enter a number between and including 0 and 9007199254740991.');
    return false;
  } else {
    console.log(true);
    return true;
  }
}
checkIfNumExistsInFIB(4);

//2. get the index of the first Fibonacci number that is greater than or equal
//to the number passed to sumOddFibs
function getGreaterIndex(num) {
  for (i=0; i<fibArray.length; i++) {
    if (fibArray[i] >= num) {
      console.log('The input number `' + num + '` is found between indexes `' + (i-1) + '` and `' + i + '`, the values of which are `'+ fibArray[i-1] + '` and `' + fibArray[i] + '`.\nOf course, the highest index to consider for adding all the odd numbers less than ' + num + ' together is index `' + i + '`.');
      return i;
    }
  }
}
getGreaterIndex(100);


//console.log('FIBL is: ' + FIBL);

/*
WTF?!?!?!?!?!?!?!?!?!?
Why does the following browser crash happen??

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
REFERENCES
  - remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
  - Number.MAX_SAFE_INTEGER(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
  - Number.isSafeInteger(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
  - fibonacci links:
    - https://www.mathsisfun.com/numbers/fibonacci-sequence.html
    - https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    - https://en.wikipedia.org/wiki/Fibonacci_number
    - https://en.wikipedia.org/wiki/Square_number
    - http://stackoverflow.com/questions/12631665/fibonacci-sequence-in-javascript
    - http://stackoverflow.com/questions/4926359/javascript-fibonacci-using-closures
    - http://sarathsaleem.github.io/JavaScriptTasks/
    - http://stackoverflow.com/questions/8331492/javascript-fibonacci
  - JS math max integer value: http://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
  - Math.max: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

*/
