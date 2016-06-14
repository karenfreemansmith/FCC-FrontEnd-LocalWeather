/*
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude + ", " +position.coords.longitude);
  });
}
*/
var apiKey = "6c73b3b01770fc89ede9a880b745f4f3";
function getWeather(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    var tempK=parseFloat(response.main.temp);
    var tempF=tempK*(9/5)-459.67;
    var whichIcon="wi-cloudy";
    if (response.weather[0].description.contains("thunder")) {
      whichIcon="wi-thunderstorm";
    } else if (response.weather[0].description.contains("rain")) {
      whichIcon="wi-rain";
    } else if (response.weather[0].description.contains("fog")||response.weather[0].description.contains("mist")) {
      whichIcon="wi-fog";
    } else if (response.weather[0].description.contains("snow")) {
      whichIcon="snow";
    } else if(response.weather[0].description.contains("sun")) {
      whichIcon="wi-day-sunny";
    }
    $('.showWeather').html("<h2>" + city + "</h2><h2>" + tempF.toFixed(1) + "&deg; F</h2><h1><i class='wi "+whichIcon+"'></i></h1><h3>" + response.weather[0].description + "</h3>");
  });
}

$('#weatherLocation').click(function() {
  var city = $('#location').val();
  $('#location').val("");
  getWeather(city);
});
