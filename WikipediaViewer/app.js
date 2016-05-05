/*

Traditional XHR and JSON.parse() method
=======
// The vanilla way to get JSON data; it breaks because CORS.

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
/*
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
*/
// The JSONP attempt
// adapted from http://stackoverflow.com/a/33460622/2145103
$.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein',
    success : function(json) {
      console.log("Yo, the ajax worked.");
      results.innerHTML = results.innerHTML + '<code>' + json.query.search[1].title + '</code>';
    }
})
// IT WORKS!
