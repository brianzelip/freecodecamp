

**Random number generated from a range of numbers**
From the [Generate Random Whole Numbers within a Range](https://www.freecodecamp.com/challenges/generate-random-whole-numbers-within-a-range) challenge


```js
function ourFunction(ourMin, ourMax) {

  console.log(Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin);
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourFunction(52, 2365432);
```
