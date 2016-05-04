//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}
