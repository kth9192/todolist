const weather = document.querySelector(".js-weather");


const COORDS = 'coords';

function saveCoords(coordsObj) {

    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {

    const latitude = position.coords.latitude;
    const longitute = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitute
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitute);
}

function handleGeoError() {
    console.log("geo error");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitute);
    }
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;

            weather.innerHTML = `${temperature} @ ${place}`;
        });
}

function init() {
    loadCoords();
}

init();