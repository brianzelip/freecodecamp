/*

<<<<<<< HEAD
Traditional XHR and JSON.parse() method
=======
// The vanilla way to get JSON data that breaks because CORS
>>>>>>> 5d252a7b16168cc11b30606d9c7c2e2b1cb840ae

function Get(URL){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",URL,false);
  Httpreq.send(null);
  return Httpreq.responseText;
};
var wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein';
var wikiData = JSON.parse(Get(wikiURL));
console.log(wikiData.query.search[1]);
*/

// jQuery ajax method
$.get('https://commons.wikimedia.org/w/api.php?' +
  $.param({
      format: 'json',
      action: 'query',
      list: 'search',
      srsearch: 'Albert Einstein',
      callback: 'test'
  })).done(function() {
    console.log("it worked!");
  });
=======
// The JSONP attempt
$.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein',
    callback: 'test',
    success : function(json) {
      console.log(json);
    }
})
