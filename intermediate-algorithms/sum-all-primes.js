/*
Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

/*
Approach
1. for all numbers up to/including the passed number, if prime add it to a returned value
  - see http://stackoverflow.com/a/31240554/2145103 for a reference to the approach used herein
*/

function sumPrimesThru(num) {//change func name to sumPrimes(num) for submission to FreeCodeCamp
  var isPrime;
  var sum = 0;
  var primes = [];//here for testing only to see the numbers identified as prime

  //BE CAREFUL -- the FreeCodeCamp REPL warned that line 25 presents a possible endless loop

  for (i=2; i<=num; i++) {//for each number up to and including num
    isPrime = true;
    for (x=2; x<i; x++) {//if i divisible by any previous number x, i is not prime
      if (i%x === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      sum += i;
      primes.push(i);
    }
  }
  console.log('The sum of all prime numbers thru ' + num + ' is: ' + sum);
  return sum;
}
sumPrimesThru(977);

/*
//isPrimePseudocode(num) - my JS port of https://en.wikipedia.org/wiki/Primality_test#Pseudocode

function isPrimePseudocode(num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  var i = 5;
  while ((i*i) <= num) {
    if (num & i === 0 || (num & (i+2)) === 0) {
      return false;
    }
    i+=6;
  }
  return true;
}
console.log(isPrimePseudocode(4));
*/

/*
REFERENCES
  - for loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  - arr.push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  - Prime number and related infos:
    - wiki: https://en.wikipedia.org/wiki/Prime_number
    - naive algorithm from wikipedia: https://en.wikipedia.org/wiki/Primality_test#Pseudocode
    - what does % do in JS: http://stackoverflow.com/questions/8900652/what-does-do-in-javascript
    - the approach to the solution presented in this file: http://stackoverflow.com/a/31240554/2145103
    - see also: http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
    - for ref table of primes up to 1000: http://www.factmonster.com/math/numbers/prime.html
    - prime number calc: http://www.isprimenumber.com/prime/977
    - Sieve Theory: https://en.wikipedia.org/wiki/Sieve_theory

*/
