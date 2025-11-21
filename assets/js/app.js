//temporary
const apiKey = "https://api.openweathermap.org/data/2.5/weather";
const getUrl = " https://api.openweathermap.org/data/2.5/forecast";

const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const messageEl = document.querySelector('#message');
const currentWeatherEl = document.querySelector('#current-weather');
const forecastEl = document.querySelector('#forecast');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
});