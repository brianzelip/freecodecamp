var twitch = (function() {
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
            /*onlineUsers.push(name);
            console.log('User ' + data.streams[0].channel.display_name + ' is online!');
            console.log("The online users are: " + onlineUsers);*/
            Data.innerHTML += '<a class="block md-col-11 lg-col-9 mx-auto no-underline pointer hover-bg-gray" href="' + data.streams[0].channel.url + '"><div class="border-top border-right border-left p2"><div class="sm-flex lg-flex-center lg-left sm-justify-between"><div class="flex-none"><img src="' + data.streams[0].channel.logo + '" class="circle hunnid"><p class="h5 m0 sm-center">' + data.streams[0].viewers + ' viewers</p></div><div class="px2 sm-flex-auto"><h1 class="h2 md-h1 m0 break-word">' + data.streams[0].channel.display_name + '</h1><h2 class="h4 md-h2 m0 break-word">' + data.streams[0].game + '</h2></div><img width="214" class="sm-flex-none" src="'  + data.streams[0].preview.medium + '"></div></div></a>';
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
            /*console.log('User ' + name + ' is offline :( )');
            console.log("The offline users are: " + offlineUsers);*/
            // now that you know user is offline, query for offline details
            $.getJSON(apiOfflinePrefix + name + '?callback=?', function(offData) {
              if (offData.display_name != null) {
                /*console.log('Of the offline folks, ' + offData.display_name + ' is a valid user!!');*/
                Data.innerHTML += '<a class="block md-col-11 lg-col-9 mx-auto no-underline pointer hover-bg-gray" href="https://www.twitch.tv/' + offData.name + '"><div class="border-top border-right border-left p2"><div class="sm-flex lg-flex-center lg-left sm-justify-between"><div class="flex-none"><img src="' + offData.logo + '" class="circle hunnid"></div><div class="px2 sm-flex-auto"><h1 class="h2 md-h1 m0 break-word">' + offData.display_name + '</h1><h2 class="h4 md-h2 m0 break-word italic">offline</h2></div><!--<img width="214" class="sm-flex-none" src="">--></div></div></a>';
              } else if (offData.status == 404) {
                /*console.log('Of the offline folks, ' + name + ' is NOT a valid member.');*/
                Data.innerHTML += '<a class="block md-col-11 lg-col-9 mx-auto no-underline hover-bg-gray hover-default" href="https://www.twitch.tv/' + name + '"><div class="border-top border-right border-left p2"><div class="sm-flex lg-flex-center lg-left sm-justify-between"><div class="flex-none"><img src="https://static-cdn.jtvnw.net/jtv-static/404_preview-300x300.png" class="circle hunnid"></div><div class="px2 sm-flex-auto"><h1 class="h2 md-h1 m0 break-word">' + name + '</h1><h2 class="h4 md-h2 m0 break-word italic">' + offData.message + '</h2></div></div></div></a>';
              }
            })//getJSON
          }//if
        });//getJSON
      }//offlineUserData
      return this;
    },//offline

    all: function() {
      console.log(this);
      this.online();
      this.offline();
      return this;
    }//all
  };
})();

//twitch.online();
//twitch.offline();
//twitch.online().offline();
twitch.all();

/*

BIG UPS TO RAY V @ LYNDA.COM for the 'JS Functions: Chaining module method calls' video!
The solution presented above is directly adapted from his video at http://www.lynda.com/JavaScript-tutorials/Chaining-module-method-calls/148137/158407-4.html

*/
