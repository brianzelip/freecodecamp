if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var text = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    //document.getElementById("data").innerHTML = text;
  });

  // open weather map api, http://openweathermap.org/current#geo
  var opnApiURL = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=';
  var opnApiKey = '38c2076ad830abfaa076a00e9319c7cb';
  var opnApiCall = opnApiURL.concat(opnApiKey);

  // forecast.io api, https://developer.forecast.io/docs/v2
  var fcsApiURL = 'https://api.forecast.io/forecast/';
  var fcsApiKey = 'e8fd3809a962abc2ec4c3a4dba4d2cf8';
  var fcsApiCall = fcsApiURL.concat(fcsApiKey + '/' + lat + ',' + long);

  console.log(fcsApiCall);
  var el = document.getElementById("text");
  el.innerHTML = "<p>hello motherfuckers!!!</p>";
  
}
/*
if ("geolocation" in navigator) {
  console.log("yes geolocation is available in the console");
} else {
  console.log("geolocation IS NOT available");
}

console.log(position.coords.latitude);
*/
