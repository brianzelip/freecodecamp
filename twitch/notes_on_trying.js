var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "whiteboy7thst", "zrozilacx", "sandyravage", "blametruthtwitch", "streamerhouse", "bzelip"];
var offlineUsers = [];
var onlineUsers = [];

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
