var ray = (function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "whiteboy7thst", "zrozilacx", "sandyravage", "blametruthtwitch", "streamerhouse", "bzelip"];
  var onlineUsers = [];
  var offlineUsers = [];
  var apiOnlinePrefix = 'https://api.twitch.tv/kraken/streams?channel=';
  var apiOfflinePrefix = 'https://api.twitch.tv/kraken/users/';

  return {
    online: function() {
      for (i=0; i<users.length; i++) {
        getOnlineUsers(users[i]);
      }
      function getOnlineUsers(name) {
        $.getJSON(apiOnlinePrefix + name, function(data) {
          if (data.streams[0] !== undefined) {
            onlineUsers.push(name);
            console.log('User ' + data.streams[0].channel.display_name + ' is online!');
            console.log("The online users are: " + onlineUsers);
          }//if
        });//getJSON
      }//onlineUserData
      return this;
    },//online

    offline: function() {
      for (i=0; i<users.length; i++) {
        getOfflineUsers(users[i]);
      }
      function getOfflineUsers(name) {
        $.getJSON(apiOnlinePrefix + name, function(data) {
          if (data.streams[0] === undefined) {
            offlineUsers.push(name);
            console.log('User ' + name + ' is offline :( )');
            console.log("The offline users are: " + offlineUsers);
            // now that you know user is offline, query for offline details
            $.getJSON(apiOfflinePrefix + name + '?callback=?', function(offData) {
              if (offData.display_name != null) {
                console.log('Of the offline folks, ' + offData.display_name + ' is a valid user!!');
              } else if (offData.status == 404) {
                console.log('Of the offline folks, ' + name + ' is NOT a valid member.');
              }
            })//getJSON
          }//if
        });//getJSON
      }//offlineUserData
      return this;
    }//offline
  };
})();

ray.offline();
