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

var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?appid='
var geoURL = 'https://api.openweathermap.org/geo/1.0/direct?appid=';
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
var icon = $('#icon')

// -----------------------------------------
var temp1 = $('#temp1')
var wind1 = $('#wind1')
var humidity1 = $('#humid1')
var icon1 = $('#icon1')
// ---------------------------------------
var temp2 = $('#temp2')
var wind2 = $('#wind2')
var humidity2 = $('#humid2')
var icon2 = $('#icon2')
// -----------------------------------------
var temp3 = $('#temp3')
var wind3 = $('#wind3')
var humidity3 = $('#humid3')
var icon3 = $('#icon3')
// ----------------------------------------
var temp4 = $('#temp4')
var wind4 = $('#wind4')
var humidity4 = $('#humid4')
var icon4 = $('#icon4')
// ------------------------------------------------
var temp5 = $('#temp5')
var wind5 = $('#wind5')
var humidity5 = $('#humid5')
var icon5 = $('#icon5')
// ------------------------------------------
var sideHistory = $('#side-history')
// var lon = xxx
// var lat = xxx
var date = dayjs().format('dddd MMM D YYYY')

var searchHistory = [];

currentForecast.text(date);
// ------------------------set initial location to NewYorkCity-----------------------
function initialDisplay() {
    var startLoc = 'New York City'
    

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

            var foretemp = String(weatherData.list[0].main.temp)
            var foretemp1 = String(weatherData.list[7].main.temp)
            var foretemp2 = String(weatherData.list[15].main.temp)
            var foretemp3 = String(weatherData.list[23].main.temp)
            var foretemp4 = String(weatherData.list[31].main.temp)
            var foretemp5 = String(weatherData.list[39].main.temp)

            console.log('foretemp ' + foretemp)
            console.log(weatherIcon)
            currentForecast.text(weatherData.city.name + ' ' + date);
            icon.html(`<img src="https://openweathermap.org/img/w/${weatherIcon}.png">`)
            temp.text(foretemp.slice(0, foretemp.indexOf('.')) + ' \u00B0'+ 'F');
            wind.text('Wind: ' + weatherData.list[0].wind.speed + 'mph');
            humidity.text('Humidity: ' + weatherData.list[0].main.humidity + '%');

            // 5 day forecast---------------------slice date--------------------
            
            day1Forecast.text(weatherData.list[7].dt_txt.slice(5, 10))
            icon1.html(`<img src="https://openweathermap.org/img/w/${weatherIcon1}.png">`)
            temp1.text(foretemp1.slice(0, foretemp1.indexOf('.')) + ' \u00B0'+ 'F');
            wind1.text('Wind: ' + weatherData.list[7].wind.speed + 'mph');
            humidity1.text('Humidity: ' + weatherData.list[7].main.humidity + '%');

            // -------------------------------------------------------------------------
            day2Forecast.text(weatherData.list[15].dt_txt.slice(5, 10)) 
            icon2.html(`<img src="https://openweathermap.org/img/w/${weatherIcon2}.png">`)
            temp2.text(foretemp2.slice(0, foretemp2.indexOf('.')) + ' \u00B0'+ 'F');
            wind2.text('Wind: ' + weatherData.list[15].wind.speed + 'mph');
            humidity2.text('Humidity: ' + weatherData.list[15].main.humidity + '%');
            // -------------------------------------------------------------------------
            day3Forecast.text(weatherData.list[23].dt_txt.slice(5, 10)) 
            icon3.html(`<img src="https://openweathermap.org/img/w/${weatherIcon3}.png">`)
            temp3.text(foretemp3.slice(0, foretemp3.indexOf('.')) + ' \u00B0'+ 'F');
            wind3.text('Wind: ' + weatherData.list[23].wind.speed + 'mph');
            humidity3.text('Humidity: ' + weatherData.list[23].main.humidity + '%');
            // -------------------------------------------------------------------------
            day4Forecast.text(weatherData.list[31].dt_txt.slice(5, 10)) 
            icon4.html(`<img src="https://openweathermap.org/img/w/${weatherIcon4}.png">`)
            temp4.text(foretemp4.slice(0, foretemp4.indexOf('.')) + ' \u00B0'+ 'F');
            wind4.text('Wind: ' + weatherData.list[31].wind.speed + 'mph');
            humidity4.text('Humidity: ' + weatherData.list[31].main.humidity + '%');
            //// -------------------------------------------------------------------------
            day5Forecast.text(weatherData.list[39].dt_txt.slice(5, 10)) 
            icon5.html(`<img src="https://openweathermap.org/img/w/${weatherIcon5}.png">`)
            temp5.text(foretemp5.slice(0, foretemp5.indexOf('.')) + ' \u00B0'+ 'F');
            wind5.text('Wind: ' + weatherData.list[39].wind.speed + 'mph');
            humidity5.text('Humidity: ' + weatherData.list[39].main.humidity + '%');
        });

    });
}


function initSavedSearch () {
    var storedHistory = localStorage.getItem(searchHistory)
    if (storedHistory) {
        searchHistory = JSON.parse(storedHistory);
    }
    renderSavedSearch();
}


function renderSavedSearch () {
    for ( let i = 1; i < searchHistory.length; i++) {
        var btn = document.createElement('button') 
        btn.setAttribute('type', 'button')
        btn.textContent = searchHistory[i];
        sideHistory.append(btn)
        // var savedCity = JSON.parse(localStorage.getItem(searchHistory));
        // console.log(savedCity)
        
          }
          
    // console.log(id)
        }
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
    var display = $('#display')
    var city = $('#searchbar').val()
    
    console.log(city)
    $.get(geoURL + apiKey + '&q=' + city).then(function(findCity) {
        var lat = findCity[0].lat
        var lon = findCity[0].lon
        
        
        $.get(forecastURL + apiKey + '&lat=' + lat + '&lon=' + lon + '&units=imperial').then(function(weatherData) {
            console.log(weatherData)
            console.log(weatherData.city.name)

            var weatherIcon = weatherData.list[0].weather[0].icon
            var weatherIcon1 = weatherData.list[7].weather[0].icon
            var weatherIcon2 = weatherData.list[15].weather[0].icon
            var weatherIcon3 = weatherData.list[23].weather[0].icon
            var weatherIcon4 = weatherData.list[31].weather[0].icon
            var weatherIcon5 = weatherData.list[39].weather[0].icon

            var foretemp = String(weatherData.list[0].main.temp)
            var foretemp1 = String(weatherData.list[7].main.temp)
            var foretemp2 = String(weatherData.list[15].main.temp)
            var foretemp3 = String(weatherData.list[23].main.temp)
            var foretemp4 = String(weatherData.list[31].main.temp)
            var foretemp5 = String(weatherData.list[39].main.temp)

            
            var savedCity = weatherData.city.name;
            currentForecast.text(weatherData.city.name + ' ' + date);
            icon.html(`<img src="https://openweathermap.org/img/w/${weatherIcon}.png">`)
            temp.text(foretemp.slice(0, foretemp.indexOf('.')) + ' \u00B0'+ 'F');
            wind.text('Wind: ' + weatherData.list[0].wind.speed + 'mph');
            humidity.text('Humidity: ' + weatherData.list[0].main.humidity + '%');

            // 5 day forecast---------------------slice date--------------------
            day1Forecast.text(weatherData.list[7].dt_txt.slice(5, 10)) 
            icon1.html(`<img src="https://openweathermap.org/img/w/${weatherIcon1}.png">`)
            temp1.text(foretemp1.slice(0, foretemp1.indexOf('.')) + ' \u00B0'+ 'F');
            wind1.text('Wind: ' + weatherData.list[7].wind.speed + 'mph');
            humidity1.text('Humidity: ' + weatherData.list[7].main.humidity + '%');
            // -------------------------------------------------------------------------
            day2Forecast.text(weatherData.list[15].dt_txt.slice(5, 10)) 
            icon2.html(`<img src="https://openweathermap.org/img/w/${weatherIcon2}.png">`)
            temp2.text(foretemp2.slice(0, foretemp2.indexOf('.')) + ' \u00B0'+ 'F');
            wind2.text('Wind: ' + weatherData.list[15].wind.speed + 'mph');
            humidity2.text('Humidity: ' + weatherData.list[15].main.humidity + '%');
            // -------------------------------------------------------------------------
            day3Forecast.text(weatherData.list[23].dt_txt.slice(5, 10))
            icon3.html(`<img src="https://openweathermap.org/img/w/${weatherIcon3}.png">`)
            temp3.text(foretemp3.slice(0, foretemp3.indexOf('.')) + ' \u00B0'+ 'F');
            wind3.text('Wind: ' + weatherData.list[23].wind.speed + 'mph');
            humidity3.text('Humidity: ' + weatherData.list[23].main.humidity + '%');
            // -------------------------------------------------------------------------
            day4Forecast.text(weatherData.list[31].dt_txt.slice(5, 10))
            icon4.html(`<img src="https://openweathermap.org/img/w/${weatherIcon4}.png">`)
            temp4.text(foretemp4.slice(0, foretemp4.indexOf('.')) + ' \u00B0'+ 'F');
            wind4.text('Wind: ' + weatherData.list[31].wind.speed + 'mph');
            humidity4.text('Humidity: ' + weatherData.list[31].main.humidity + '%');
            //// -------------------------------------------------------------------------
            day5Forecast.text(weatherData.list[39].dt_txt.slice(5, 10))
            icon5.html(`<img src="https://openweathermap.org/img/w/${weatherIcon5}.png">`)
            temp5.text(foretemp5.slice(0, foretemp5.indexOf('.')) + ' \u00B0'+ 'F');
            wind5.text('Wind: ' + weatherData.list[39].wind.speed + 'mph');
            humidity5.text('Humidity: ' + weatherData.list[39].main.humidity + '%');

            
            // var btn = document.createElement('button') 
            // btn.setAttribute('type', 'button')
            // btn.setAttribute('id', weatherData.city.name)
            // btn.textContent = weatherData.city.name
            // // sideHistory.append(btn)
            // console.log(btn)
            // searchHistory.push(btn.id)
            // console.log(searchHistory)
            // localStorage.setItem('search-history', JSON.stringify(searchHistory))
            // renderSavedSearch();
            // btn.classList.add('history-btn, btn-history')
            // btn.textContent = searchhistory[i]
            // sideHistory.append(`<button id=${weatherData.city.name}>${weatherData.city.name}</button>`)

            // var savedCity = $('button')
            // console.log(savedCity)
            
            // renderSavedSearch();

            // -----this should be in a separate render function----------
            // sideHistory.append(`<button>${weatherData.city.name}</button>`)

            // var historyBtn = $('#savedHist')
            // historyBtn.text(savedCity)
            
        })

})
// $(btn).click(historySearch);
};


// $.get(forecastURL + apiKey  + '&lat=' + '39.7392364' + '&lon=' + '-104.984862').then(function(data) {
//     console.log(data)
// })


search.click(getCoords)


function init() {
   initialDisplay();
};
init()