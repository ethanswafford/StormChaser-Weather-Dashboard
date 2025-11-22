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

fetch(getUrl)
    .then(function (res) {
        console.log('Response: ', res);
        return res.json();
    })
    .then(function (data) {
        console.log('Data: ', data);

        const code = Number(data.cod);

        if (code !== 200) {
            showMessage(
                "Forecast request failed (" + data.cod + "): " + (data.message || ""),
                "error"
            );
            return;
        }

        showMessage(
            "Showing a few upcoming forecast entries for " + data.city.name + ".",
            "info"
        );

        renderForecastCards(data);
    })
    .catch(function (error) {
        console.error("Error fetching forecast:", error);
        showMessage("Something went wrong fetching the forecast.", "error");
    });