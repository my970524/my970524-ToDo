'use strict';
const weather = document.querySelector(".js_weather");
const api_key = "f2b81bec26a3f720b9d83dbf49b2c945";
const COORDS = "Coords";

function getWeather(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`).
    then(function(response){
       return response.json();
    }).
    then(function(json) {
        const city = json.list[3].name;
        const temp = json.list[3].main.temp;
        const description = json.list[3].weather[0].description;
        weather.innerText = `${city} & ${temp}°C & ${description}`;
    })
}

function savePosition(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function successGetCoords(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    savePosition(coordsObj);
    getWeather(latitude, longitude);
}

function errorGetCoords() {

}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(successGetCoords, errorGetCoords);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    }   else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();