document.getElementById('userInput').value = '';//clears the textarea on refresh, without it a previous input text remains after refresh
/*  for some reason the pattern `idName.value` doesn't work like
    `idName.innerHTML`. So we have to use the long form of getElementById
    here and below at the end of the onclick success function.
 */

// make the ajax call if the submit button is clicked or made active and press return
submit.onclick = function() {
  app();
}

// make the ajax call if the return button is pressed while cursor is active inside input textarea
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
ALSO, this solution is adapted from http://stackoverflow.com/a/8934242/2145103
  * it was this solution that helped me to understand that I could make the ajax call it's own function, and then call it in two scenarios - if the search button is pressed or if the enter button is pressed while the cursor is still active in the input textarea.
  * here is a different and good reference for the above solution with `.keypress()`, http://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
 */


// the main function that makes the ajax call to Wikipedia
function app() {
  userInput = document.getElementById('userInput').value;
  $.ajax({
    dataType: 'jsonp',
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srlimit=50&srinfo=totalhits&srsearch=' + userInput,
    success : function(json) {
      console.log("Yo, the ajax worked");
      console.log(json);
      results.innerHTML = '';//clears display space if previous results are there
      searchConfirm.innerHTML = '<h2 class="h3 m0 sm-mb2 regular light-purple">Showing ' + json.query.search.length + ' results for ' + userInput + '</h2>';
      for (i=0; i<json.query.search.length; i++) {
        results.innerHTML = results.innerHTML + '<li><a href="https://en.wikipedia.org/wiki/' + json.query.search[i].title + '" class="purple text-decoration-none"><div class="p2 purple hv-purple"><h2 class="h1 mt0">' + json.query.search[i].title + '</h2><p class="mb0">' + json.query.search[i].snippet + '</p></div></a></li>'
      }//populates the DOM @ `#results` with the Wikipedia search results
      document.getElementById('userInput').value = '';//clears the textarea input after submission
    }
  })// ajax call adapted from http://stackoverflow.com/a/33460622/2145103
}
