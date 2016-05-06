document.getElementById('userInput').value = '';//clears the textarea on refresh, without it a previous input text remains after refresh
/*  for some reason the pattern `idName.value` doesn't work like
    `idName.innerHTML`. So we have to use the long form of getElementById
    here and below at the end of the onclick success function.
 */

submit.onclick = function() {
  app();
}

$(function() {
  $('#userInput').keypress(function(e) {
    if(e.which == 13) {
      app();
    }
  });
});/* Not sure why I have to use jQuery to start the function here, but when trying to do it w/ out it doesn't work, ie:
```js
function() {
  $('#userInput').keypress(function(e) {
    if(e.which == 13) {
      app();
    }
  });
}
```
 */


function app() {
  userInput = document.getElementById('userInput').value;
  $.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + userInput,
    success : function(json) {
      console.log("Yo, the ajax worked");
      console.log(json.query.search[2]);
      results.innerHTML = '';//clears display space if previous results are there
      searchConfirm.innerHTML = '<h2 class="h3 m0 sm-mb2 regular light-purple">Results for ' + userInput + '</h2>';
      for (i=0; i<json.query.search.length; i++) {
        results.innerHTML = results.innerHTML + '<li><div class="p2 purple hv-purple"><h2 class="h1 mt0">' + json.query.search[i].title + '</h2><p class="mb0">' + json.query.search[i].snippet + '</p></div></li>'
      }//populates the DOM @ `#results` with the Wikipedia search results
      document.getElementById('userInput').value = '';//clears the textarea input after submission
    }
  })// ajax call adapted from http://stackoverflow.com/a/33460622/2145103
}


// Next i want to clear the textarea after search, and inject html that confirms to the user what they searched for
// start with this resource: https://duckduckgo.com/?q=clear+html+text+area+after+submit&t=ffab&ia=qa
