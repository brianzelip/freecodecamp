/*
Sum All Odd Fibonacci Numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

/*
1. create first sequence
2. check if the number passed to sumOddFibs is contained in the first sequence
2.1. If the number passed to sumOddFibs is larger than max value in first squence, create a larger sequence, then check for the number passed to sumOddFibs, and if not, create larger sequence, then check...
3. get the index of the first Fibonacci number that is greater than or equal to the number passed to sumOddFibs
4. determine which index value leading up to the Fibonacci number in step 3 is odd and push it to an array
5. sum all the odd fib numbers and return for the solution!
*/


//1. create an array of the Fibonacci sequence of numbers up to maxIndex
function createFibSequence(maxIndex) {
  var fibSeq = [0,1];
  if (maxIndex < 2) {
    return fibSeq;
  } else if (maxIndex > 1) {
    for (i=2; i<=maxIndex; i++) {
      fibSeq.push(fibSeq[i-1]+fibSeq[i-2])
    }
  }
  console.log(fibSeq);
  return fibSeq;
}

//console.log(createFibSequence(100));

//2. check if number is contained in the first sequence
function checkIfNumExistsInFibSequence(num, arr) {
  if (num === Math.max(...arr)) {
    console.log(num + ' is equal to ' + Math.max(...arr) + '.');
    return num + ' is equal to ' + Math.max(...arr) + '.';
  } else if (num < Math.max(...arr)) {
    console.log(num + ' is less than ' + Math.max(...arr) + '.');
    return num + ' is less than ' + Math.max(...arr) + '.';
  } else if (num > Math.max(...arr)) {
    console.log('Fuck, ' + num + ' is greater than ' + Math.max(...arr) + '!');
    return 'Fuck, ' + num + ' is greater than ' + Math.max(...arr) + '!';
  }
}

checkIfNumExistsInFibSequence(2880067194370816300, createFibSequence(90));



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
