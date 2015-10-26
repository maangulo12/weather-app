;(function() {
    var cityNameInput = document.querySelector(".city__nameInput");
    var weatherState = document.querySelector(".city__weather");
    var cityTemp = document.querySelector(".city__temp");
    var APIKEY = '8e2d87f18292dd1305f3d6fbde147405';
    var currentCity = cityNameInput.value;

    function convertFromKelvin(kelvinTemp) {
        return Math.round(kelvinTemp * (9/5) - 459.67);
    }

    function handleGetWeatherData(data) {
        var parsedJSON = JSON.parse(data.target.response);
        weatherState.innerHTML = parsedJSON.weather[0].description;
        cityTemp.innerHTML = convertFromKelvin(parsedJSON.main.temp);
    }

    function getCurrentWeather() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + currentCity + '&APPID=' + APIKEY);
        request.onload = handleGetWeatherData;
        request.send();
    }

    cityNameInput.addEventListener('change', function(e) {
        currentCity = this.value;
        getCurrentWeather();
    });

    getCurrentWeather();

})();
