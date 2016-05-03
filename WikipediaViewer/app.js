/*

// The vanilla way to get JSON data that breaks because CORS

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

// The JSONP attempt
$.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein',
    callback: 'test',
    success : function(json) {
      console.log(json);
    }
})
