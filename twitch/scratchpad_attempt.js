/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var otherArray = ["Apple", "Pear", "Tomato"]

for (x=0; x<fruits.length; x++) {
  if (otherArray.indexOf(fruits[x]) == -1) {
    console.log(fruits[x]);
  }
}


var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "whiteboy7thst", "zrozilacx", "sandyravage", "blametruthtwitch", "streamerhouse", "bzelip"];
var onlineUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "bzelip", "streamerhouse"];
var offlineUsers = users;


function findOffline() {
 for (x=0; x<onlineUsers.length; x++) {
  var idx = users.indexOf(onlineUsers[x]);
   if (idx > -1) {
    offlineUsers.splice(idx, 1);
   }
  }
  console.log('There are ' + offlineUsers.length + ' offline users and they are: ' + offlineUsers);
  return offlineUsers;
}

findOffline();

------------

var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "whiteboy7thst", "zrozilacx", "sandyravage", "blametruthtwitch", "streamerhouse", "bzelip"];
var offlineUsers = [];

//finds which Twitch users are currently streaming, and creates an array of those names
function getOnlineUsers2() {
  for (i=0; i<users.length; i++) {
    var userName = users[i];
    $.getJSON(apiURL + 'streams?channel=' + userName, function(data) {
      if (data.streams[0] != undefined) {
        onlineUsers.push(userName);
        console.log("The online users are: " + onlineUsers);
      }
    }
  }
}

//gets user data for all users who are not currently streaming
function getOfflineUsers2() {
  offlineUsers = users;
  for (x=0; x<onlineUsers.length; x++) {
    var idx = users.indexOf(onlineUsers[x]);
    if (idx > -1) {
      offlineUsers.splice(idx, 1);
    }
    console.log('The offline users are: ' + offlineUsers);
    return offlineUsers;
  }
}

function createUserArrays() {
  getOnlineUsers2().then(function() {
    getOfflineUsers2();
  });
}

createUserArrays();
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/2:15
*/
