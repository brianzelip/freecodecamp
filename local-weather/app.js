appButton.onclick = function() {

  if (!navigator.geolocation){
    alert("FUCK! NO GEO YO!");
    return;
  };

  function geo_success(position) {

    // get data from OpenWeatherMap's API
    var weatherKey = '27beec18e172ad70ec7ca74b22e31896';
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=' + weatherKey;

    function Get(URL){
      var Httpreq = new XMLHttpRequest();
      Httpreq.open("GET",URL,false);
      Httpreq.send(null);
      return Httpreq.responseText;
    };

    // create variables for values to be injected into DOM
    var openWeatherData = JSON.parse(Get(weatherAPI));
    var celsius = parseFloat(openWeatherData.main.temp - 273.15).toFixed(1);
    var fahrenheit = parseFloat((openWeatherData.main.temp - 273.15)* 1.8
+ 32).toFixed(1);

    // Populate the DOM
    city.innerHTML = openWeatherData.name;
    temp.innerHTML = fahrenheit + "&deg;<sup class='h3'>F</sup>";
    tempToggleButton.innerHTML = "as Celsius";

    // set up the toggle F/C functionality
    var currentlyFahrenheit = true;
    // implement the toggle
    tempToggleButton.onclick = function() {
      if (currentlyFahrenheit) {
        currentlyFahrenheit = false;
        temp.innerHTML = celsius + "&deg;<sup class='h3'>C</sup>";
        tempToggleButton.innerHTML = "as Fahrenheit";
      }
      else {
        currentlyFahrenheit = true;
        temp.innerHTML = fahrenheit + "&deg;<sup class='h3'>F</sup>";
        tempToggleButton.innerHTML = "as Celsius";
      }
    };

    // deciding to comment out displaying the weather description info (ie: "clear sky")
    //weather.innerHTML = openWeatherData.weather[0].description;

    // compare local time with weather data for proper icon (day or night)
    var currentLocalTime = Math.round(new Date().getTime()/1000.0);
    var currentTime = new Date();

    if (currentLocalTime > openWeatherData.sys.sunrise && currentLocalTime < openWeatherData.sys.sunset) {
      icon.innerHTML = '<i class="wi wi-owm-day-' + openWeatherData.weather[0].id + '"></i>';
    } else {
      icon.innerHTML = '<i class="wi wi-owm-night-' + openWeatherData.weather[0].id + '"></i>';
    }

    time.innerHTML = currentTime.toLocaleTimeString();
  };

  function geo_error() {
    city.innerHTML = "Unable to retrieve your location";
  };

  var geo_options = { enableHighAccuracy: true };

  navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
};

/*
{
  "REFERENCES": {
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
    "compare current local unix time to sunrise and sunset unix times": [
      "http://www.epochconverter.com/", "http://stackoverflow.com/a/847196/2145103"
    ],
    "toggle state function MAIN SOLUTION": "http://stackoverflow.com/a/8723199/2145103",
    "toggle state function BACKUP": ["http://stackoverflow.com/questions/36370772/how-can-i-use-toggleclass-to-switch-between-fahrenheit-and-celsius-on-my-p","https://proto.io/freebies/onoff/"],
    "weather app design inspiration": "https://www.google.com/search?tbm=isch&q=weather%20app%20ui&tbs=imgo:1#imgrc=_",
    "transparency, opacity, and inheritance": [
      "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
      "http://stackoverflow.com/a/13509036/2145103"
    ]
  }
}
*/