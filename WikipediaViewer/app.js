submit.onclick = function() {
  userInput = document.getElementById('userInput').value;
  $.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + userInput,
    success : function(json) {
      console.log("Yo, the ajax worked");
      console.log(json.query.search[2]);
      results.innerHTML = '';
      for (i=0; i<json.query.search.length; i++) {
        results.innerHTML = results.innerHTML + '<li><div class="p2 purple hv-purple"><h2 class="h1 mt0">' + json.query.search[i].title + '</h2><p class="mb0">' + json.query.search[i].snippet + '</p></div></li>'
      }
      userInput.value = '';
    }
  })// adapted from http://stackoverflow.com/a/33460622/2145103
}
