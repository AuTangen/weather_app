// make a request to Weather API (current local weather)
// var baseURL = 'https://api.openweathermap.org/data/2.5'
// var apiKey = 'bc976bd0e83bab3ef0409fd860d16fa4'
// var lat = '40.2859'
// var lon = '-74.3486'
// var weatherURL = baseURL + '/weather?appid=' + apiKey;
// var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
// var search = $('#search')



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
var day1Forecast = $('#day1-forecast')
var day2Forecast = $('#day2-forecast')
var day3Forecast = $('#day3-forecast')
var day4Forecast = $('#day4-forecast')
var day5Forecast = $('#day5-forecast')
var temp = $('#temp')
var wind = $('#wind')
var humidity = $('#humid')

// -----------------------------------------
var temp1 = $('#temp1')
var wind1 = $('#wind1')
var humidity1 = $('#humid1')
// ---------------------------------------
var temp2 = $('#temp2')
var wind2 = $('#wind2')
var humidity2 = $('#humid2')
// -----------------------------------------
var temp3 = $('#temp3')
var wind3 = $('#wind3')
var humidity3 = $('#humid3')
// ----------------------------------------
var temp4 = $('#temp4')
var wind4 = $('#wind4')
var humidity4 = $('#humid4')
// ------------------------------------------------
var temp5 = $('#temp5')
var wind5 = $('#wind5')
var humidity5 = $('#humid5')
// ------------------------------------------
var sideHistory = $('#side-history')
// var lon = xxx
// var lat = xxx
var date = dayjs().format('dddd MMM D YYYY')

currentForecast.text(date);
// ------------------------set initial location to NewYorkCity-----------------------
function initialDisplay() {
    var startLoc = 'New York City'
    var display = $('#display')

    $.get(geoURL + apiKey + '&q=' + startLoc).then(function(findCity) {
        var lat = findCity[0].lat
        var lon = findCity[0].lon
        // console.log(findCity)
        $.get(forecastURL + apiKey + '&lat=' + lat + '&lon=' + lon + '&units=imperial').then(function(weatherData) {
            console.log(weatherData)
            console.log(weatherData.city.name)
            var savedCity = weatherData.city.name;
            var weatherIcon = weatherData.list[0].weather[0].icon
            var weatherIcon1 = weatherData.list[7].weather[0].icon
            var weatherIcon2 = weatherData.list[15].weather[0].icon
            var weatherIcon3 = weatherData.list[23].weather[0].icon
            var weatherIcon4 = weatherData.list[31].weather[0].icon
            var weatherIcon5 = weatherData.list[39].weather[0].icon
            console.log(weatherIcon)
            currentForecast.text(weatherData.city.name + ' ' + date);
            display.append(`<img src="https://openweathermap.org/img/w/${weatherIcon}.png">`)
            temp.text('Temp: ' + weatherData.list[0].main.temp + ' \u00B0'+ 'F');
            wind.text('Wind: ' + weatherData.list[0].wind.speed + 'mph');
            humidity.text('Humidity: ' + weatherData.list[0].main.humidity + '%');

            // 5 day forecast---------------------slice date--------------------
            
            day1Forecast.text(weatherData.list[7].dt_txt.slice(0, 10))
            day1Forecast.prepend(`<img src="https://openweathermap.org/img/w/${weatherIcon1}.png">`)
            temp1.text('Temp: ' + weatherData.list[7].main.temp + ' \u00B0'+ 'F');
            wind1.text('Wind: ' + weatherData.list[7].wind.speed + 'mph');
            humidity1.text('Humidity: ' + weatherData.list[7].main.humidity + '%');

            // -------------------------------------------------------------------------
            day2Forecast.text(weatherData.list[15].dt_txt.slice(0, 10)) 
            day2Forecast.prepend(`<img src="https://openweathermap.org/img/w/${weatherIcon2}.png">`)
            temp2.text('Temp: ' + weatherData.list[15].main.temp + ' \u00B0'+ 'F');
            wind2.text('Wind: ' + weatherData.list[15].wind.speed + 'mph');
            humidity2.text('Humidity: ' + weatherData.list[15].main.humidity + '%');
            // -------------------------------------------------------------------------
            day3Forecast.text(weatherData.list[23].dt_txt.slice(0, 10)) 
            day3Forecast.prepend(`<img src="https://openweathermap.org/img/w/${weatherIcon3}.png">`)
            temp3.text('Temp: ' + weatherData.list[23].main.temp + ' \u00B0'+ 'F');
            wind3.text('Wind: ' + weatherData.list[23].wind.speed + 'mph');
            humidity3.text('Humidity: ' + weatherData.list[23].main.humidity + '%');
            // -------------------------------------------------------------------------
            day4Forecast.text(weatherData.list[31].dt_txt.slice(0, 10)) 
            day4Forecast.prepend(`<img src="https://openweathermap.org/img/w/${weatherIcon4}.png">`)
            temp4.text('Temp: ' + weatherData.list[31].main.temp + ' \u00B0'+ 'F');
            wind4.text('Wind: ' + weatherData.list[31].wind.speed + 'mph');
            humidity4.text('Humidity: ' + weatherData.list[31].main.humidity + '%');
            //// -------------------------------------------------------------------------
            day5Forecast.text(weatherData.list[39].dt_txt.slice(0, 10)) 
            day5Forecast.prepend(`<img src="https://openweathermap.org/img/w/${weatherIcon5}.png">`)
            temp5.text('Temp: ' + weatherData.list[39].main.temp + ' \u00B0'+ 'F');
            wind5.text('Wind: ' + weatherData.list[39].wind.speed + 'mph');
            humidity5.text('Humidity: ' + weatherData.list[39].main.humidity + '%');
        });

    });
}

// function renderSavedSearch () {
//     var buttons = document.querySelectorAll('button')
//     console.log(buttons)
//     for ( let i = 1; i < buttons.length; i++) {
//         var id = buttons[i].id
//         var savedCity = JSON.parse(localStorage.getItem(id));
//         console.log(savedCity)
//           }
          
//     console.log(id)
//         }
// -------------------------------------------------------------
    // buttons.each(function)
    // 
    // console.log(savedCity)
        // var savedCity = timeBlock.attr('id').split('-')[1];
        // var savedEvent = localStorage.getItem(hour);
        
        // timeBlock.find('textarea').text(savedEvent);
    // })

// ------------press button on sidebar to call recent searches-------   
function historySearch() {
    console.log(this.id)
$.get(geoURL + apiKey + '&q=' + this.id).then(function(findCity) {
    console.log(findCity)
    var lat = findCity[0].lat
    var lon = findCity[0].lon
    console.log(findCity[0].lat)
    console.log(findCity[0].lon)
    $.get(forecastURL + apiKey + '&lat=' + lat + '&lon=' + lon + '&units=imperial').then(function(weatherData) {
        console.log(weatherData)
        console.log(weatherData.city.name)
        var savedCity = weatherData.city.name;
        currentForecast.text(weatherData.city.name + ' ' + date + ' ' + weatherData.list[0].weather[0].icon);
        temp.text('Temp: ' + weatherData.list[0].main.temp + ' \u00B0'+ 'F');
        wind.text('Wind: ' + weatherData.list[0].wind.speed + 'mph');
        humidity.text('Humidity: ' + weatherData.list[0].main.humidity + '%');

    });
});
}


// ---------------------------------------------------------------------------------
function getCoords(){
    var city = $('#searchbar').val()
    
    console.log(city)
    $.get(geoURL + apiKey + '&q=' + city).then(function(findCity) {
        var lat = findCity[0].lat
        var lon = findCity[0].lon
        
        
        $.get(forecastURL + apiKey + '&lat=' + lat + '&lon=' + lon + '&units=imperial').then(function(weatherData) {
            console.log(weatherData)
            console.log(weatherData.city.name)
            var savedCity = weatherData.city.name;
            currentForecast.text(weatherData.city.name + ' ' + date + ' ' + weatherData.list[0].weather[0].icon);
            temp.text('Temp: ' + weatherData.list[0].main.temp + ' \u00B0'+ 'F');
            wind.text('Wind: ' + weatherData.list[0].wind.speed + 'mph');
            humidity.text('Humidity: ' + weatherData.list[0].main.humidity + '%');

            // 5 day forecast---------------------slice date--------------------
            day1Forecast.text(weatherData.list[7].dt_txt) 
            temp1.text('Temp: ' + weatherData.list[7].main.temp + ' \u00B0'+ 'F');
            wind1.text('Wind: ' + weatherData.list[7].wind.speed + 'mph');
            humidity1.text('Humidity: ' + weatherData.list[7].main.humidity + '%');
            // -------------------------------------------------------------------------
            day2Forecast.text(weatherData.list[15].dt_txt) 
            temp2.text('Temp: ' + weatherData.list[15].main.temp + ' \u00B0'+ 'F');
            wind2.text('Wind: ' + weatherData.list[15].wind.speed + 'mph');
            humidity2.text('Humidity: ' + weatherData.list[15].main.humidity + '%');
            // -------------------------------------------------------------------------
            day3Forecast.text(weatherData.list[23].dt_txt) 
            temp3.text('Temp: ' + weatherData.list[23].main.temp + ' \u00B0'+ 'F');
            wind3.text('Wind: ' + weatherData.list[23].wind.speed + 'mph');
            humidity3.text('Humidity: ' + weatherData.list[23].main.humidity + '%');
            // -------------------------------------------------------------------------
            day4Forecast.text(weatherData.list[31].dt_txt) 
            temp4.text('Temp: ' + weatherData.list[31].main.temp + ' \u00B0'+ 'F');
            wind4.text('Wind: ' + weatherData.list[31].wind.speed + 'mph');
            humidity4.text('Humidity: ' + weatherData.list[31].main.humidity + '%');
            //// -------------------------------------------------------------------------
            day5Forecast.text(weatherData.list[39].dt_txt) 
            temp5.text('Temp: ' + weatherData.list[39].main.temp + ' \u00B0'+ 'F');
            wind5.text('Wind: ' + weatherData.list[39].wind.speed + 'mph');
            humidity5.text('Humidity: ' + weatherData.list[39].main.humidity + '%');

            localStorage.setItem(weatherData.city.name, JSON.stringify(weatherData))
            sideHistory.append(`<button id=${weatherData.city.name}>${weatherData.city.name}</button>`)

            var savedCity = $('button')
            console.log(savedCity)
            savedCity.click(historySearch);
            // renderSavedSearch();

            // -----this should be in a separate render function----------
            // sideHistory.append(`<button>${weatherData.city.name}</button>`)

            // var historyBtn = $('#savedHist')
            // historyBtn.text(savedCity)
            
        })

})
};


// $.get(forecastURL + apiKey  + '&lat=' + '39.7392364' + '&lon=' + '-104.984862').then(function(data) {
//     console.log(data)
// })


search.click(getCoords)


function init() {
   initialDisplay();
};
init()