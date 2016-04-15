function geoShit() {

  var content = document.getElementById("content");

  if (!navigator.geolocation){
    alert("FUCK! NO GEO YO!");
    return;
  }

  function success(position) {
    var lat  = position.coords.latitude;
    var lon = position.coords.longitude;

    content.innerHTML = "<p>Your latitude is: " + lat + "</p><p>Your longitude is: " + lon + "</p>";

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=13&size=300x300&sensor=false";

    content.appendChild(img);
  };

  function error() {
    content.innerHTML = "Unable to retrieve your location";
  };

  content.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

geoShit();

// basics
var lat = '39.28668090308831';
var lon = '-76.62364196759327';
var openApiKey = '27beec18e172ad70ec7ca74b22e31896';
var openApiCall = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + openApiKey;

console.log(openApiCall);

var fcsApiKey = '1b02db75f5fdeb5f829a505b802d5c91';
var fcsApiCall = 'https://api.forecast.io/forecast/' + fcsApiKey + '/' + lat + ',' + lon;
console.log(fcsApiCall);
