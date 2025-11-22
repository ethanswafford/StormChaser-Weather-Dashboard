//temporary
const apiKey = "12bbb864e1faecf33a4bc60505780bcf";
const urlForecast = "https://api.openweathermap.org/data/2.5/weather";
const getUrl = " https://api.openweathermap.org/data/2.5/forecast";

const searchForm = document.querySelector('#search-form');
const location = document.querySelector('#location');
const messageEl = document.querySelector('#message');
const currentWeatherEl = document.querySelector('#current-weather');
const forecastEl = document.querySelector('#forecast');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const location = location.value.trim();

    if (!location) {
        setMessage('Please enter or type city or town', true)
        return;
    }

    fetchRadarInfo(location);

});

function showMessage(text, type) {
    messageEl.textContent = text;

    if (type === "error") {
        messageEl.classList.remove("text-info");
        messageEl.classList.add("text-danger");
    } else {
        messageEl.classList.remove("text-danger");
        messageEl.classList.add("text-info");
    }
}