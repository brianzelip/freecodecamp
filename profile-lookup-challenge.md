## [Profile Lookup](https://www.freecodecamp.com/challenges/profile-lookup) challenge


The [waypoint hints](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Checkpoint-Profile-Lookup) were very helpful in this case.
Particularly the nested `if` statement, and the keeping the `return "No such contact"` out of the `for` loop.


**My browser dev console & scratchpad solution**

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



**My submitted solution (less feedback than above)**

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


**Here is the solution provided in the waypoint linked above**

```
Code Solution:

for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x][prop]) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";

Code Explanation:

    The for loop runs, starting at the first object in the contacts list
    If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes
    Then, if the prop parameter passed into the function is present in that object, the value of the prop is returned
        If the second if statement fails, "No such property" is returned
    If the first if statement fails, the for loop continues on to the next object in the contact list
    If the firstName parameter isn't matched by the final contact object, the for loop exits and "No such contact" is returned

```

