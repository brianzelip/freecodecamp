function geoShit() {

  var content = document.getElementById("content");

  if (!navigator.geolocation){
    alert("FUCK! NO GEO YO!");
    return;
  }

  function success(position) {
    var lat  = position.coords.latitude;
    var long = position.coords.longitude;

    content.innerHTML = "<p>hello motherfuckers!!!</p>";

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=300x300&sensor=false";

    content.appendChild(img);
  };

  function error() {
    content.innerHTML = "Unable to retrieve your location";
  };

  content.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

geoShit();
