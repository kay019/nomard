
const weather = document.querySelector(".js-weather");
const API_KEY = "c8b45cf582195a25f9c40302a1a8f7ac";
const COORDS = "coords";


function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `The Temperature in ${place} is ${temperature}°C`;
    });
}

function saveCoords(coordsOjs){

    localStorage.setItem(COORDS, JSON.stringify(coordsOjs));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOjs = {
        latitude,
        longitude
    };

    console.log(latitude);
    console.log(longitude);
    console.log(coordsOjs);

    saveCoords(coordsOjs);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("sorry. We can't find your position");
}

function askForCoords() {
    
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){

    const loadedCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
       askForCoords();
    } else {
      

    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}

function init() {
    loadCoords();
}

init();