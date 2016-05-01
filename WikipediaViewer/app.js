/*
function Get(URL){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",URL,false);
  Httpreq.send(null);
  return Httpreq.responseText;
};


// Dynamically populate DOM with each brewery as a link to their website
var hardAPI = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein&callback=onWikipedia';

var wikiResponse = JSON.parse(Get(hardAPI));

console.log(wikiResponse);

/*
for (i=0; i<response.continue.query.search.length; i++) {
  dataNav.innerHTML = dataNav.innerHTML + '<a id="id' + breweryData[i].id + '" class="block orange mb1" href="#">' + breweryData[i].name + '</a>'
}
*/
/*
// BEGIN NEW JQUERY WORK BELOW
$.getJSON( "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=http%3A%2F%2Flocalhost%3A8080&list=search&srsearch=Albert+Einstein", function( data ) {
  console.log(data);
});

console.log("hello");
*/

// trying code from http://stackoverflow.com/questions/33460552/how-to-read-mediawiki-api-json-response

$.ajax({
    dataType: 'jsonp',
    url : 'https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&srsearch=Albert+Einstein',
    success : function(json) {
        json.query.allimages.forEach(function(item) {
            $('<img/>', { src : item.url }).appendTo('#images');
        })
    }
})
