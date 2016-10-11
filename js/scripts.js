// if(navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     getWeather(position.coords.latitude + ", " +position.coords.longitude);
//   });
// }

var apiKey = "6c73b3b01770fc89ede9a880b745f4f3";
function getWeather(city) {

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    var wDescription = response.weather[0].description.toString();
    var tempK=parseFloat(response.main.temp);
    var tempF=tempK*(9/5)-459.67;
    var whichIcon="wi-cloudy";
    if (response.weather[0].description.includes("thunder")) {
      whichIcon="wi-thunderstorm";
    } else if (wDescription.includes("rain")) {
      whichIcon="wi-rain";
    } else if (wDescription.includes("fog")||wDescription.includes("mist")) {
      whichIcon="wi-fog";
    } else if (wDescription.includes("snow")) {
      whichIcon="snow";
    } else if(wDescription.includes("sun")) {
      whichIcon="wi-day-sunny";
    } else {
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
