$.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein',
    success : function(json) {
      console.log("Yo, the ajax worked.");
      for (i=0; i<json.query.search.length; i++) {
        results.innerHTML = results.innerHTML + '<li>' + json.query.search[i].title + '</li>'
      }
    }
})
// adapted from http://stackoverflow.com/a/33460622/2145103
