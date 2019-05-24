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

    }
}

function init() {
    loadCoords();
}

init();