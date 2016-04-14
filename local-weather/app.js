
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var text = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    document.getElementById("data").innerHTML = text;
  });
}
