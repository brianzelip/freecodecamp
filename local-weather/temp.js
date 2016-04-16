appButton.onclick = function() {

  if (!navigator.geolocation){
    alert("FUCK! NO GEO YO!");
    return;
  };

  function geo_success(position) {

    var weatherKey = '27beec18e172ad70ec7ca74b22e31896';
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=' + weatherKey;

    function Get(URL){
      var Httpreq = new XMLHttpRequest(); // a new request
      Httpreq.open("GET",URL,false);
      Httpreq.send(null);
      return Httpreq.responseText;
    };

    var openWeatherData = JSON.parse(Get(weatherAPI));
    var celsius = parseFloat(openWeatherData.main.temp - 273.15).toFixed(1);
    var fahrenheit = parseFloat((openWeatherData.main.temp - 273.15)* 1.8
+ 32).toFixed(1);

    // Populate the DOM
    city.innerHTML = openWeatherData.name;
    //need an if statement here or something to allow toggle between F and C
    temp.innerHTML = fahrenheit;
    weather.innerHTML = openWeatherData.weather[0].description;
    icon.innerHTML = '<i class="wi wi-owm-' + openWeatherData.weather[0].id + '"></i>';

    var currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
    console.log(currentTime);

  };

  function geo_error() {
    city.innerHTML = "Unable to retrieve your location";
  };

  var geo_options = { enableHighAccuracy: true };

  navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);

};


/*
REFERENCES

"EventHandlers.onclick": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick",
"XMLHttpRequest": "http://stackoverflow.com/a/22790025/2145103",
"parseFloat": "http://stackoverflow.com/a/6134070/2145103",
"kelvin_conversions": "http://www.metric-conversions.org/temperature/kelvin-to-celsius.htm?val=200",
"JSON.stringify()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
"time": [
  "http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript#847196",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"
],
"weather_icons": "https://erikflowers.github.io/weather-icons/",



*/


/*
switch statement code
case 'clear sky':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'few clouds':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'scattered clouds':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'broken clouds':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'shower rain':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'rain':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'thunderstorm':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'snow':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;
case 'mist':
  icon.innerHTML = '<i class="wi wi-night-sleet"></i>';
  break;

*/
