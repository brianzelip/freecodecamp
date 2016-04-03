## [Profile Lookup](https://www.freecodecamp.com/challenges/profile-lookup) challenge

## My browser dev console & scratchpad solution

```js
/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUp(firstName, prop){
// Only change code below this line
  var response = "No such contact";
  
  for (var i = 0; i < 4; i++) {
    if (firstName === contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        response = contacts[i][prop];
        console.log("the response var just changed because the contact contains the property");
      } else {
        response = "No such property";
        console.log("the response var just changed because the contact does NOT contain the property");
      }
    }
  }
  console.log(response);
  return response;
  
// Only change code above this line
}

// Change these values to test your function
lookUp("Kristian", "girlFriend");
```


### My submitted solution (less feedback than above)

```js
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// Only change code below this line
  var response = "No such contact";
  
  for (var i = 0; i < 4; i++) {
    if (firstName === contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        response = contacts[i][prop];
      } else {
        response = "No such property";
      }
    }
  }
  
  return response;
  
// Only change code above this line
}

// Change these values to test your function
lookUp("Kristian", "lastName");

```
