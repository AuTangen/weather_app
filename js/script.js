// make a request to Weather API (current local weather)
var baseURL = 'https://api.openweathermap.org/data/2.5'
var apiKey = 'bc976bd0e83bab3ef0409fd860d16fa4'
var lat = '40.2859'
var lon = '-74.3486'
var weatherURL = baseURL + '/weather?appid=' + apiKey;
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var search = $('#search')



// function getLocation () {
//     navigator.geolocation.getCurrentPosition(function(locationData) {
//         console.log(locationData)
//         $.get(weatherURL + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).then(function(data) {
//             console.log(data)
//         });
//     });
// }
// getLocation()

var forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?appid='
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?appid=';
var apiKey = 'bc976bd0e83bab3ef0409fd860d16fa4'
var city = $('#searchbar').val()
var search = $('#search')
var currentForecast = $('#currentForecast')
var temp = $('#temp')
var wind = $('#wind')
var humidity = $('#humid')
// var lon = xxx
// var lat = xxx
var date = dayjs().format('dddd MMM D YYYY')

currentForecast.text(date);

function getCoords(){
    var city = $('#searchbar').val()
    
    console.log(city)
    $.get(geoURL + apiKey + '&q=' + city).then(function(findCity) {
        var lat = findCity[0].lat
        var lon = findCity[0].lon
        // console.log(data[0].lat)
        // console.log(data[0].lon)
        $.get(forecastURL + apiKey + '&lat=' + lat + '&lon=' + lon + '&units=imperial').then(function(weatherData) {
            console.log(weatherData)
            console.log(weatherData.city.name)
            currentForecast.text(weatherData.city.name + ' ' + date);
            temp.text('Temp: ' + weatherData.list[0].main.temp + ' \u00B0'+ 'F');
            wind.text('Wind Speed ' + weatherData.list[0].wind.speed + 'mph');
            humidity.text('Humidity: ' + weatherData.list[0].main.humidity + '%');
            localStorage.setItem('weather', weatherData.city.name)
        })

})
};


// $.get(forecastURL + apiKey  + '&lat=' + '39.7392364' + '&lon=' + '-104.984862').then(function(data) {
//     console.log(data)
// })


search.click(getCoords)


function init() {
   
};
init()